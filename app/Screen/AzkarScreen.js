import React, { useEffect, useState, memo, useCallback } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { FlashList } from "@shopify/flash-list";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import colors from "../config/colors";
import useDatabase from "../hooks/useDatabase";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

function AzkarScreen({ navigation }) {
  const deviceLanguage = useDeviceLanguage();

  const [text, setText] = useState("");
  const { data: hisalmuslimData, request } = useDatabase();

  useEffect(() => {
    request("hisnAlmuslim");
  }, []);

  const filterData = useCallback(() => {
    const b = "\u0627"; //ا
    const c = "\u0623"; //أ

    return hisalmuslimData.filter((item) => {
      const name = item.name.includes(c) ? item.name.replace(c, b) : item.name;
      const searchItem = text.includes(c) ? text.replace(c, b) : text;
      return name.includes(searchItem);
    });
  }, [hisalmuslimData, text]);

  return (
    <Screen style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          inputMode="text"
          textAlign="right"
          editable
          value={text}
          style={styles.input}
          onChangeText={setText}
          clearTextOnFocus
          keyboardType="default"
        />
        <AppButton style={styles.title} title={"البحث"} />
      </View>

      <FlashList
        data={filterData()}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <AppButton
            key={item._id}
            title={item.name}
            style={[
              styles.azkarContainer,
              {
                alignItems: deviceLanguage.startsWith("ar")
                  ? "flex-start"
                  : "flex-end",
              },
            ]}
            onPress={() => {
              navigation.navigate("AzkarDetailsScreen", { azkar: item });
            }}
          />
        )}
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
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
  },
  searchContainer: {
    flexDirection: "row-reverse",
    height: 60,
    marginBottom: 25,
    justifyContent: "flex-end",
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: colors.primary,
  },
  input: {
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

export default memo(AzkarScreen);
