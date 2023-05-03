import { View, Text,StatusBar,StyleSheet,Modal} from 'react-native';
import { useEffect, useState,useRef } from 'react';
import { Pressable, } from 'react-native';
import {MaterialCommunityIcons} from'@expo/vector-icons'
import { RootSiblingParent } from 'react-native-root-siblings';
import SibhaScreen from './app/Screen/SibhaScreen';
import { MenuProvider} from 'react-native-popup-menu';



export default function App() {
    

  return (
<>
<RootSiblingParent>
<MenuProvider>

<StatusBar translucent hidden backgroundColor='transparent' />

<SibhaScreen />



</MenuProvider>
</RootSiblingParent>

</>
  );



  }
 