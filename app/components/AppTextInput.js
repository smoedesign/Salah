import React, { useState } from "react";
import { View, StyleSheet, Keyboard } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import colors from "../config/colors";

function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={"gray"}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textinput}
        {...otherProps}
        placeholderTextColor={"gray"}
        blurOnSubmit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    flexDirection: "row-reverse",
    width: "95%",
    padding: 15,
    height: 70,
    marginVertical: 10,

    alignItems: "center",
  },
  textinput: {
    fontSize: 18,
    color: colors.white,
    width: "95%",
    padding: 10,
  },
  icon: {
    marginLeft: 5,
  },
});
export default AppTextInput;
