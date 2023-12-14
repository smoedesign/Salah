import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import HomeScreen from "../Screen/HomeScreen";
import NamesOfAllah from "../Screen/NamesOfAllah";
import AzkarScreen from "../Screen/AzkarScreen";
import FortyNawawi from "../Screen/FortyNawawi";
import SibhaScreen from "../Screen/SibhaScreen";
import colors from "../config/colors";
import MenuNavigator from "./MenuNavigator";
import Header from "../components/Header";
import AzkarNavigator from "./AzkarNavigator";
import FortyNawawiNavigator from "./FortyNavigatior";
import QuranNavigatior from "./QuranNavigatior";
const Stack = createNativeStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator screenOptions={{ statusBarTranslucent: true }}>
    <Stack.Screen
      name="MenuNavigator"
      component={MenuNavigator}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="NamesOfAllah"
      component={NamesOfAllah}
      options={{
        title: "أسماء الله الحسني",
      }}
    />

    <Stack.Screen
      name="QuranScreen"
      component={QuranNavigatior}
      options={{
        headerShown: false,

        title: "القران الكريم",
      }}
    />

    <Stack.Screen
      name="AzkarScreen"
      component={AzkarNavigator}
      options={{
        title: "الاذكار",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="FortyNawawi"
      component={FortyNawawiNavigator}
      options={{
        title: "الاربعون النووية",
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="SibhaScreen"
      component={SibhaScreen}
      options={{
        title: "السبحة",
      }}
    />
  </Stack.Navigator>
);

export default HomeNavigator;
