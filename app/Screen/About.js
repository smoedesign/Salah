import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {
          "هذا التطبيق وقف لروح المرحوم صلاح الدين حسن محمد، لا تنسوه من صالح الدعاء."
        }
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  text: {
    color: colors.primary,
    fontSize: 18,
    marginTop: 20,
  },
});
export default About;
