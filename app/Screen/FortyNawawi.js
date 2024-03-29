import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import colors from "../config/colors";
import AppText from "../components/AppText";
import clients from "../../sanity";

function FortyNawawi({ navigation }) {
  const [forty, setForty] = useState([]);

  useEffect(() => {
    clients
      .fetch(
        `
        *[_type=="fortyNawawi"] | order(indexid)`
      )
      .then((data) => {
        setForty(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={forty}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("FortyNawawiDetailsScreen", item);
            }}>
            <AppText style={styles.label}>{item.numbersofhadith}</AppText>
            <AppText style={styles.name}>{item.nameofhadith}</AppText>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
export default FortyNawawi;
