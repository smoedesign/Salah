import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "../components/ListItems";
import { Share } from "react-native";
import ShareImage from "../components/ShareImage";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import Header from "../components/Header";
import { ImageBackground } from "react-native";
import AppText from "../components/AppText";

function FortyNawawiDetailsScreen({ route, navigation }) {
  const forty = route.params;

  return (
    <ImageBackground
      style={{ flex: 1, padding: 10 }}
      source={require("../assets/babyBlue.jpg")}>
      <View style={styles.container}>
        <ListItem descriptin={forty.description} refrence={forty.refrence} />
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={() =>
              navigation.navigate({
                name: "FortyNawawiDetailsScreen",
                title: forty.title,
                params: {
                  route: forty.id + 1,
                },
              })
            }
            title="التالي"
            style={styles.button}
          />
          <ShareImage
            shareComponent={"مشاركة"}
            descriptin={forty.description}
            refrence={forty.refrence}
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
