import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import FortyNawawi from "../Screen/FortyNawawi";
import FortyNawawiDetailsScreen from "../Screen/FortyNawawiDetailsScreen";

const Stack = createNativeStackNavigator();

const FortyNawawiNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Forty"
      component={FortyNawawi}
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
            <Text style={{ fontSize: 20, fontWeight: 600 }}>
              {"الاربعون النووية"}
            </Text>
          </Pressable>
        ),
        headerBackTitleVisible: false,
        headerBackVisible: false,
        navigationBarHidden: true,
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
              flexDirection: "row-reverse",
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
        headerBackTitleVisible: false,
        headerBackVisible: false,
        navigationBarHidden: true,
      })}
    />
   
  </Stack.Navigator>
);

export default FortyNawawiNavigator;
