import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";
import NamesOfAllah from "../Screen/NamesOfAllah";
import SibhaScreen from "../Screen/SibhaScreen";
import MenuNavigator from "./MenuNavigator";
import AzkarNavigator from "./AzkarNavigator";
import FortyNawawiNavigator from "./FortyNavigatior";
import { Text, Pressable, AppState } from "react-native";
import SearchNavigator from "./SearchNavigator";
import * as SQLite from "expo-sqlite";
import React, { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import navigation from "./RootNavigation";

const db = SQLite.openDatabase("salahApp.db");

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  const [appState, setAppState] = useState(AppState.currentState);
  const [notificationsScheduled, setNotificationsScheduled] = useState(false);

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

  const scheduleLocalNotification = async () => {
    const now = new Date();
    const SixPM = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      18,
      0,
      0,
      0
    );
    const SixAm = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      6,
      0,
      0,
      0
    );
    const todayAt9PM = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      21,
      0,
      0,
      0
    );
    if (todayAt9PM < now) {
      todayAt9PM.setDate(todayAt9PM.getDate() + 1);
    }
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
          date: SixAm,
          weekday: "",
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
          date: SixPM,
          repeats: true,
          weekday: "",
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
          date: todayAt9PM,
          repeats: true,
          weekday: "",
        },
      });
      console.log("Daily notification scheduled successfully.");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleAppStateChange = (nextAppState) => {
      if (
        appState.match(/inactive|background/) &&
        nextAppState === "active" &&
        !notificationsScheduled
      ) {
        scheduleLocalNotification();
        createNotificationChannel();
        setNotificationsScheduled(true);
      }
      setAppState(nextAppState);
    };

    AppState.addEventListener("change", handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", handleAppStateChange);
    };
  }, [appState, notificationsScheduled]);
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
                flexDirection: "row-reverse",
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
          navigationBarHidden: true,
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
        component={SibhaScreen}
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
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{"السبحة"}</Text>
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

export default HomeNavigator;
