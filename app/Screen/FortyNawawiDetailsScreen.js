import React, { useEffect, memo } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/ListItems";
import ShareImage from "../components/ShareImage";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import { ImageBackground } from "react-native";
import Toast from "react-native-root-toast";
import useDatabase from "../hooks/useDatabase";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

function FortyNawawiDetailsScreen({ route, navigation }) {
  const deviceLanguage = useDeviceLanguage();

  const forty = route.params;

  const { data: nextItem, request } = useDatabase("fortyNawawia");

  useEffect(() => {
    request("fortyNawawia");
  }, []);

  return (
    <ImageBackground
      style={{ flex: 1, padding: 10 }}
      source={require("../assets/babyBlue.jpg")}>
      <View style={styles.container}>
        <View style={{ height: "auto" }}>
          <ListItem
            descriptin={forty.description}
            refrence={forty.reference}
            fonts={{
              textAlign: "center",
              fontSize: 12,
              marginVertical: 13,
              color: "#708090",
              paddingHorizontal: 20,
            }}
            headers={{
              fontSize: 20,
              fontWeight: "500",
              paddingVertical: 15,
              textAlign: "center",
            }}
          />
        </View>
        <View
          style={[
            styles.buttonContainer,
            {
              flexDirection: deviceLanguage.startsWith("ar")
                ? "row"
                : "row-reverse",
            },
          ]}>
          <AppButton
            onPress={() => {
              const previousHadith = nextItem.find(
                (hadith) =>
                  hadith.indexid === forty.indexid - 1 &&
                  forty.indexid > 0 &&
                  hadith.indexid > 0
              );
              if (previousHadith) {
                navigation.navigate("FortyNawawiDetailsScreen", previousHadith);
              }
            }}
            title={"السابق"}
            style={forty.indexid === 1 ? styles.buttonActive : styles.button}
            disabled={forty.indexid === 1}
          />

          <ShareImage
            shareComponent={"مشاركة"}
            descriptin={forty.description}
            refrence={forty.reference}
            font={{
              textAlign: "center",
              fontSize: 12,
              marginTop: 25,
              color: "#708090",
              paddingHorizontal: 15,
            }}
            header={{
              fontSize: 18,
              fontWeight: "500",
              paddingVertical: 15,
              textAlign: "center",
            }}
          />

          <AppButton
            onPress={() => {
              const nextHadith = nextItem.find(
                (hadith) =>
                  hadith.indexid === forty.indexid + 1 &&
                  forty.indexid <= 42 &&
                  hadith.indexid <= 42
              );
              if (nextHadith) {
                navigation.navigate("FortyNawawiDetailsScreen", nextHadith);
              } else if (forty.indexid === 42) {
                Toast.show("لقد أكملت الاربعون النووية", {
                  duration: Toast.durations.LONG,
                  position: Toast.positions.CENTER,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 10,
                });
              }
            }}
            title={"التالي"}
            style={forty.indexid === 42 ? styles.buttonActive : styles.button}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  buttonActive: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    display: "flex",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.secoundery,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default memo(FortyNawawiDetailsScreen);
