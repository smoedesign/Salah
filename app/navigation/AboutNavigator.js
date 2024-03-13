import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Text, Pressable } from "react-native";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

import Setting from "../Screen/Setting";
import colors from "../config/colors";
import About from "../Screen/About";

const Stack = createNativeStackNavigator();

const AboutNavigator = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: "",

          drawerLabel: "حول التطبيق",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: deviceLanguage.startsWith("ar")
                  ? "row"
                  : "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color={colors.primary} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.primary,
                }}>
                {"حول التطبيق"}
              </Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          headerBackTitleVisible: false,
          headerBackVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default AboutNavigator;
