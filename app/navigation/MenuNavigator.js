import { createDrawerNavigator } from "@react-navigation/drawer";
import NamesOfAllah from "../Screen/NamesOfAllah";
import AzkarScreen from "../Screen/AzkarScreen";
import SibhaScreen from "../Screen/SibhaScreen";
import { AntDesign } from "@expo/vector-icons";
import FortyNawawi from "../Screen/FortyNawawi";
import HomeScreen from "../Screen/HomeScreen";
import { Image, Pressable, Text } from "react-native";
import colors from "../config/colors";
import FeedbackScreens from "../Screen/FeedbackScreen";
import About from "../Screen/About";
import { View } from "react-native";
import Setting from "../Screen/Setting";

const Drawer = createDrawerNavigator();


const Sepratoress = () => {
  return <View></View>;
};
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 40, marginHorizontal: 20 }}
      source={require("../assets/white.png")}
    />
  );
}

const MenuNavigator = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerType: "front",
      drawerStyle: {
        width: "85%",
        paddingTop: 30,
      },
    }}>
    <Drawer.Group
      screenOptions={{
        drawerItemStyle: {
          backgroundColor: colors.primary,
          paddingVertical: 12,
        },
        drawerLabelStyle: {
          color: colors.white,
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <LogoTitle />,
          drawerLabel: "الصفحة الرئيسية",
          title: "",
        }}
      />

      <Drawer.Screen
        name="Azkar"
        component={AzkarScreen}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "الاذكار",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{"الاذكار"}</Text>
            </Pressable>
          ),
        })}
      />
      <Drawer.Screen
        name="Sibha"
        component={SibhaScreen}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "السبحة",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{"السبحة"}</Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
      <Drawer.Screen
        name="FortyNawawia"
        component={FortyNawawi}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "الاربعون النووية",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {"الاربعون النووية"}
              </Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
    </Drawer.Group>
    <Drawer.Screen
      name="Separator"
      component={Sepratoress}
      options={{
        drawerLabel: () => null,
        drawerItemStyle: {
          marginTop: 15,
          marginBottom: 15,
          height: 1,
          backgroundColor: "gray",
        },
      }}
    />
    <Drawer.Group
      screenOptions={{
        drawerItemStyle: {
          backgroundColor: colors.primary,
          paddingVertical: 12,
        },
        drawerLabelStyle: {
          color: colors.white,
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        name="setting"
        component={Setting}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "الضبط",

          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>{"الضبط"}</Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: "",

          drawerLabel: "حول التطبيق",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color={colors.primary} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 600,
                  color: colors.primary,
                }}>
                {"حول التطبيق"}
              </Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
      <Drawer.Screen
        name="ra"
        component={FeedbackScreens}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "قيم التطبيق",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                "قيم التطبيق"
              </Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
      <Drawer.Screen
        name="feedback"
        component={FeedbackScreens}
        options={({ navigation }) => ({
          title: "",
          drawerLabel: "تواصل معنا",
          headerRight: () => (
            <Pressable
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                marginRight: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <AntDesign name="right" size={24} color="black" />
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {"تواصل معنا"}
              </Text>
            </Pressable>
          ),

          navigationBarHidden: true,
          drawerIcon: () => null,
        })}
      />
    </Drawer.Group>
  </Drawer.Navigator>
);

export default MenuNavigator;
