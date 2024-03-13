import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Text, Pressable } from "react-native";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

import SibhaScreen from "../Screen/SibhaScreen";

const Stack = createNativeStackNavigator();

const SibhaNavigator = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackVisible: false,
        navigationBarHidden: true,
      }}>
      <Stack.Screen
        name="SibhaNav"
        component={SibhaScreen}
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
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{"السبحة"}</Text>
            </Pressable>
          ),
   
        })}
      />
    </Stack.Navigator>
  );
};

export default SibhaNavigator;
