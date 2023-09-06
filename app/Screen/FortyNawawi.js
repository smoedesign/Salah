import React from "react";
import { StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import colors from "../config/colors";
import AppText from "../components/AppText";

const forty = [
  {
    id: 1,
    label: "الحديث الاول",
    title: "الاعمال بالنيات",
    description: `عَنْ أَمِيرِ المُؤمِنينَ أَبي حَفْصٍ عُمَرَ بْنِ الخَطَّابِ قَالَ : سَمِعْتُ رَسُولَ اللهِ ﷺ يَقُولُ :
  " إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ ، وَإنَّمَا لِكُلِّ امْرِىءٍ مَا نَوَى ، فَمَنْ كَانَتْ هِجْرَتُهُ إِلى اللهِ وَرَسُوله فَهِجْرتُهُ إلى اللهِ وَرَسُوُله 
  ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيْبُهَا ، أَو امْرأَةٍ يَنْكِحُهَا ، فَهِجْرَتُهُ إِلى مَا هَاجَرَ إلَيْهِ "`,
    refrence:
      "رواه إماما المحدثين أبو عبدالله محمد بن إسماعيل بن إبراهيم بن المغيرة بن بَرْدِزْبَهْ البخاري ، وأبو الحسين مسلم بن الحجَّاج ين مسلم القشيري النيسابوري ، في صحيحيهما اللَذين هما أصح الكتب المصنفة .",
  },
  { id: 2, label: "الحديث الثاني", title: "مراتب الدين" },
  { id: 3, label: "الحديث الثالث", title: "أركان الاسلام" },
  { id: 4, label: "الحديث الرابع", title: "مراحل الخلق" },
  { id: 5, label: "الحديث الخامس", title: "النهي عن الابتداع في الدين" },
  { id: 6, label: " الحديث السادس", title: "البعد عن مواطن الشبهات" },
  { id: 7, label: "الحديث السابع", title: "الدين النصيحه" },
  { id: 8, label: "الحديث الثامن", title: "حرمة دم المسلم وماله" },
  { id: 9, label: "الحديث التاسع", title: "النهي عن كثرة السؤال والتشدد" },
  { id: 10, label: "الحديث العاشر", title: "سبب إجابة الدعاء" },
];

function FortyNawawi({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={forty}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("FortyNawawiDetailsScreen", item);
            }}>
            <AppText style={styles.label}>{item.label}</AppText>
            <AppText style={styles.name}>{item.title}</AppText>
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
