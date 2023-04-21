import { useEffect, useState,useRef } from 'react';
import { View,StyleSheet,Text,Modal,Pressable} from 'react-native';
import Counter from './Counter';
import AppText from './AppText';
import {MaterialCommunityIcons} from'@expo/vector-icons'
import colors from '../config/colors';
import ShareImage from './ShareImage';
import * as Clipboard from 'expo-clipboard';
import AppButton from './AppButton';
import * as Sharing from 'expo-sharing';
import { captureRef } from 'react-native-view-shot';
import { Image } from 'react-native';

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
const { Popover } = renderers



{/* <AppButton title='copy' style={{width:100, height:100, color:colors.white}}   onPress={async() => {
  Clipboard.setStringAsync(descriptin+refrence)
    
  }}/> */}
function ListItem({descriptin,refrence,times, number}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [ImageVisable, setImageVisiable] = useState(false);
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
  
    <View style={styles.container}>
        <View style={styles.textView}>
<AppText style={styles.text} >{descriptin}</AppText>
{refrence && <AppText style={styles.refrence} >{refrence}</AppText>
}</View>
<View style={styles.sperator}>
        <AppText style={styles.times}>{times}</AppText>
        <Counter number={number} style={styles.number}/>
        <Menu renderer={Popover} rendererProps={{ preferredPlacement: 'bottom' }}>
    <MenuTrigger style={styles.menuTrigger} >
    <MaterialCommunityIcons name='dots-horizontal' color={colors.white} size={30} />
    </MenuTrigger>
    <MenuOptions  style={styles.popupView}>
    <MenuOption onSelect={() => setModalVisible(true)} style={[styles.button,{color:'white'}]}>
      <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> حفظ/مشاركة</Text>
    </MenuOption>
    <MenuOption onSelect={copy} style={[styles.button,{color:'white'}]}>
      <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}> نسخ</Text>
    </MenuOption>

    </MenuOptions>
  </Menu>
 {modalVisible   &&  <Modal
       animationType="slide"
       transparent={false}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
        }}>
  <View style={styles.modalView}>
    <MaterialCommunityIcons name='close-circle' color={colors.white} size={35} onPress={()=> setModalVisible(false)} style={styles.icon}/>
    <Text style={styles.content}>
    <Text style={styles.textcontent}>{descriptin}  </Text>
{  refrence &&  <Text style={styles.textRefrenc}>{refrence}  </Text>
}    </Text>
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

    <View ref={viewToSnapRef} style={styles.container}>
                <Image source={require('../assets/white.png')} style={styles.logo}  />
                <Text style={styles.view}>
    <Text style={styles.textcontent}>{descriptin} </Text>
  
{   refrence && <Text style={styles.textRefrenc}>{refrence} </Text>
}    </Text>
    
    </View>
    </Modal>
 }

          </View>
    
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  number:{
    color:colors.primary
  },
container:{  
  justifyContent:'center',
  alignItems:'center',
marginBottom:10,

},
refrence:{
  fontSize:13,
  color:colors.primary,
  marginBottom:40
},
textView:{


},
text:{
  fontSize:15,
  textAlign:'center',
paddingVertical:40,
  color:colors.primary,
  zIndex:0
},
times:{
fontSize:15,
color:colors.white
},
sperator:{
  backgroundColor:colors.secoundery,
  width:'100%',
  flexDirection:'row-reverse',
  paddingHorizontal:17,
  paddingVertical:9,
  justifyContent:'space-between',
  alignItems:'center',
  borderRadius:10,
},
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
      alignSelf:'flex-end',
      top:0,
  left:-20,
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

              button:{
                 backgroundColor:colors.blue,
                 width:130,
                 height:60,
                 alignSelf:'center' ,
                 justifyContent:'center',
                 alignItems:'center',
                 color:'white',
                 borderRadius:10},
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
export default ListItem;