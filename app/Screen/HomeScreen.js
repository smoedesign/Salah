import React, { useEffect, useRef, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, Platform } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Header from "../components/Header";
import AppButton from "../components/AppButton";
import Search from "../components/Search";
import { Dimensions } from "react-native";
import * as Notifications from "expo-notifications";
import RootNavigation from "../navigation/RootNavigation";

const { height } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.content}>
        <AppButton style={styles.duaaButton} />

        <Search
          title="أبحث"
          editable={false}
          onPress={() => navigation.navigate("SearchScreen")}
        />
        <View style={styles.buttonContaıner}>
          <AppButton
            title="أسماء الله الحسني"
            onPress={() => navigation.navigate("NamesOfAllah")}
            style={styles.button}
          />
          <AppButton
            title="الاذكار"
            style={styles.button}
            onPress={() => RootNavigation.navigate("AzkarScreen")}
          />
          <AppButton
            title="السبحة"
            style={styles.button}
            onPress={() => navigation.navigate("SibhaScreen")}
          />
          <AppButton
            title="الاربعون النووية"
            style={styles.button}
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
    height: height / 3.7,
    backgroundColor: colors.primary,
  },
  button: {
    marginVertical: 8,
    backgroundColor: colors.primary,
    width: "48%",
    height: height / 4,
  },
  buttonContaıner: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    height: height / 1.9,
  },
});
export default HomeScreen;
