import { View, Text,StatusBar,StyleSheet,Modal} from 'react-native';
import { useEffect, useState,useRef } from 'react';
import { Pressable, } from 'react-native';
import {MaterialCommunityIcons} from'@expo/vector-icons'
import { Platform } from 'react-native';
import PopupMenu from './app/components/PopupMenu';
import ShareImage from './app/components/ShareImage';
import ListItem from './app/components/ListItems';
import AppButton from './app/components/AppButton';
import AzkarDetailsScreen from './app/Screen/AzkarDetailsScreen';
import SibhaScreen from './app/Screen/SibhaScreen';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuTrigger,
  renderers,
  MenuOption
} from 'react-native-popup-menu';





export default function App() {
    
const [visible,setVisible]=useState(false)

  return (
<>
<MenuProvider>

{/* {Platform.OS==='ios' ?  <StatusBar hidden/> : <StatusBar backgroundColor={'transparent'}  translucent={true} />} */}
{Platform.OS==='ios' ?  <StatusBar hidden/> : <StatusBar backgroundColor={'transparent'} translucent={true}  />}




</MenuProvider>

</>
  );



  }
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  