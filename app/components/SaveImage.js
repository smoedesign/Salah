import React ,{useState} from 'react';
import { View,StyleSheet ,Pressable,Text,Modal, StatusBar} from 'react-native';
import { captureRef } from 'react-native-view-shot';
import {useEffect, useRef} from 'react'
import * as MediaLibrary from 'expo-media-library';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native';
import * as Sharing from 'expo-sharing';
import { ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import colors from '../config/colors';
import AppButton from './AppButton';
import ImageView from './ImageView';
import { TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';



function SaveImage({children}) {



  const [modalVisible, setModalVisible] = useState(false);
  const [ImageVisable, setImageVisiable] = useState(false);

  const viewToSnapRef= useRef();

  const requestPermission= async () =>{
        const {granted} = await MediaLibrary.requestPermissionsAsync();
        if(!granted)
    {    alert('You need to enable permission to save the photo');
    }  };

    useEffect(()=> {
        requestPermission();
      },[])

      const share = async ()=>{
        setImageVisiable(true)
        try {
          setTimeout( async() => {
            const result= await captureRef(viewToSnapRef,{
              result: 'tmpfile',
              height:1920,
              width:1080,
              quality: 1,
              format: 'jpg',
            })
                          setImageVisiable(false);
                          const test=await Sharing.isAvailableAsync();
                          await Sharing.shareAsync(result);
                }, 5000);
       
        } catch (error) {
          console.log(error)
        }
        
      }

      const SaveImage= async () =>{
        setImageVisiable(true)
        try {
          setTimeout( async() => {
            const result= await captureRef(viewToSnapRef,{
              result: 'tmpfile',
              height:1920,
              width:1080,
              quality: 1,
              format: 'jpg',
            })
            setImageVisiable(false);
        await MediaLibrary.saveToLibraryAsync(result);  
        }, 3000);
        } catch (error) {
          console.log(error)
        }
      }

    
   return (
<>

{/* 
{ImageVisable &&   <Modal
       animationType="fade"
       visible={ImageVisable}
       onRequestClose={() => {
         setImageVisiable(!ImageVisable);
        }}>



        <ImageBackground source={require('../assets/border.jpeg')} style={styles.viewsnap} ref={viewToSnapRef} resizeMode='contain'> 
           
<Text style={styles.textStyle}>   {children} </Text>
 
  </ImageBackground>
 
  </Modal>
  }
  
     <View style={styles.centeredView}>
     <Modal
       animationType="slide"
       transparent={true}
       visible={modalVisible}
       onRequestClose={() => {
         setModalVisible(!modalVisible);
        }}>
  
  <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.view}>   
            <Text style={styles.textStyle}>
            {children} 
            
            </Text>
       
            </View>
     
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
             <MaterialCommunityIcons name='close' color={colors.primary} size={20}  onPress={() => setModalVisible(false)}/>
            </Pressable>
            <View style={styles.buttonContainer}>
    <AppButton onPress={share} title='share' style={{ backgroundColor:colors.primary,width:150,height:70,alignSelf:'center', margin:10 }}/>
  <AppButton onPress={SaveImage} title='Save' style={{ backgroundColor:colors.primary,width:150,height:70 ,alignSelf:'center', margin:10}}/>
  </View>
          </View>
        </View>
  </Modal>
  </View>  

<Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {setModalVisible(true) 
        }
        }>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable> */}
{/* 
<AppButton title='copy' style={{width:100, height:100, color:colors.white}}   onPress={async() => {
                Clipboard.setStringAsync(descriptin+refrence)
                  
                }}/> */}
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
  flex:1,
    width:'99.8%',
    marginTop: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 20,
    padding: 35,
backgroundColor:colors.primary,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: .10,
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
    position:'absolute',
    top:10,
    left:1
  },
  textStyle: {
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'right',
    marginHorizontal:20
  },


  viewsnap:{
flex:1,
      justifyContent:'center',
      alignItems:'center',
  },
container:{  

flex:1,
marginTop: 80,

},
view:{
 height:400,
 width:350,
 borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
  color:'white',
  padding:40,
  backgroundColor:colors.white
},
buttonContainer:{
  flexDirection:'row',
  justifyContent:'space-between',
 position:'absolute',
 bottom:10
  
},


close: {
  position:'absolute',
  top:40,
  zIndex:5,
width:40,
height:40,
  elevation: 5,
  backgroundColor:colors.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  borderRadius:20
},
buttonOpen: {
  backgroundColor: '#F194FF',
  alignSelf:'center',
 marginBottom:300
},


})
export default SaveImage;