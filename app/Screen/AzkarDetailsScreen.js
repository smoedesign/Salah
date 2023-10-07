import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { ImageBackground } from "react-native";
import ListItem from "../components/ListItems";
import colors from "../config/colors";
import clients from "../../sanity";

function AzkarDetailsScreen({ route, navigation }) {
  const [menu, setMenu] = useState([]);
  const isFocused = useIsFocused();

  const azkar = route.params;
  useEffect(() => {
    clients
      .fetch(
        `* [_type== "hisnAlmuslim"] | order(indexid asc){
          name,
          _id,
            alazkar[]-> | order(indexid asc),
              
             }`
      )
      .then((data) => {
        setMenu(data);
      });
  }, []);

  return (
    <ImageBackground
      source={require("../assets/gray.jpg")}
      style={styles.container}>
      <ScrollView horizontal={true}>
        {menu.map((z) => (
          <View style={styles.Tab} key={z._id}>
            {z._id === azkar._id && isFocused ? (
              <AppButton
                style={styles.active}
                title={z.name}
                onPress={() => {
                  navigation.navigate("AzkarDetailsScreen", z);
                }}
              />
            ) : (
              <AppButton
                style={styles.TopTab}
                title={z.name}
                onPress={() => {
                  navigation.push("AzkarDetailsScreen", z);
                }}
              />
            )}
          </View>
        ))}
      </ScrollView>
      <ScrollView style={styles.Screen}>
        {azkar.alazkar.map((ziker) => (
          <ListItem
            key={ziker._id}
            descriptin={ziker.description}
            number={ziker.count}
            refrence={ziker.refrance}
            times={ziker.countnumber}
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
  Tab: {
    backgroundColor: colors.secoundery,
    borderRightColor: colors.lightGray,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  TopTab: {
    color: colors.white,
    fontWeight: "600",
    height: 30,
    marginVertical: 15,
    marginHorizontal: 7,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: colors.primary,
    color: colors.white,
    fontWeight: "600",
    height: "100%",
    paddingHorizontal: 10,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginTop: 10,
  },
  Screen: {
    padding: 15,
    marginBottom: 20,
  },
});
export default AzkarDetailsScreen;
