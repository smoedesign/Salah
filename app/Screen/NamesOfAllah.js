import React from "react";
import { View, StyleSheet, ImageBackground, StatusBar } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import { FlatList } from "react-native";
import ListItem from "../components/ListItems";
import ShareImage from "../components/ShareImage";

Names = [
  {
    id: 1,
    name: "الله",
    description:
      "اسم الذات المختص به جل شأنه، لا يتسمى به غيره، فهو علم على المعبود بحق، الذي تعنو له السموات والأرض وما بينها، ونحن نرفض إطلاق أي اسم على الذات الأقدس غير لفظ “الله” وحده هو العلم الحقيقي.",
  },
  {
    id: 2,
    name: "القدوس",
    description:
      "لمطهر من كل عيب، المنزه عن كل نقص، ومحور التسبيح يدور على هذا المعنى، سبحانه وتعالى",
  },
  {
    id: 3,
    name: "الوهاب",
    description:
      "صاحب العطايا الجزيلة، تفضلاً منه على من شاء “وأن الفضل بيد الله يؤتيه من يشاء والله واسع علي    ",
  },
  {
    id: 4,
    name: "الحليم",
    description: `غير أن قد يطول لطفه، ويرجى صفحه. أما الصبور فينبغي القلق من إمهاله!    ويمكن أن يطالع القارئ في شرح الأسماء الحسنى بتوسع وبصيرة كتاب أبى حامد الغزالي “المقصد الأسنى” ففيه إن شاء الله ما ينفع`,
  },
];

function NamesOfAllah(props) {
  <StatusBar translucent backgroundColor="transparent" />;

  return (
    <ImageBackground
      source={require("../assets/babyBlue.jpg")}
      style={styles.container}>
      <Header title="أسماء الله الحسني" />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        keyExtractor={(item) => item.id.toString()}
        data={Names}
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
