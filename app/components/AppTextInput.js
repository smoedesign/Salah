import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import colors from "../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={colors.secoundery}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textinput}
        {...otherProps}
        placeholderTextColor={colors.babyBlue}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textinput: {
    fontSize: 18,
    color: colors.white,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
});
export default AppTextInput;
