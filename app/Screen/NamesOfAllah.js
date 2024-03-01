import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  Text,
  Pressable,
} from "react-native";

import { FlatList } from "react-native";
import ListItem from "../components/ListItems";
import ShareImage from "../components/ShareImage";
import { FlashList } from "@shopify/flash-list";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("salahApp.db");

function NamesOfAllah() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    try {
      db.transaction((tx) => {
        tx.executeSql(`SELECT * FROM namesOfAllah`, null, (_, { rows }) =>
          setNames(rows._array)
        );
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <FlashList
      keyExtractor={(item) => item._id}
      data={names}
      renderItem={({ item }) => (
        <View>
          <ListItem
            descriptin={item.name}
            refrence={item.description}
            fonts={{ fontSize: 18 }}
            headers={styles.header}
          />
          <View style={styles.separator}>
            <ShareImage
              descriptin={item.name}
              refrence={item.description}
              shareComponent="مشاركة"
              font={{
                fontSize: 18,
                alignItems: "center",
                textAlign: "center",
              }}
              header={{ fontSize: 20, fontWeight: "bold" }}
            />
          </View>
        </View>
      )}
      ListFooterComponent={() => <View style={{ marginBottom: 200 }}></View>}
      estimatedItemSize={200}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  separator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 15,
  },
});
export default NamesOfAllah;
