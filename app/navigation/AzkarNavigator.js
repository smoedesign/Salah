import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AzkarScreen from "../Screen/AzkarScreen";
import AzkarDetailsScreen from "../Screen/AzkarDetailsScreen";

const Stack = createNativeStackNavigator();

const AzkarNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Azkar"
      component={AzkarScreen}
      options={{ title: "الاذكار" }}
    />
    <Stack.Screen
      name="AzkarDetailsScreen"
      component={AzkarDetailsScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

export default AzkarNavigator;
