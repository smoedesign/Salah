import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AzkarDetailsScreen from "../Screen/AzkarDetailsScreen";
import React from "react";
import AzkarScreen from "../Screen/AzkarScreen";
import AzkarNavigator from "./AzkarNavigator";
import HomeScreen from "../Screen/HomeScreen";

const Tab = createMaterialTopTabNavigator();

const AppTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="AzkarDetailsScreen" component={AzkarScreen} />
    <Tab.Screen name="HomeScreen" component={AzkarDetailsScreen} />
  </Tab.Navigator>
);

export default AppTabNavigator;
