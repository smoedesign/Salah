import { View, Text,StatusBar,StyleSheet,Pressable, TouchableOpacity, Modal } from 'react-native';
import colors from '../config/colors'
import * as Clipboard from 'expo-clipboard';
import { useEffect, useState,useRef } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppButton from './AppButton';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import { Image } from 'react-native';

function ShareImage({onPress,descriptin,refrence}) {
    const [ImageVisable, setImageVisiable] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [popupVisible,SetPopupVisible]= useState(false)

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
        alert('Copied');
        SetPopupVisible(false)
      }
      const SaveImage= async () =>{
        setImageVisiable(true)
        try {
          setTimeout( async() => {
            const result= await captureRef(viewToSnapRef) ;
            setImageVisiable(false);
        await MediaLibrary.saveToLibraryAsync(result);  
        }, 2500);
        } catch (error) {
          console.log(error)
        }
      }
    
      return (
    <>

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
marginTop:50,
borderRadius:20,
        },
        textRefrenc:{
          fontSize:13,
          marginTop:20
        },
        popupView:{
          backgroundColor:colors.white,
          height:180,
          width:180,
          justifyContent:'space-between',
          padding:20,
          borderRadius:20,
    position:'absolute',
    top:45,
    alignSelf:'flex-end',
left:-15,
elevation :5,
zIndex:1000,


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
borderRadius:20,
backgroundColor:colors.blue,
paddingHorizontal:30
        },

  
        logo:{  width:100,height:100,top:20,position:'absolute'},
        view:{
          
          color: colors.white,
            textAlign: 'center',
            flexGrow:1,
            width:'100%',
            height:'100%',
            backgroundColor:colors.primary,
            justifyContent:'center',
            alignItems:'center',
            borderRadius: 20,
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