import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import NamesOfAllah from "../Screen/NamesOfAllah";
import SibhaScreen from "../Screen/SibhaScreen";
import MenuNavigator from "./MenuNavigator";
import AzkarNavigator from "./AzkarNavigator";
import FortyNawawiNavigator from "./FortyNavigatior";
import { Text, Pressable, AppState } from "react-native";
import SearchNavigator from "./SearchNavigator";
import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import navigation from "./RootNavigation";
import useDeviceLanguage from "../hooks/useDeviceLanguge";
import SibhaNavigator from "./SibhaNavigator";
import * as NavigationBar from "expo-navigation-bar";
import { setStatusBarHidden } from "expo-status-bar";

const Stack = createNativeStackNavigator();
// Function to set NavigationBar and status bar configurations based on the visibility of the model
const setNavigationAndStatusBarConfig = () => {
  // Configuration for the rest of the app when the model is not visible
  NavigationBar.setPositionAsync("absolute");
  NavigationBar.setVisibilityAsync("hidden");
  NavigationBar.setBehaviorAsync("overlay-swipe");
  NavigationBar.setBackgroundColorAsync("#00000080");
  setStatusBarHidden(true, "none");
};
// Configuration for the rest of the app when the model is not visible

const HomeNavigator = () => {
  const deviceLanguage = useDeviceLanguage();

  const notificationListener = useRef(null);
  const responseListener = useRef(null);
  const createNotificationChannel = async () => {
    await Notifications.setNotificationChannelAsync("high-priority", {
      name: "High Priority",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF2D55",
    });
  };

  const scheduleLocalNotification = useCallback(async () => {
    const trigger = new Date(Date.now() + 60 * 60 * 1000); // add 1 hour to the current time
    trigger.setHours(6); // set the hour to 6
    trigger.setMinutes(0); // set the minutes to 0
    trigger.setSeconds(0); // set the seconds to 0

    const trigger6PM = new Date(Date.now() + 60 * 60 * 1000); // add 1 hour to the current time
    trigger6PM.setHours(18); // set the hour to 18
    trigger6PM.setMinutes(0); // set the minutes to 0
    trigger6PM.setSeconds(0); // set the seconds to 0

    const trigger9PM = new Date(Date.now() + 60 * 60 * 1000); // add 1 hour to the current time
    trigger9PM.setHours(21); // set the hour to 21
    trigger9PM.setMinutes(0); // set the minutes to 0
    trigger9PM.setSeconds(0); // set the seconds to 0

    try {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return;
      }
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "أذكار الصباح",
          body: " حان الان موعد أذكار الصباح",

          sound: "default",
          android: {
            channelId: "high-priority",
            icon: require("../assets/logo.png"),
            color: "#ffffff",
          },
        },
        identifier: "108b993f-944f-42ac-85a1-ba6e469761b1",
        trigger: {
          date: trigger,

          repeats: true,
        },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "أذكار المساء",
          body: "حان الان موعد أذكار المساء",
          sound: "default",
          android: {
            channelId: "high-priority",
            icon: require("../assets/logo.png"),
            color: "#ffffff",
          },
        },
        identifier: "bc1df5d6-de3e-4f33-886b-2c0e649e2119",
        trigger: {
          date: trigger6PM,
          repeats: true,
        },
      });
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "أذكار النوم",
          body: "حان الان موعد أذكار النوم",

          sound: "default",
          android: {
            channelId: "high-priority",
            icon: require("../assets/logo.png"),
            color: "#ffffff",
          },
        },
        identifier: "9c6b94cc-8c1d-4bf2-bfaf-7a1216b7617a",
        trigger: {
          date: trigger9PM,
          repeats: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    scheduleLocalNotification();
    createNotificationChannel();
    setNavigationAndStatusBarConfig();
  }, []);
  useEffect(() => {
    const handleNotification = () => {
      Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: true,
        }),
      });
    };
    notificationListener.current =
      Notifications.addNotificationReceivedListener(() => {
        handleNotification();
      });
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const _id = response.notification.request.identifier;
        const name = response.notification.request.content.title;
        navigation.navigate("AzkarScreen", {
          screen: "AzkarDetailsScreen",
          params: {
            azkar: {
              _id,
              name,
            },
          },
        });
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, [navigation]);
  return (
    <Stack.Navigator
      screenOptions={{
        navigationBarHidden: true,
      }}>
      <Stack.Screen
        name="MenuNavigator"
        component={MenuNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NamesOfAllah"
        component={NamesOfAllah}
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
              <Text style={{ fontSize: 20 }}> {"أسماء الله الحسني"}</Text>
            </Pressable>
          ),
          headerBackTitleVisible: false,
          headerBackVisible: false,
        })}
      />

      <Stack.Screen
        name="AzkarScreen"
        component={AzkarNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FortyNawawi"
        component={FortyNawawiNavigator}
        options={{
          title: "الاربعون النووية",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchNavigator}
        options={{
          headerShown: false,
          title: "البحث",
        }}
      />
      <Stack.Screen
        name="SibhaScreen"
        component={SibhaNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
