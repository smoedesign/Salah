import React, { memo, useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

function Search({ title, onPress }) {
  const deviceLanguage = useDeviceLanguage();
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.container,
          {
            flexDirection: deviceLanguage.startsWith("ar")
              ? "row-reverse"
              : "row",
          },
        ]}>
        <AppButton style={styles.title} title={title} />
        <TextInput style={styles.input} editable={false} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
  input: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    padding: 20,
    color: colors.white,
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    color: colors.white,
    backgroundColor: colors.secoundery,
    width: 80,
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
  },
});
export default memo(Search);
