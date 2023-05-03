import {  useState,useRef } from 'react';
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
  <View style={[styles.views,styles.First]}>
  <AppText style={styles.times}>{times}</AppText>

  </View>
  <View style={[styles.views,styles.secound]}>

        <Counter number={number} style={styles.number}/>
  </View>
  <View style={[styles.views,styles.third]}>

       <ShareImage descriptin={descriptin} refrence={refrence}/>
  </View>
          </View>
    
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  views:{
flex:1,
height:50,
  },
  First:{

  
justifyContent:'center',
alignItems:'flex-end',

  },
  secound:{
  alignItems:'center',
  justifyContent:'center',



  },
  third:{
    justifyContent:'center',
    alignItems:'flex-start',
 

  },
  number:{
    color:colors.primary,
  },
container:{  
  alignItems:'center',
marginBottom:10,
justifyContent:'center'
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
  alignItems:'center',
  borderRadius:2,
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