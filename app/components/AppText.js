import { StyleSheet, Text } from "react-native";
import React, { memo } from "react";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
});
export default memo(AppText);
