import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppButton from "../components/AppButton";
import Search from "../components/Search";
import { Dimensions } from "react-native";
import RootNavigation from "../navigation/RootNavigation";
import DuaaContainer from "../components/DuaaContainer";

const { height } = Dimensions.get("window");
const container1Height = height / 4.3;
const container2Height = height / 2;
const container3Height = height / 3.3;
function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.content}>
        <DuaaContainer
          style={[styles.duaaButton, { height: container3Height }]}
        />

        <Search
          title="أبحث"
          editable={false}
          onPress={() => navigation.navigate("SearchScreen")}
        />
        <View style={[styles.buttonContaıner, { height: container2Height }]}>
          <AppButton
            title="أسماء الله الحسني"
            onPress={() => navigation.navigate("NamesOfAllah")}
            style={[styles.button, { height: container1Height }]}
          />
          <AppButton
            title="الاذكار"
            style={[styles.button, { height: container1Height }]}
            onPress={() => RootNavigation.navigate("AzkarScreen")}
          />
          <AppButton
            title="السبحة"
            style={[styles.button, { height: container1Height }]}
            onPress={() => navigation.navigate("SibhaScreen")}
          />
          <AppButton
            title="الاربعون النووية"
            style={[styles.button, { height: container1Height }]}
            onPress={() => navigation.navigate("FortyNawawi")}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    width: "100%",
    marginVertical: 5,
    height: height,
    display: "flex",
    overflow: "hidden",
  },

  duaaButton: {
    width: "100%",

    backgroundColor: colors.primary,
    padding: 20,

    display: "flex",
    textAlignVertical: "center",
    alignContent: "center",
  },
  button: {
    marginVertical: 8,
    backgroundColor: colors.primary,
    width: "48%",
    color: colors.lightGray,
  },
  buttonContaıner: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default HomeScreen;
