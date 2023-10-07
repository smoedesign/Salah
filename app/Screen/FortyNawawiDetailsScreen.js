import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
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
        } [$indexid+1]       
        `,
        { indexid: forty.indexid }
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
        <ListItem descriptin={forty.description} refrence={forty.reference} />
        <View style={styles.buttonContainer}>
          {forty.indexid == 42 ? (
            <AppButton
              onPress={() => {
                Toast.show("you reached the end of the Forty Nawawia", {
                  duration: Toast.durations.LONG,
                  position: Toast.positions.CENTER,
                  shadow: true,
                  animation: true,
                  hideOnPress: true,
                  delay: 30,
                });
                navigation.popToTop();
              }}
              title="التالي"
              style={styles.button}
            />
          ) : (
            <AppButton
              onPress={() =>
                navigation.push("FortyNawawiDetailsScreen", nextItem)
              }
              title="التالي"
              style={styles.button}
            />
          )}

          <ShareImage
            shareComponent={"مشاركة"}
            descriptin={forty.description}
            refrence={forty.reference}
          />
          <AppButton
            onPress={() => {
              navigation.goBack();
            }}
            title={"السابق"}
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
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row-reverse",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.secoundery,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
});
export default FortyNawawiDetailsScreen;
