import React from "react";
import {
  Text,
  StyleSheet,
  TouchableHighlight,
  disabled,
  Pressable,
} from "react-native";
import colors from "../config/colors";

function AppButton({
  number,
  style,
  title,
  onPress,
  numberStyle,
  color = "white",
  disabled,
}) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
      underlayColor={colors.blue}>
      {number && <Text style={numberStyle}>{number}</Text>}
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
    fontSize: 17,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 200,
    color: colors.lightGray,
  },
});
export default AppButton;
