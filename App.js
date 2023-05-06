import { View, Text, StatusBar, StyleSheet, Modal } from "react-native";
import { useEffect, useState, useRef } from "react";
import { Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RootSiblingParent } from "react-native-root-siblings";
import SibhaScreen from "./app/Screen/SibhaScreen";
import { MenuProvider } from "react-native-popup-menu";
import NamesOfAllah from "./app/Screen/NamesOfAllah";
import FortyNawawi from "./app/Screen/FortyNawawi";

export default function App() {
  return (
    <>
      <RootSiblingParent>
        <MenuProvider>
          <FortyNawawi />
        </MenuProvider>
      </RootSiblingParent>
    </> 
  );
}
