import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import colors from "../config/colors";
import AppText from "../components/AppText";

const forty = [
  { id: 1, label: "الحديث الاول", name: "الاعمال بالنيات" },
  { id: 2, label: "الحديث الثاني", name: "مراتب الدين" },
  { id: 3, label: "الحديث الثالث", name: "أركان الاسلام" },
  { id: 4, label: "الحديث الرابع", name: "مراحل الخلق" },
  { id: 5, label: "الحديث الخامس", name: "النهي عن الابتداع في الدين" },
  { id: 6, label: " الحديث السادس", name: "البعد عن مواطن الشبهات" },
  { id: 7, label: "الحديث السابع", name: "الدين النصيحه" },
  { id: 8, label: "الحديث الثامن", name: "حرمة دم المسلم وماله" },
  { id: 9, label: "الحديث التاسع", name: "النهي عن كثرة السؤال والتشدد" },
  { id: 10, label: "الحديث العاشر", name: "سبب إجابة الدعاء" },
];

function FortyNawawi(props) {
  return (
    <View style={styles.container}>
      <Header title="الاربعون النووية" />
      <FlatList
        style={styles.list}
        data={forty}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              console.log(item);
            }}>
            <AppText style={styles.label}>{item.label}</AppText>
            <AppText style={styles.name}>{item.name}</AppText>
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
