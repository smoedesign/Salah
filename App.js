import { RootSiblingParent } from "react-native-root-siblings";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./app/navigation/HomeNavigation";
import NavigationTheme from "./app/navigation/NavigationTheme";
import "react-native-url-polyfill/auto";
import RootNavigation from "./app/navigation/RootNavigation";
import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as NavigationBar from "expo-navigation-bar";

SplashScreen.preventAutoHideAsync();

function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await NavigationBar.setVisibilityAsync("hidden");

        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <NavigationContainer
        theme={NavigationTheme}
        ref={RootNavigation.NavigateRef}
        onReady={onLayoutRootView}>
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
