import { View, Text, Alert, StyleSheet, Modal, Image } from "react-native";
import colors from "../config/colors";
import * as Clipboard from "expo-clipboard";
import { useState, useRef } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import Toast from "react-native-root-toast";

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from "react-native-popup-menu";
import AppText from "./AppText";
const { Popover } = renderers;

function ShareImage({
  descriptin,
  refrence,
  shareComponent,
  header,
  font,
  route,
}) {
  const [ImageVisable, setImageVisiable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const viewToSnapRef = useRef();

  const share = async () => {
    setImageVisiable(true);
    try {
      setTimeout(async () => {
        const result = await captureRef(viewToSnapRef);
        if (result) setImageVisiable(false);
        await Sharing.isAvailableAsync();
        await Sharing.shareAsync(result);
      }, 2500);
    } catch (error) {
      console.log(error);
    }
  };

  const copy = async () => {
    const copiedText = descriptin + "\n" + refrence;

    await Clipboard.setStringAsync(copiedText);

    Toast.show("تم نسخ النص", {
      duration: Toast.durations.LONG,
      position: Toast.positions.CENTER,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  };
  const SaveImage = async () => {
    const { granted } = await MediaLibrary.requestPermissionsAsync();
    if (!granted) {
      return Alert.alert(
        "الاذونات ",
        "يجب ان تمنح الاذن للبرنامج لتستطيع حفظ الصورة"
      );
    } else {
      setImageVisiable(true); // Corrected spelling
      try {
        setTimeout(async () => {
          const result = await captureRef(viewToSnapRef);

          setImageVisiable(false); // Corrected spelling
          await MediaLibrary.saveToLibraryAsync(result);
          Toast.show("تم حفظ الصورة", {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            zIndex: 7000,
          });
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Menu renderer={Popover} rendererProps={{ preferredPlacement: "bottom" }}>
        <MenuTrigger>
          {shareComponent && (
            <View
              style={{
                backgroundColor: colors.secoundery,
                width: 100,
                flexDirection: "row-reverse",
                justifyContent: "space-between",
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>
              <AppText style={{ color: colors.white }}>
                {shareComponent}
              </AppText>
              <MaterialCommunityIcons
                name="dots-horizontal"
                color={colors.white}
                size={30}
              />
            </View>
          )}
          {!shareComponent && (
            <MaterialCommunityIcons
              name="dots-horizontal"
              color={colors.white}
              size={34}
            />
          )}
        </MenuTrigger>
        <MenuOptions style={styles.popupView}>
          <MenuOption
            onSelect={() => setModalVisible(true)}
            style={[
              styles.button,
              {
                color: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              حفظ/مشاركة
            </Text>
          </MenuOption>
          <MenuOption
            onSelect={copy}
            style={[
              styles.button,
              {
                color: "white",
                margin: 5,
                justifyContent: "center",
                alignItems: "center",
              },
            ]}>
            <Text style={{ color: "white", fontSize: 17, fontWeight: "bold" }}>
              {"نسخ "}
            </Text>
          </MenuOption>
        </MenuOptions>
      </Menu>

      {modalVisible && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalView}>
            <MaterialCommunityIcons
              name="close-circle"
              color={colors.white}
              size={35}
              onPress={() => setModalVisible(false)}
              style={styles.icon}
            />
            <View style={styles.content}>
              <Text style={[styles.textcontent, header]}>{descriptin} </Text>
              {refrence && (
                <Text style={[styles.textRefrenc, font]}>{refrence} </Text>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <AppButton onPress={share} title="مشاركة" style={styles.button} />
              <AppButton
                onPress={SaveImage}
                title="حفظ"
                style={styles.button}
              />
            </View>
          </View>
        </Modal>
      )}

      {ImageVisable && (
        <Modal
          animationType="fade"
          transparent={false}
          presentationStyle={"fullScreen"}
          visible={ImageVisable}
          translucent={true}
          statusBarTranslucent={true}>
          <View ref={viewToSnapRef} style={styles.view}>
            <View style={styles.stretch}>
              <Image
                source={require("../assets/salahLight.png")}
                resizeMode="contain"
                style={{ width: 100, height: 100 }}
              />
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                marginBottom: 40,
              }}>
              <Text style={[styles.textcontent, header]}>{descriptin} </Text>
              {refrence && (
                <Text style={[styles.textRefrenc, font]}>{refrence}</Text>
              )}
            </View>
          </View>
        </Modal>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    marginTop: 70,
    borderRadius: 20,
  },
  stretch: {
    alignSelf: "center",
    marginTop: 25,
  },
  textRefrenc: {
    fontSize: 13,
    marginTop: 20,
    color: colors.white,
  },
  popupView: {
    backgroundColor: colors.white,
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    bottom: -20,
    position: "absolute",
    left: -20,
    elevation: 10,
  },
  icon: {
    alignSelf: "flex-start",
    left: -7,
    marginBottom: 10,
  },
  textcontent: {
    fontSize: 15,
    color: colors.white,
    textAlign: "justify",
  },
  content: {
    width: "100%",
    height: "73%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: colors.blue,
    paddingHorizontal: 20,
  },

  view: {
    color: colors.white,
    textAlign: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: colors.primary,
    justifyContent: "space-between",
    alignItems: "center",

    display: "flex",
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: colors.blue,
    width: 130,
    height: 60,
    alignSelf: "center",
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
export default ShareImage;
