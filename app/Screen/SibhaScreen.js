import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Pressable, TextInput } from "react-native";
import AppText from "../components/AppText";
import AppPicker from "../components/AppPicker";
import colors from "../config/colors";
import Toast from "react-native-root-toast";

function SibhaScreen(props) {
  const azkar = [
    { label: "سبحان الله", id: 1 },
    { label: "الحمد الله", id: 2 },
    { label: "لا اله الا الله", id: 3 },
    { label: " الله اكبر", id: 6 },
    { label: " سبحان الله وبحمده", id: 8 },
    { label: " سبحان الله العظيم", id: 9 },
    { label: "لا حول ولا قوة الا بالله", id: 4 },
    { label: " استغفر الله العظيم واتوب اليه", id: 5 },
    { label: " اللهم صلي وسلم علي نبينا محمد", id: 7 },
  ];

  const [ziker, setZiker] = useState();
  const [timesPressed, setTimesPressed] = useState(0);
  const [Count, setCount] = useState(null);
  const [SelectedItem, setSelectedItem] = useState("");

  const handleReset = () => {
    setTimesPressed(0);
    setCount("");
  };

  const handlePress = () => {
    if (timesPressed === 10000) {
      Toast.show("لقد وصلت الي 10.000 عدد ", {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
      });
      setTimesPressed(0);
      textLog = 0;
    } else if (timesPressed != 0 && timesPressed == Count) {
      Toast.show("لقد أكملت الورد", {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
        backgroundColor: colors.primary,
      });
      setTimesPressed(0);
      setCount(0);
      textLog = 0;
    } else if (!Count || !ziker) {
      setTimesPressed(timesPressed + 1);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <AppPicker
            SelectedZiker={ziker}
            onSelectZiker={(item) => {
              setZiker(item);
              setTimesPressed(0);
            }}
            items={azkar}
            placeholder={"الاذكار"}
          />

          <View style={styles.ViewCount}>
            <AppText
              style={
                timesPressed < 10000
                  ? styles.textStyle
                  : [styles.textStyle, { fontSize: 50 }]
              }>
              {timesPressed}
            </AppText>
          </View>

          <View style={styles.footer}>
            <Pressable onPress={handleReset}>
              <AppText
                style={{
                  color: colors.secoundery,
                  fontWeight: "700",
                  marginRight: 5,
                }}>
                {"تصفير العداد"}
              </AppText>
            </Pressable>
            <Pressable onPress={handlePress} style={styles.border}>
              <View style={styles.counter} />
            </Pressable>

            <View style={styles.countInput}>
              <AppText style={{ color: colors.secoundery, fontWeight: "700" }}>
                {"العدد:"}
              </AppText>
              <TextInput
                keyboardType="number-pad"
                placeholder="0"
                value={Count}
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: colors.secoundery,
                  backgroundColor: colors.babyBlue,
                  width: 60,
                }}
                onChangeText={(newText) => setCount(newText)}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    width: 200,
    height: 200,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  countInput: {
    flexDirection: "row-reverse",
    width: 60,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
  },
  content: {
    marginVertical: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    width: "100%",
  },
  counter: {
    flex: 1,
    borderColor: colors.secoundery,
    borderWidth: 8,
    borderRadius: 50,
    width: "100%",
    alignSelf: "center",
    backgroundColor: colors.white,
  },
  picker: {
    width: "100%",
    height: 70,
  },
  ViewCount: {
    width: 300,
    height: 300,
    backgroundColor: "#80a5ed",
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  textStyle: {
    fontSize: 100,
    color: colors.secoundery,
    textAlign: "center",

    fontWeight: "bold",
  },
  border: {
    borderColor: colors.babyBlue,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "flex-end",
  },
});
export default SibhaScreen;
