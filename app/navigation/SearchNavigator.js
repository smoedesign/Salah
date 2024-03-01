// AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AzkarDetailsScreen from "../Screen/AzkarDetailsScreen";
import SearchScreen from "../Screen/SearchScreen";
import FortyNawawiDetailsScreen from "../Screen/FortyNawawiDetailsScreen";
import NamesOfAllah from "../Screen/NamesOfAllah";
import { Pressable, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => (
  <Stack.Navigator>
    {/* Your other screens go here */}
    <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={({ navigation, route }) => ({
        title: "",
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.white,
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
            <AntDesign name="right" size={24} color="white" />
            <Text
              style={{ fontSize: 20, fontWeight: 600, color: colors.white }}>
              {"البحث"}
            </Text>
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
      options={({ navigation, route }) => ({
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
              {route.params?.ziker.name}
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
    <Stack.Screen name="NamesOfAllah" component={NamesOfAllah} />
  </Stack.Navigator>
);

export default SearchNavigator;
