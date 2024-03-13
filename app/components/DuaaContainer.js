import React, { useEffect, useState, memo } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import useDatabase from "../hooks/useDatabase";
import colors from "../config/colors";

function DuaaContainer({ style, handleOutside }) {
  const { data, request } = useDatabase();
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    request("fortyNawawia");
  }, []);

  useEffect(() => {
    // Update the current item index every hour
    const interval = setInterval(() => {
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, [data]);

  const maxCharacters = 350; // Set your desired maximum number of characters

  const firstCharacters =
    data[currentItemIndex]?.description?.slice(0, maxCharacters) || "";
  const remainingCharacters =
    data[currentItemIndex]?.description?.slice(maxCharacters) || "";

  return (
    <View
      style={[
        style,
        {
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        },
      ]}>
      <Text style={styles.container}>
        {firstCharacters}
        {remainingCharacters.length > 0 && (
          <Text
            style={{ fontWeight: "bold" }}
            onPress={() => setModalVisible(true)}>
            {"...اقرأ المزيد"}
          </Text>
        )}
      </Text>
      {remainingCharacters && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.icon}>
              <MaterialCommunityIcons
                name="close-circle"
                color={colors.primary}
                size={35}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                {data[currentItemIndex]?.description}
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 18,
    color: colors.lightGray,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },

  modalView: {
    justifyContent: "space-between",

    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    marginTop: 100,
    borderRadius: 20,
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
    color: colors.primary,
    textAlign: "right",
  },

  textContainer: {
    width: "100%",
    height: "95%",
    justifyContent: "center",
    paddingHorizontal: 1,
  },
});

export default memo(DuaaContainer);
