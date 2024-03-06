import { RootSiblingParent } from "react-native-root-siblings";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/HomeNavigation";
import NavigationTheme from "./app/navigation/NavigationTheme";
import "react-native-url-polyfill/auto";
import RootNavigation from "./app/navigation/RootNavigation";


function App() {
  return (
    <>
      <NavigationContainer
        theme={NavigationTheme}
        ref={RootNavigation.NavigateRef}>
        <RootSiblingParent>
          <MenuProvider>
            <HomeNavigator />
          </MenuProvider>
        </RootSiblingParent>
      </NavigationContainer>
    </>
  );
}

export default App;
