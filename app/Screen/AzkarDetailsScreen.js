import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import ListItem from "../components/ListItems";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("salahApp.db");

function AzkarDetailsScreen({ route }) {
  const azkarParam = route.params?.azkar;
  const SearchPram = route.params?.ziker;

  const id = azkarParam ? azkarParam._id : SearchPram.hisAlmuslimId;

  const [hisalmuslimData, setHisalmuslimData] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM alazkar WHERE hisAlmuslimId = ? ORDER BY indexid`,
        [id],
        (_, { rows }) => setHisalmuslimData(rows._array)
      );
    });
  }, [id]);
  return (
    <ImageBackground
      source={require("../assets/babyBlue.jpg")}
      style={styles.container}>
      <ScrollView style={styles.Screen}>
        {hisalmuslimData.map((ziker) => (
          <ListItem
            key={ziker._id}
            descriptin={ziker.description}
            number={ziker.count}
            refrence={ziker.refrance}
            times={ziker.countnumber}
            headers={{ paddingVertical: 25, fontSize: 19, fontWeight: 500 }}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Screen: {
    padding: 15,
    marginBottom: 30,
  },
});
export default AzkarDetailsScreen;
