import { useState, useRef } from "react";
import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import Counter from "./Counter";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import ShareImage from "./ShareImage";
import * as Clipboard from "expo-clipboard";
import AppButton from "./AppButton";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";
import { Image } from "react-native";

function ListItem({ descriptin, refrence, times, number, headers, fonts }) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.textView}>
          <AppText style={[styles.text, headers]}>{descriptin}</AppText>
          {refrence && (
            <AppText style={[styles.refrence, fonts]}>{refrence}</AppText>
          )}
        </View>
        {number && times && (
          <View style={styles.sperator}>
            <AppText style={styles.times}>{times}</AppText>
            <Counter number={number} style={styles.number} />
            <ShareImage
              descriptin={descriptin}
              refrence={refrence}
              header={{ fontSize: 18 }}
              font={{ textAlign: "center", width: "75%" }}
            />
          </View>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  number: {
    color: colors.primary,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  refrence: {
    fontSize: 13,
    color: colors.primary,
    textAlign: "center",
  },

  text: {
    fontSize: 15,
    textAlign: "center",

    color: colors.primary,
  },
  times: {
    fontSize: 15,
    color: colors.white,
  },
  sperator: {
    backgroundColor: colors.secoundery,
    width: "100%",
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    padding: 3,
    marginTop: 10,
    borderRadius: 2,
    marginBottom: 15,
  },

  textcontent: {
    fontSize: 15,
    color: colors.white,
    textAlign: "justify",
  },
  content: {
    width: "100%",
    height: "75%",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: colors.blue,
    paddingHorizontal: 30,
  },

  logo: { width: 100, height: 100, top: 20, position: "absolute" },
  view: {
    color: colors.white,
    textAlign: "center",
    flexGrow: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    alignSelf: "center",
  },

  button: {
    backgroundColor: colors.blue,
    width: 130,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 25,
    paddingVertical: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  container: {
    width: "100%",
  },
  dot: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 1,
  },
});
export default ListItem;
