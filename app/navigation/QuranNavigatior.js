import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import QuranScreen from "../Screen/QuranScreen";
import QuranDetailsScreen from "../Screen/QuranDetailsScreen";

const Stack = createNativeStackNavigator();

const QuranNavigatior = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Quran"
      component={QuranScreen}
      options={{ title: "القران الكريم" }}z
    />
    <Stack.Screen
      name="QuranDetail"
      component={QuranDetailsScreen}
      options={({ route }) => ({ title: route.params.name })}
    />
  </Stack.Navigator>
);

export default QuranNavigatior;
