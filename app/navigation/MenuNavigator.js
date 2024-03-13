import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../Screen/HomeScreen";
import { Image, Pressable } from "react-native";
import colors from "../config/colors";
import { View, Text } from "react-native";
import AzkarNavigator from "./AzkarNavigator";
import SibhaNavigator from "./SibhaNavigator";
import FortyNawawiNavigator from "./FortyNavigatior";
import SettingNavigator from "./SettingNavigator";
import AboutNavigator from "./AboutNavigator";
import FeedBackNavigator from "./FeedBackNavigator";
import useDeviceLanguage from "../hooks/useDeviceLanguge";
import { DrawerActions } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const Sepratoress = () => {
  return <View></View>;
};

const MenuNavigator = () => {
  const CustomDrawerHeader = ({ navigation, deviceLanguage }) => {
    const handleMenuPress = () => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    };

    const renderDrawerIcon = () => {
      return (
        <View
          style={{
            flexDirection: deviceLanguage.startsWith("ar")
              ? "row-reverse"
              : "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <Feather
            name="menu"
            size={30}
            color={colors.primary}
            onPress={handleMenuPress}
          />
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/white.png")}
          />
        </View>
      );
    };

    return renderDrawerIcon();
  };

  const deviceLanguage = useDeviceLanguage();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: "front",
        drawerStyle: {
          width: "80%",
          paddingTop: 50,
        },

    
        navigationBarHidden: true,

        headerBackTitleVisible: false,
        headerBackVisible: false,
  
    
        drawerPosition: deviceLanguage?.startsWith("ar") ? "left" : "left",
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
          options={({ navigation }) => ({
            header: () => (
              <CustomDrawerHeader
                navigation={navigation}
                deviceLanguage={deviceLanguage}
              />
            ),

            drawerLabel: "الصفحة الرئيسية",
            title: "",
          })}
        />

        <Drawer.Screen
          name="AzkarNav"
          component={AzkarNavigator}
          options={() => ({
            headerShown: false,
            title: "",
            drawerLabel: "الاذكار",
          })}
        />
        <Drawer.Screen
          name="Sibha"
          component={SibhaNavigator}
          options={({ navigation }) => ({
            title: "",
            drawerLabel: "السبحة",
            headerShown: false,
          })}
        />
        <Drawer.Screen
          name="FortyNawawia"
          component={FortyNawawiNavigator}
          options={({ navigation }) => ({
            title: "",
            drawerLabel: "الاربعون النووية",
            headerShown: false,
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
          component={SettingNavigator}
          options={({ navigation }) => ({
            title: "",
            drawerLabel: "الضبط",
            headerShown: false,
          })}
        />
        <Drawer.Screen
          name="Abouts"
          component={AboutNavigator}
          options={({ navigation }) => ({
            title: "",

            drawerLabel: "حول التطبيق",
            headerShown: false,
          })}
        />
        {/* <Drawer.Screen
          name="ra"
          component={Rate}
          options={({ navigation }) => ({
            title: "",
            drawerLabel: "قيم التطبيق",
          })}
        /> */}
        <Drawer.Screen
          name="feedback"
          component={FeedBackNavigator}
          options={({ navigation }) => ({
            title: "",
            drawerLabel: "تواصل معنا",
            headerShown: false,
          })}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default MenuNavigator;
