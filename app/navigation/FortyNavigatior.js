import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FortyNawawi from "../Screen/FortyNawawi";
import FortyNawawiDetailsScreen from "../Screen/FortyNawawiDetailsScreen";
import * as Localization from "expo-localization";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

const Stack = createNativeStackNavigator();

const FortyNawawiNavigator = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackVisible: false,
        navigationBarHidden: true,
      }}>
      <Stack.Screen
        name="Forty"
        component={FortyNawawi}
        options={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: deviceLanguage.startsWith("ar")
                  ? "row"
                  : "row-reverse",
                marginRight: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {"الاربعون النووية"}
              </Text>
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="FortyNawawiDetailsScreen"
        component={FortyNawawiDetailsScreen}
        options={({ route, navigation }) => ({
          title: "",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: deviceLanguage.startsWith("ar")
                  ? "row"
                  : "row-reverse",
                marginRight: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {route.params.nameofhadith}
              </Text>
            </Pressable>
          ),
         
        })}
      />
    </Stack.Navigator>
  );
};

export default FortyNawawiNavigator;
