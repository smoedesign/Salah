import { View, StyleSheet } from "react-native";
import Counter from "./Counter";
import AppText from "./AppText";
import colors from "../config/colors";
import ShareImage from "./ShareImage";
import { memo } from "react";

import useDeviceLanguage from "../hooks/useDeviceLanguge";

function ListItem({ descriptin, refrence, times, number, headers, fonts }) {
  const deviceLanguage = useDeviceLanguage();

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
          <View
            style={[
              styles.sperator,
              {
                flexDirection: deviceLanguage.startsWith("ar")
                  ? "row"
                  : "row-reverse",
              },
            ]}>
            <AppText style={styles.times}>{times}</AppText>
            <Counter number={number} style={styles.number} />
            <ShareImage
              descriptin={descriptin}
              refrence={refrence}
              header={headers}
              font={fonts}
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
    fontWeight: "bold",
  },
  sperator: {
    backgroundColor: colors.secoundery,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    padding: 3,
    marginTop: 20,
    borderRadius: 2,
    marginBottom: 15,
  },
});
export default memo(ListItem);
