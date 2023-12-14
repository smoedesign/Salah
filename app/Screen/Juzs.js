// import React from "react";
// import { View, StyleSheet } from "react-native";

// function Juzs({ navigation }) {
//   const [surah, setSurah] = useState([]);
//   useEffect(() => {
//     fetch("https://api.alquran.cloud/v1/quran/quran-uthmani")
//       .then((res) => res.json())
//       .then((result) => {
//         setSurah(result.data.surahs);
//         const ret = result.data.surahs;
//         ret.map((test) => console.log(test.juz));
//       });
//   }, []);
//   return (
//     <Screen style={styles.container}>
//       <FlatList
//         style={styles.list}
//         data={surah}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <AppButton
//             key={item.number}
//             title={item.name}
//             style={styles.azkarContainer}
//             onPress={() => {
//               navigation.navigate("QuranDetailsScreen", item);
//             }}
//           />
//         )}
//       />
//     </Screen>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     paddingBottom: 10,
//   },
//   azkarContainer: {
//     height: 50,
//     marginBottom: 10,
//     alignItems: "flex-end",
//     paddingRight: 20,
//     backgroundColor: colors.primary,
//   },

//   morningContainer: {
//     marginBottom: 25,
//   },
//   searchContainer: {
//     width: "100%",
//     height: 50,
//     marginVertical: 20,
//     justifyContent: "flex-end",
//     flexDirection: "row-reverse",
//     borderRadius: 4,
//     overflow: "hidden",
//     backgroundColor: colors.primary,
//   },
//   input: {
//     backgroundColor: colors.primary,
//     flexGrow: 1,
//     height: "100%",
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//     color: colors.white,
//     fontSize: 18,
//     writingDirection: "rtl",
//   },
//   title: {
//     fontSize: 18,
//     color: colors.white,
//     backgroundColor: colors.secoundery,
//     width: 80,
//     height: "100%",
//     textAlign: "center",
//     textAlignVertical: "center",
//   },
// });
// export default Juzs;
