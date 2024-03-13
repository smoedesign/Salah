import React, { useState, memo } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import AppText from "./AppText";
import PikerItems from "./PikerItems";
import useDeviceLanguage from "../hooks/useDeviceLanguge";

function AppPicker({ icon, items, placeholder, SelectedZiker, onSelectZiker }) {
  const [modalVisiable, setModalVisible] = useState(false);
  const deviceLanguage = useDeviceLanguage();

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View
          style={[
            styles.container,
            {
              flexDirection: deviceLanguage.startsWith("ar")
                ? "row"
                : "row-reverse",
            },
          ]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.white}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>
            {SelectedZiker ? SelectedZiker.label : placeholder}
          </AppText>

          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.white}
          />
        </View>
      </TouchableWithoutFeedback>

      {modalVisiable && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisiable}
          onRequestClose={() => {
            setModalVisible(!modalVisiable);
          }}>
          <View style={[styles.Modal]}>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={
                deviceLanguage.startsWith("ar")
                  ? styles.iconLeft
                  : styles.iconmodal
              }>
              <MaterialCommunityIcons
                color={colors.white}
                name="close"
                size={25}
              />
            </Pressable>
            <View style={styles.Modalcontainer}>
              <AppText style={styles.header}>
                أختر ورد التسبيح الذي تريد
              </AppText>
              <FlatList
                data={items}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <PikerItems
                    label={item.label}
                    onPress={() => {
                      setModalVisible(false);
                      onSelectZiker(item);
                    }}
                  />
                )}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  iconmodal: {
    position: "absolute",
    backgroundColor: colors.primary,
    top: 25,
    left: 17,
    borderRadius: 20,
    padding: 3,
  },
  iconLeft: {
    position: "absolute",
    backgroundColor: colors.primary,
    top: 25,
    right: 17,
    borderRadius: 20,
    padding: 3,
  },
  Modal: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginTop: 80,
    borderRadius: 20,
    paddingTop: 70,
    backgroundColor: colors.lightGray,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: colors.secoundery,
  },
  icon: {
    marginLeft: 10,
  },
  text: {
    color: colors.white,
    fontWeight: 700,
    fontSize: 18,
    flex: 1,
    marginRight: 5,
  },
  header: {
    color: colors.secoundery,
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
export default memo(AppPicker);
