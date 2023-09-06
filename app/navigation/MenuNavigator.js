import { createDrawerNavigator } from "@react-navigation/drawer";
import NamesOfAllah from "../Screen/NamesOfAllah";
import AzkarScreen from "../Screen/AzkarScreen";
import SibhaScreen from "../Screen/SibhaScreen";
import AppButton from "../components/AppButton";
import FortyNawawi from "../Screen/FortyNawawi";
import HomeScreen from "../Screen/HomeScreen";
import { Image } from "react-native";
import colors from "../config/colors";

const Drawer = createDrawerNavigator();
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
      drawerItemStyle: {
        backgroundColor: colors.primary,
        paddingVertical: 10,
      },
      drawerLabelStyle: {
        color: colors.white,
      },
      drawerStyle: {
        width: "80%",
      },
      drawerType: "front",
    }}>
    <Drawer.Group>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <LogoTitle />,
          drawerLabel: "الصفحة الرئيسية",
          title: "",
        }}
      />

      {/* <Drawer.Screen
        name="Azkar"
        component={AzkarScreen}
        options={{ title: "الاذكار" }}
      />
      <Drawer.Screen
        name="Sibha"
        component={SibhaScreen}
        options={{ title: "السبحة" }}
      />
      <Drawer.Screen
        name="FortyNawawia"
        component={FortyNawawi}
        options={{
          title: "الاربعون النووية",
        }}
      /> */}
    </Drawer.Group>
  </Drawer.Navigator>
);

export default MenuNavigator;
