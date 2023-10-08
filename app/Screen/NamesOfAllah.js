import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { FlatList } from "react-native";
import ListItem from "../components/ListItems";
import ShareImage from "../components/ShareImage";
import clients from "../../sanity";

function NamesOfAllah(props) {
  const [names, setNames] = useState([]);

  useEffect(() => {
    clients
      .fetch(
        `*[_type == "namesofallah"] | order(indexid asc)
        {
          indexid,
            name,
            description,
            _id
        }`
      )
      .then((data) => {
        setNames(data);
      });
  }, []);

  <StatusBar translucent backgroundColor="transparent" />;

  return (
    <ImageBackground
      source={require("../assets/babyBlue.jpg")}
      style={styles.container}>
      <FlatList
        initialNumToRender={50}
        style={styles.list}
        keyExtractor={(item) => item._id}
        data={names}
        renderItem={({ item }) => (
          <ListItem descriptin={item.name} refrence={item.description} />
        )}
        ItemSeparatorComponent={(item) => (
          <View style={styles.separator}>
            <ShareImage
              descriptin={item.name}
              refrence={item.description}
              shareComponent="مشاركة"
            />
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  separator: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10,
  },
});
export default NamesOfAllah;
