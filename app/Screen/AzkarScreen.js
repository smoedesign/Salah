import React, { useEffect, useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import useDatabase from "../hooks/useDatabase";

function AzkarScreen({ navigation }) {
  const [text, setChangeText] = useState("");
  const { data: hisalmuslimData, request } = useDatabase();

  useEffect(() => {
    request("hisnAlmuslim");
  }, []);

  const filterData = (item) => {
    const b = "\u0627"; //ا
    const c = "\u0623"; //أ

    const Searchitem = text;
    const name = item.name.includes(c) ? item.name.replace(c, b) : item.name;

    if (Searchitem == "") {
      return (
        <AppButton
          key={item._id}
          title={name}
          style={styles.azkarContainer}
          onPress={() => {
            navigation.navigate("AzkarDetailsScreen", { azkar: item });
          }}
        />
      );
    }

    if (
      name.includes(
        Searchitem.includes(c) ? Searchitem.replace(c, b) : Searchitem
      )
    ) {
      return (
        <AppButton
          key={item._id}
          title={name}
          style={styles.azkarContainer}
          onPress={() => {
            navigation.navigate("AzkarDetailsScreen", { azkar: item });
          }}
        />
      );
    }
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          inputMode="text"
          textAlign="right"
          editable
          value={text}
          style={styles.input}
          onChangeText={(text) => setChangeText(text)}
          clearTextOnFocus
          keyboardType="default"
        />
        <AppButton style={styles.title} title={"ابحث"} />
      </View>

      <FlashList
        data={hisalmuslimData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => filterData(item)}
        estimatedItemSize={200}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
    height: "100%",
  },
  azkarContainer: {
    height: 55,
    marginBottom: 10,
    alignItems: "flex-end",
    paddingRight: 20,
    backgroundColor: colors.primary,
  },

  morningContainer: {
    marginBottom: 25,
  },
  searchContainer: {
    width: "100%",
    height: 60,
    marginBottom: 25,
    justifyContent: "flex-end",
    flexDirection: "row-reverse",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
    writingDirection: "rtl",
  },
  input: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    height: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: colors.white,
    fontSize: 20,
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

export default AzkarScreen;
