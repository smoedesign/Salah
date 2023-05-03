import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Pressable, TextInput } from "react-native";
import Screen from "../components/Screen";
import Header from "../components/Header";
import AppText from "../components/AppText";
import AppPicker from "../components/AppPicker";
import colors from "../config/colors";
import Toast from "react-native-root-toast";
import SibhaHistory from "../components/SibhaHistory";

function SibhaScreen(props) {
  const azkar = [
    { label: "سبحان الله", id: 1, lastTime: 0, allTime: 0 },
    { label: "الحمد الله", id: 2, lastTime: 0, allTime: 0 },
    { label: "لا اله الا الله", id: 3, lastTime: 0, allTime: 0 },
    { label: " استغفر الله العظيم", id: 5, lastTime: 0, allTime: 0 },
    { label: "لا حول ولا قوة الا بالله", id: 4, lastTime: 0, allTime: 0 },
    { label: " الله اكبر", id: 6, lastTime: 0, allTime: 0 },
  ];

  const [ziker, setZiker] = useState();
  const [timesPressed, setTimesPressed] = useState(0);
  const [history, setHistory] = useState(azkar);
  const [Count, setCount] = useState("");
  const [SelectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    history.filter((item) => {
      if (item.id === SelectedItem) item.lastTime = timesPressed;
    });
  }, [timesPressed]);

  const handleReset = () => {
    setTimesPressed(0);
    setCount("");
  };

  const handlePress = () => {
    if (timesPressed === 10000) {
      Toast.show("You Reached 10.000", {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
        shadow: true,
        animation: true,
        hideOnPress: true,
      });
      setTimesPressed(0);
      textLog = 0;
    } else {
      if (!ziker || !Count) {
        Toast.show("  من فضلك أختر ذكراً وعددا ", {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
          hideOnPress: true,
          backgroundColor: colors.primary,
        });
      } else {
        if (timesPressed == Count) {
          Toast.show("لقد أكملت الورد", {
            duration: Toast.durations.LONG,
            position: Toast.positions.CENTER,
            shadow: true,
            animation: true,
            hideOnPress: true,
            backgroundColor: colors.primary,
          });
        } else {
          setTimesPressed(timesPressed + 1);
          history.filter((item) => {
            if (item.id === SelectedItem) item.allTime = item.allTime + 1;
          });
        }
      }
    }
  };

  const onPressItem = (item) => {
    history.map((H, i) => {
      if (H.id === item.id) setSelectedItem(item.id);
    });
  };

  return (
    <>
      <View style={styles.container}>
        <Header title="السبحة" />
        <View style={styles.content}>
          <AppPicker
            SelectedZiker={ziker}
            onSelectZiker={(item) => {
              setZiker(item);
              onPressItem(item);
              setTimesPressed(0);
            }}
            items={azkar}
            placeholder={"الاذكار"}
          />

          <View style={styles.ViewCount}>
            <AppText
              style={
                timesPressed < 1000
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
                Reset
              </AppText>
            </Pressable>
            <Pressable onPress={handlePress} style={styles.border}>
              <View style={styles.counter} />
            </Pressable>

            <View style={styles.countInput}>
              <AppText style={{ color: colors.secoundery, fontWeight: "700" }}>
                Count:
              </AppText>
              <TextInput
                keyboardType="number-pad"
                placeholder="0"
                value={Count}
                style={{ paddingLeft: 5, color: colors.secoundery, width: 60 }}
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
    flexDirection: "row",
    width: 60,
  },
  container: {
    alignItems: "center",
    padding: 20,
    width: "100%",
    flex: 1,
  },
  content: {
    marginVertical: 40,
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
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    alignSelf: "flex-end",
  },
});
export default SibhaScreen;
