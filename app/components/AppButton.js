import React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  disabled,
  Pressable,
} from "react-native";
import colors from "../config/colors";

function AppButton({ style, title, onPress, color = "white" }) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
      underlayColor={colors.blue}>
      <Text style={[styles.text, { color: color }]}> {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    zIndex: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
  },
});
export default AppButton;
