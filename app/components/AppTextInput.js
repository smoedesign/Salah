import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import colors from "../config/colors";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

function AppTextInput({ icon, style, ...otherProps }) {
  const deviceLanguage = useDeviceLanguage();
  return (
    <View
      style={[
        styles.container,
        style,
        {
          flexDirection: deviceLanguage.startsWith("ar")
            ? "row"
            : "row-reverse",
        },
      ]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={"gray"}
          style={styles.icon}
        />
      )}
      <TextInput
        style={styles.textinput}
        {...otherProps}
        placeholderTextColor={"gray"}
        blurOnSubmit={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: "95%",
    padding: 15,
    height: 70,
    marginVertical: 10,

    alignItems: "center",
  },
  textinput: {
    fontSize: 18,
    color: colors.white,
    width: "95%",
    padding: 10,
  },
  icon: {
    marginLeft: 5,
  },
});
export default memo(AppTextInput);
