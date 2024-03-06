import React, {  useEffect } from "react";
import {  StyleSheet, ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import ListItem from "../components/ListItems";
import useDatabase from "../hooks/useDatabase";

function AzkarDetailsScreen({ route }) {
  const azkarParam = route.params?.azkar;
  const SearchPram = route.params?.ziker;

  const id = azkarParam ? azkarParam._id : SearchPram.hisAlmuslimId;
  const { data: AzkarData, request } = useDatabase();
  useEffect(() => {
    const conditions = "WHERE hisAlmuslimId = ? ORDER BY indexid";
    const parameters = [id];
    request("alazkar", conditions, parameters);
  }, [id]);

  return (
    <ImageBackground
      source={require("../assets/babyBlue.jpg")}
      style={styles.container}>
      <ScrollView style={styles.Screen}>
        {AzkarData.map((ziker) => (
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
