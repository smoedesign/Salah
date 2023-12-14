import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";

import Screen from "../components/Screen";
import AppButton from "../components/AppButton";
import Header from "../components/Header";
import Search from "../components/Search";
import colors from "../config/colors";
import clients from "../../sanity";

function AzkarScreen({ navigation }) {
  const [azkar, setAlazkar] = useState([]);
  const [text, setChangeText] = useState("");

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
        setAlazkar(data);
      });
  }, []);
  const searchArabic=(item)=>{
    const b = "\u0627"; //ا
    const a = "\u0625"; //أ
azkar.filter((word)=> {if(word.includes(b) || word.includes(a)) 

return word
})

  }

  const filterData = (item) => {
    const Searchitem = text;
    const name = item.name;
    
    if (Searchitem == "") {
      return (
        <AppButton
          key={item._id}
          title={name}
          style={styles.azkarContainer}
          onPress={() => {
            navigation.navigate("AzkarDetailsScreen", item);
          }}
        />
      );
    }

    if (name.includes(Searchitem)) {
      
      return (
        <AppButton
          key={item._id}
          title={name}
          style={styles.azkarContainer}
          onPress={() => {
            navigation.navigate("AzkarDetailsScreen", item);
          }}
        />
      );
    }
  };

  return (
    <Screen style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.searchContainer}>
          <TextInput
            editable
            value={text}
            style={styles.input}
            onChangeText={(text) => setChangeText(text.toString())}
            clearTextOnFocus
            keyboardType="default"
          />
          <AppButton
            style={styles.title}
            onPress={(text) => setChangeText(text)}
            title={"ابحث"}
          />
        </View>
      </TouchableWithoutFeedback>
      <FlatList
        data={azkar}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => filterData(item)}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 15,
    paddingBottom: 40,
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

export default AzkarScreen;
