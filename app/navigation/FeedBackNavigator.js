import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import { Text, Pressable } from "react-native";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

import Setting from "../Screen/Setting";
import FeedbackScreens from "../Screen/FeedbackScreen";

const Stack = createNativeStackNavigator();

const FeedBackNavigator = () => {
  const deviceLanguage = useDeviceLanguage();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={FeedbackScreens}
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
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {"تواصل معنا"}
              </Text>
            </Pressable>
          ),
          headerBackTitleVisible: false,
          headerBackVisible: false,
          navigationBarHidden: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default FeedBackNavigator;
