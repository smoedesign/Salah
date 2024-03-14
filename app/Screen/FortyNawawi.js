import React, { useEffect, memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";

import { FlashList } from "@shopify/flash-list";
import useDatabase from "../hooks/useDatabase";

function FortyNawawi({ navigation }) {
  const { data: forty, request } = useDatabase();

  useEffect(() => {
    request("fortyNawawia");
  }, []);

  return (
    <View style={styles.container}>
      <FlashList
        data={forty}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.item}
            onPress={() => {
              navigation.navigate("FortyNawawiDetailsScreen", item);
            }}>
            <AppText style={styles.label}>{item.numbersofhadith}</AppText>
            <AppText style={styles.name}>{item.nameofhadith}</AppText>
          </Pressable>
        )}
        estimatedItemSize={200}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: "100%",
    paddingVertical: 25,
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 7,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  label: {
    color: colors.babyBlue,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  name: {
    color: colors.white,
    marginHorizontal: 10,
    fontWeight: "500",
  },
  list: {
    marginTop: 30,
    marginBottom: 50,
  },
});
export default memo(FortyNawawi);
