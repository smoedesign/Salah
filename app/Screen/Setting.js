import React from "react";
import AppButton from "../components/AppButton";
import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";
import * as Notifications from "expo-notifications";

function Setting() {
  const HandelPress = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={styles.subContainer} onPress={HandelPress}>
        <AppButton
          title={"تفعيل الاشعارات"}
          color={colors.lightGray}
          style={{ marginRight: 5 }}
        />
        <AntDesign name="bells" color={colors.lightGray} size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15, paddingVertical: 35 },
  subContainer: {
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 70,
    width: "100%",
    borderRadius: 3,
  },
});
export default Setting;
