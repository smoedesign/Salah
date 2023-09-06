import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import colors from "../config/colors";
import AppButton from "./AppButton";

function Search({ title }) {
  const [text, onChangeText] = useState();
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <TextInput
          editable
          value={text}
          style={styles.input}
          onChangeText={onChangeText}
          clearTextOnFocus
          keyboardType="default"
        />
        <AppButton
          style={styles.title}
          onPress={(text) => {
            if (!text) return;

            onChangeText(text);
          }}
          title={title}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
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
