import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";

function ErrorMessages({ error }) {
  if (!error) return null;
  return (
    <View style={styles.container}>
      <AppText style={{ color: "red" }}>{error}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ErrorMessages;
