import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import Search from "../components/Search";
import colors from "../config/colors";
import clients from "../../sanity";
import AppText from "../components/AppText";

function QuranScreen({ navigation }) {
  [meta, setMeta] = useState([]);

  useEffect(() => {
    clients
      .fetch(
        `*[_type== "meta"] | order(number asc){
            number,
            _id,
              name,
              numberOfAyahs,
              revelationType,
              page
          }`
      )
      .then((data) => {
        setMeta(data);
      });
  }, []);

  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.list}
        data={meta}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.quran}>
            <AppButton
              number={item.number}
              title={item.name}
              key={item.number}
              color={colors.white}
              style={styles.quranCountainer}
              numberStyle={styles.numberStyle}
            />

            <AppText
              style={
                styles.desc
              }>{`صفحة: ${item.page} - عدد الايات: ${item.numberOfAyahs} - ${item.revelationType}`}</AppText>
            <View style={styles.seprator}></View>
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 30,
    backgroundColor: colors.primary,
  },
  quran: {
    marginBottom: 20,
  },
  minicontainer: {
    color: colors.white,
    display: "flex",
    flexDirection: "row-reverse",
  },
  desc: {
    marginRight: 34,
    color: "#929394",
    fontSize: 14,
    marginBottom: 10,
  },
  quranCountainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    fontSize: 50,
  },
  numberStyle: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "center",
    textAlign: "center",
    backgroundColor: colors.blue,
    color: colors.white,
    marginLeft: 5,
  },
  seprator: {
    width: "100%",
    height: .5,
    backgroundColor: "#403B47",
  },
  morningContainer: {
    marginBottom: 25,
  },
  searchContainer: {
    width: "100%",
    height: 50,
    marginVertical: 20,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
  input: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    height: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: colors.white,
    fontSize: 18,
    writingDirection: "rtl",
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

export default QuranScreen;
