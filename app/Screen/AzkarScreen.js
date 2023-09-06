import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import Search from "../components/Search";
import colors from "../config/colors";
import clients from "../../sanity";

function AzkarScreen({ navigation }) {
  const [hisnAlmuslims, sethisnAlmuslims] = useState([]);
  const [azkar, setAlazkar] = useState([]);

  useEffect(() => {
    clients
      .fetch(
        `*[ _type == "alazkar" ]{
          countnumber,
            refrance,
            count,
            description,
            _id,
            category->{
              name
                    }
              }`
      )
      .then((data) => {
        setAlazkar(data);
      });
  }, []);
  {
  }

  return (
    <Screen style={styles.container}>
      <Search title="أبحث" />

      <FlatList
        data={azkar}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <AppButton
            key={item._id}
            title={item.category.name}
            style={styles.azkarContainer}
            onPress={() => {
              navigation.navigate("AzkarDetailsScreen", item);
            }}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 5,
  },
  azkarContainer: {
    height: 50,
    marginBottom: 10,
    alignItems: "flex-end",
    paddingRight: 20,
    backgroundColor: colors.primary,
  },

  morningContainer: {
    marginBottom: 25,
  },
});
export default AzkarScreen;
