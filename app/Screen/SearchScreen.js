import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Text,
  Pressable,
} from "react-native";
import * as SQLite from "expo-sqlite";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

const db = SQLite.openDatabase("salahApp.db");
function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hisnAlmuslim, setHisnAlmuslim] = useState([]);
  const [nawawia, setNawawia] = useState([]);
  const [names, SetNames] = useState([]);

  function normalizeArabic(text) {
    if (text.startsWith("اذ")) {
      return "أذ" + text.slice(2); // Normalize to 'أذ' + the rest of the text
    }
    return text
      .replace(/[\u064B-\u065F]/g, "") // Remove diacritic marks
      .replace(/\u0622|\u0623|\u0625|\u0627/g, "ا") // Normalize Alef variations
      .replace(/\u0649|\u064A/g, "ي"); // Normalize Yeh variations
  }

  const searchInDatabase = (searchTerm) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM namesOfAllah WHERE name LIKE "%${searchTerm}%" OR description LIKE "%${searchTerm}%"`,
        [],
        (_, { rows }) => {
          console.log(rows._array);
        }
      );
      // tx.executeSql(
      //   "SELECT * FROM fortyNawawia WHERE nameofhadith LIKE ? OR description LIKE ?",
      //   [`%${searchTerm}%`, `%${searchTerm}%`],
      //   (_, { rows: { _array } }) => {
      //     setNawawia(_array);
      //   }
      // );
      // tx.executeSql(
      //   "SELECT * FROM hisnAlmuslim  LEFT JOIN alazkar ON hisnAlmuslim._id = alazkar.hisAlmuslimId WHERE hisnAlmuslim.name LIKE ? OR alazkar.description LIKE  ?",
      //   [`%${searchTerm}%`, `%${searchTerm}%`],
      //   (_, { rows: { _array } }) => {
      //     setHisnAlmuslim(_array);
      //   }
      // );
    });
  };
  const handleSearch = (searchTerm) => {
    const conver = normalizeArabic(searchTerm.toString());

    searchInDatabase(conver);
  };

  return (
    <View style={styles.container}>
      <View style={styles.Inputcontainer}>
        <TextInput
          value={searchTerm}
          inputMode="text"
          textAlign="right"
          editable={true}
          style={styles.input}
          clearTextOnFocus
          onChangeText={(text) => setSearchTerm(text)}
        />
        <AppButton title="أبحث" onPress={handleSearch} style={styles.title} />
      </View>
      <ScrollView style={styles.Screen}>
        {nawawia.map((nawawi) => (
          <Pressable
            style={styles.Result}
            key={nawawi._id}
            onPress={() => {
              navigation.navigate("FortyNawawiDetailsScreen", nawawi);
            }}>
            <Text style={styles.SearcHeader}>{nawawi.nameofhadith}</Text>
            <Text style={styles.SearcHcontent}>{nawawi.description}</Text>
          </Pressable>
        ))}
        {names.map((name) => (
          <Pressable
            style={styles.Result}
            key={name._id}
            onPress={() => {
              navigation.navigate("NamesOfAllah");
            }}>
            <Text style={styles.SearcHeader}>{name.name}</Text>
            <Text style={styles.SearcHcontent}>{name.description}</Text>
          </Pressable>
        ))}
        {hisnAlmuslim.map((ziker) => {
          const handlePress = () => {
            navigation.navigate("AzkarDetailsScreen", {
              ziker,
            });
          };
          return (
            <Pressable
              style={styles.Result}
              key={ziker._id}
              onPress={handlePress}>
              <Text style={styles.SearcHeader}>{ziker.name}</Text>
              <Text style={styles.SearcHcontent}>{ziker.description}</Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 15,
  },
  Result: {
    backgroundColor: colors.blue,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  SearcHeader: {
    color: colors.white,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 15,
    fontSize: 17,
  },
  SearcHcontent: {
    color: colors.white,
    fontSize: 15,
    textAlign: "right",
    marginHorizontal: 15,
    marginBottom: 15,
  },
  Inputcontainer: {
    width: "100%",
    height: 60,
    marginVertical: 20,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
    marginBottom: 40,
  },
  input: {
    backgroundColor: colors.lightGray,
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: colors.primary,
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
export default SearchScreen;
