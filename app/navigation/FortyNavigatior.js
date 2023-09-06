import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AzkarScreen from "../Screen/AzkarScreen";
import AzkarDetailsScreen from "../Screen/AzkarDetailsScreen";
import FortyNawawi from "../Screen/FortyNawawi";
import FortyNawawiDetailsScreen from "../Screen/FortyNawawiDetailsScreen";

const Stack = createNativeStackNavigator();

const FortyNawawiNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Forty"
      component={FortyNawawi}
      options={{ title: "الاربعون النووية" }}
    />
    <Stack.Screen
      name="FortyNawawiDetailsScreen"
      component={FortyNawawiDetailsScreen}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
);

export default FortyNawawiNavigator;
