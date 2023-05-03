import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import { FlatList } from "react-native";

function SibhaHistory({ items }) {
  return (
    <View style={styles.container}>
      <View style={styles.HeaderContainer}>
        <AppText style={[styles.label]}>Your Azkar History</AppText>
        <AppText style={styles.text}>Today</AppText>
        <AppText style={styles.text}>All Time</AppText>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.containerZiker}>
            <AppText style={styles.label}>{item.label}</AppText>
            <AppText style={styles.text}>{item.lastTime}</AppText>
            <AppText style={styles.text}>{item.allTime}</AppText>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerZiker: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 2,
  },
  container: {
    flex: 1,
  },
  text: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    paddingVertical: 10,
    textAlign: "center",
  },
  HeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    width: "60%",
    color: colors.primary,
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    paddingVertical: 10,
  },
});
export default SibhaHistory;
