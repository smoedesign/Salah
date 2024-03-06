import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";

function Search({ title, editable, onPress, inputText }) {
  const [text, onChangeText] = useState([]);
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <AppButton
          style={styles.title}
          
          title={title}
        />
        <TextInput
          inputMode="text"
          textAlign="right"
          editable={editable}
          value={inputText}
          style={styles.input}
          onChangeText={onChangeText}
          clearTextOnFocus
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginVertical: 20,
    justifyContent: "flex-end",
    flexDirection: "row",
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
export default Search;
