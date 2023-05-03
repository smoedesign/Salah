import { View, Text,Alert,StyleSheet,Pressable, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import colors from '../config/colors'
import * as Clipboard from 'expo-clipboard';
import { useEffect, useState,useRef } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './AppButton';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import Toast from 'react-native-root-toast';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const { Popover } = renderers

function ShareImage({descriptin,refrence}) {

  const [ImageVisable, setImageVisiable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const viewToSnapRef= useRef();

      const share = async ()=>{
        setImageVisiable(true)
        try {
          setTimeout( async () => {
            const result= await captureRef(viewToSnapRef);
            if(result)
                          setImageVisiable(false);
                          await Sharing.isAvailableAsync();
                          await Sharing.shareAsync(result);
                }, 2500);
       
        } catch (error) {
          console.log(error)
        }
        
      }

      const  copy = async() => {
        Clipboard.setStringAsync(descriptin+ '\n'+ refrence);
        Toast.show('Text Copied', {
          duration: Toast.durations.LONG,
          position: Toast.positions.CENTER,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,

        })
      }
      const SaveImage= async () =>{
        const {granted} = await MediaLibrary.requestPermissionsAsync();
        if(!granted)
        { 

          return (
          Alert.alert('Permission ','You need to enable permission to save the image')
            )}
      
        
          else{
        setImageVisiable(true)
        try {
          setTimeout( async() => {
            const result= await captureRef(viewToSnapRef) ;
          
            setImageVisiable(false);
        await MediaLibrary.saveToLibraryAsync(result);  
        Toast.show('Image Saved', {
          duration: Toast.durations.LONG,
          position: Toast.positions.TOP,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          zIndex: 7000

        })
        }, 2000);
        } catch (error) {
          console.log(error)
        }
      }}
    
      return (
    <>

<Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}    >
    <MenuTrigger >
    <MaterialCommunityIcons name='dots-horizontal' color={colors.white} size={30} />
    </MenuTrigger>
    <MenuOptions style={styles.popupView}>
    <MenuOption onSelect={() => setModalVisible(true)} style={[styles.button,{color:'white', margin:5,justifyContent:'center',alignItems:'center'}]}>
      <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}> حفظ/مشاركة</Text>
    </MenuOption>
    <MenuOption onSelect={copy} style={[styles.button,{color:'white',margin:5,justifyContent:'center',alignItems:'center'}]}>
      <Text style={{color:'white',fontSize:17,fontWeight:'bold'}}> نسخ</Text>
    </MenuOption>

    </MenuOptions>
  </Menu>
  
 {modalVisible   &&  <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
        }}>
  <View style={styles.modalView}>
    <MaterialCommunityIcons name='close-circle' color={colors.white} size={35} onPress={()=> setModalVisible(false)} style={styles.icon}/>
    <View style={styles.content}>
    <Text>
    <Text style={styles.textcontent}>{descriptin}  </Text>
{  refrence &&  <Text style={styles.textRefrenc}>{refrence}  </Text>
}    </Text>
</View>
    <View style={styles.buttonContainer}>
    <AppButton onPress={share} title='مشاركة' style={styles.button}/>
    <AppButton onPress={SaveImage} title='حفظ' style={styles.button}/>
    </View>

  </View>
  </Modal>}

  {ImageVisable  && 
 <Modal
 animationType="fade"
 transparent={false}
 visible={ImageVisable}
 translucent={true} 
>

    <View ref={viewToSnapRef} style={styles.view}>
        <ImageBackground source={require('../assets/Screen.jpg')} resizeMode='contain'  >
                <Text >
    <Text style={styles.textcontent}>{descriptin} </Text>
  
{   refrence && <Text style={styles.textRefrenc}>{refrence} </Text>
}    </Text>
</ImageBackground>
    </View>
    </Modal>
 }


    </>
      );
      }
      const styles = StyleSheet.create({
        modalView:{
flex:1,
justifyContent:'space-between',
alignItems:'center',
padding:20,
paddingHorizontal:20,
backgroundColor:colors.primary,
marginTop:70,
borderRadius:20,
        },
        textRefrenc:{
          fontSize:13,
          marginTop:20
        },
        popupView:{
          backgroundColor:colors.white,
          justifyContent:'space-between',
          padding:20,
          borderRadius:20,
top:1,
    position:'absolute',
left:-20,
elevation :10,


},
        icon:{
          alignSelf:'flex-start',
        left:-7,
        marginBottom:10
        },
        textcontent:{
          fontSize:15,
          color:colors.white,
          textAlign:'justify' ,
          
        },
        content:{
width:'100%',
height:'75%',
justifyContent:'center',
alignItems:'center',
textAlign:'center',
borderRadius:20,
backgroundColor:colors.blue,
paddingHorizontal:30
        },

  
        view:{
          
          color: colors.white,
            textAlign: 'center',
          flex:1,
          width:'100%',
          height:'100%',
            backgroundColor:colors.primary,
            justifyContent:'center',
            alignItems:'center',
            alignSelf:'center',
        
            },
            button:{ backgroundColor:colors.blue,width:130,height:60,alignSelf:'center' ,borderRadius:10},
            buttonContainer:{
              flexDirection:'row',
marginVertical:25,
              paddingVertical:20,
              justifyContent:'space-between',
              width:'100%',
            },
            container:{
              width:'100%'
            },
            dot:{
              justifyContent:'flex-start',
         alignItems:'flex-start',
         zIndex:1

            }

      })
export default ShareImage;



/*


  <View style={styles.dot}>
      <TouchableOpacity onPress={()=> SetPopupVisible(!popupVisible)}>
  <MaterialCommunityIcons name='dots-horizontal' color={colors.white} size={30} />
  </TouchableOpacity>
 
 {popupVisible && 
  <View  style={styles.popupView} >

   <AppButton onPress={()=>{setModalVisible(true) 
   SetPopupVisible(false)
   }} title='حفظ/مشاركة' style={styles.button}/>
   <AppButton onPress={copy} title='نسخ' style={styles.button}/>
  
   </View>}

   </View>
 {ImageVisable  && 
 <Modal
 animationType="fade"
 transparent={false}
 visible={ImageVisable}
 translucent={true} 
>

    <View ref={viewToSnapRef} style={styles.container}>
                <Image source={require('../assets/white.png')} style={styles.logo}  />
                <View style={styles.view}>
    <Text style={styles.textcontent}>{descriptin} </Text>
  
{   refrence && <Text style={styles.textRefrenc}>{refrence} </Text>
}    </View>
    
    </View>
    </Modal>
 }


     <Modal
       animationType="slide"
       transparent={false}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
        }}>
  <View style={styles.modalView}>
    <MaterialCommunityIcons name='close-circle' color={colors.white} size={35} onPress={()=> setModalVisible(false)} style={styles.icon}/>
    <View style={styles.content}>
    <Text style={styles.textcontent}>{descriptin}  </Text>
{  refrence &&  <Text style={styles.textRefrenc}>{refrence}  </Text>
}    </View>
    <View style={styles.buttonContainer}>
    <AppButton onPress={share} title='مشاركة' style={styles.button}/>
    <AppButton onPress={SaveImage} title='حفظ' style={styles.button}/>
    </View>

  </View>
  </Modal>
 
*/