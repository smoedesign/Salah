import { RootSiblingParent } from "react-native-root-siblings";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/HomeNavigation";
import NavigationTheme from "./app/navigation/NavigationTheme";
import "react-native-url-polyfill/auto";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import colors from "./app/config/colors";
import AppButton from "./app/components/AppButton";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        <RootSiblingParent>
          <MenuProvider>
            <HomeNavigator />
          </MenuProvider>
        </RootSiblingParent>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  containers: {
    height: "100%",
  },
  container: {
    width: "100%",
    height: 50,
    marginVertical: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
  autocompleteContainer: {
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  input: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    paddingHorizontal: 20,
    color: colors.white,
    fontSize: 15,
    height: "100%",
  },
  title: {
    fontSize: 18,
    color: colors.white,
    backgroundColor: colors.secoundery,
    width: 80,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
