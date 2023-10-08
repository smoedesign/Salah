import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItems";
import { Share } from "react-native";
import ShareImage from "../components/ShareImage";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import clients from "../../sanity";
import { ImageBackground } from "react-native";
import AppText from "../components/AppText";
import Toast from "react-native-root-toast";

function FortyNawawiDetailsScreen({ route, navigation }) {
  const [nextItem, setNextItems] = useState([]);
  const forty = route.params;

  useEffect(() => {
    clients
      .fetch(
        `
        *[_type=="fortyNawawi" ] | order(indexid){
          ...
        }       
        `
      )
      .then((data) => {
        setNextItems(data);
      });
  }, []);

  return (
    <ImageBackground
      style={{ flex: 1, padding: 10 }}
      source={require("../assets/babyBlue.jpg")}>
      <View style={styles.container}>
        <View style={{ height: "70%" }}>
          <ListItem descriptin={forty.description} refrence={forty.reference} />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() => {
              nextItem.map((hadith) => {
                if (
                  hadith.indexid === forty.indexid - 1 &&
                  forty.indexid > 1 &&
                  hadith.indexid > 1
                ) {
                  navigation.replace("FortyNawawiDetailsScreen", hadith);
                } else if (hadith.indexid === 1 && forty.indexid === 1) {
                  navigation.popToTop();
                } else {
                  return;
                }
              });
            }}
            title={"السابق"}
            style={styles.button}
          />

          <ShareImage
            shareComponent={"مشاركة"}
            descriptin={forty.description}
            refrence={forty.reference}
          />

          <AppButton
            onPress={() => {
              nextItem.map((hadith) => {
                if (
                  hadith.indexid === forty.indexid + 1 &&
                  forty.indexid <= 42 &&
                  hadith.indexid <= 42
                ) {
                  navigation.navigate("FortyNawawiDetailsScreen", hadith);
                } else if (hadith.indexid === 42 && forty.indexid === 42) {
                  Toast.show("you reached the end of the Forty Nawawia", {
                    duration: Toast.durations.LONG,
                    position: Toast.positions.CENTER,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 10,
                  });
                  navigation.popToTop();
                } else {
                  return;
                }
              });
            }}
            title={"التالي"}
            style={styles.button}
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
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    display: "flex",
    marginTop: 20,
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
export default FortyNawawiDetailsScreen;
