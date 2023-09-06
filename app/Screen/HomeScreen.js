import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import Header from "../components/Header";
import AppButton from "../components/AppButton";
import Search from "../components/Search";

function HomeScreen({ navigation }) {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <AppButton
            style={styles.duaaButton}
            title="أسماء الله الحسني"
            onPress={() => navigation.navigate("NamesOfAllah")}
          />
          <Search title="أبحث" />
          <View style={styles.buttonContaıner}>
            <AppButton title="القران الكريم" style={styles.button} />
            <AppButton
              title="الاذكار"
              style={styles.button}
              onPress={() => navigation.navigate("AzkarScreen")}
            />
            <AppButton
              title="السبحة"
              style={styles.button}
              onPress={() => navigation.navigate("SibhaScreen")}
            />
            <AppButton
              title="الاربعون النووية"
              style={styles.button}
              onPress={() => navigation.navigate("FortyNawawi")}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: "#efefef",
    padding: 10,
  },
  content: {
    paddingVertical: 30,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  duaaButton: {
    width: "100%",
    paddingVertical: 90,
    backgroundColor: colors.primary,
  },
  button: {
    marginVertical: 5,
    backgroundColor: colors.primary,
    width: "49%",
    paddingVertical: "25%",
  },
  buttonContaıner: {
    flexDirection: "row-reverse",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
  },
});
export default HomeScreen;
