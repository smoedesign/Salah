import React, { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import AppButton from "./AppButton";
import colors from "../config/colors";

function Counter({ number, style }) {
  const [count, setCount] = useState(number);

  const onPress = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <Pressable onPress={onPress} underlayColor={colors.blue}>
      {number && <Text style={styles.container}>{count}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    fontSize: 18,

    backgroundColor: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
export default Counter;
