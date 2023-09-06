import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import Header from "../components/Header";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import { ImageBackground } from "react-native";
import ListItem from "../components/ListItems";
import colors from "../config/colors";

// const azkar = [
//   {
//     id: 1,
//     description:
//       "الحمدُ للهِ وحدَهُ ، والصَّلاةُ والسَّلامُ على مَن لا نَبِيَّ بعدَهُ ",
//     number: 1,
//     times: "مرة واحدة",
//   },

//   {
//     id: 2,
//     description:
//       "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
//     refrance:
//       "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح. ",
//     number: 1,
//     times: "مرة واحدة",
//   },
//   {
//     id: 3,
//     description:
//       "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
//     refrance: "من قالها حين يصبح وحين يمسى كفته من كل شىء ",
//     number: 3,
//     times: "3 مرات",
//   },
// ];
function AzkarDetailsScreen({ route }) {
  const azkar = route.params;
  return (
    <ImageBackground
      source={require("../assets/gray.jpg")}
      style={styles.container}>
      <Screen style={styles.Screen}>
        <View style={styles.Tab}>
          <AppText style={{ color: "#ffffff" }}>{azkar.title}</AppText>
        </View>
        <ListItem
          descriptin={azkar.description.titleDes}
          number={azkar.description.number}
          refrence={azkar.description.refrance}
          times={azkar.description.times}
        />
      </Screen>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Tab: {
    height: 50,
    backgroundColor: colors.primary,
    width: 70,
  },
  list: {
    marginTop: 10,
  },
  Screen: {
    padding: 15,
  },
});
export default AzkarDetailsScreen;
