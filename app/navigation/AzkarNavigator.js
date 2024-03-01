import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import AzkarScreen from "../Screen/AzkarScreen";
import { AntDesign } from "@expo/vector-icons";

import AzkarDetailsScreen from "../Screen/AzkarDetailsScreen";
import { Text, Pressable } from "react-native";

const Stack = createNativeStackNavigator();

const AzkarNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Azkar"
      component={AzkarScreen}
      options={({ navigation }) => ({
        title: "",
        headerRight: () => (
          <Pressable
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              marginRight: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <AntDesign name="right" size={24} color="black" />
            <Text style={{ fontSize: 20, fontWeight: 600 }}> {"الاذكار"}</Text>
          </Pressable>
        ),
        headerBackTitleVisible: false,
        headerBackVisible: false,
        navigationBarHidden: true,
      })}
    />
    <Stack.Screen
      name="AzkarDetailsScreen"
      component={AzkarDetailsScreen}
      options={({ navigation, route }) => {
        return {
          title: "",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={30} color="black" />
              <Text style={{ fontSize: 20 }}>{route.params?.azkar?.name}</Text>
            </Pressable>
          ),
          headerBackTitleVisible: false,
          headerBackVisible: false,
          navigationBarHidden: true,
        };
      }}
    />
  </Stack.Navigator>
);

export default AzkarNavigator;
