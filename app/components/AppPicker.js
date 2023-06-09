import React, { useState } from 'react';
import { View,StyleSheet,Modal, TouchableWithoutFeedback, Pressable, FlatList,Text } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import PikerItems from './PikerItems';
import History from './SibhaHistory';

function AppPicker({icon,items,placeholder,SelectedZiker,onSelectZiker,pressedTimes}) {
    const [modalVisiable,setModalVisible]=useState(false)



   return (
    <>
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true) }>
    <View style={styles.container}>
{icon &&
<MaterialCommunityIcons name={icon} size={20} color={colors.white} style={styles.icon} /> 

}
<AppText style={styles.text} >{SelectedZiker ? SelectedZiker.label :placeholder} </AppText>

<MaterialCommunityIcons name='chevron-down' size={30} color={colors.white}  /> 
    </View>
    </TouchableWithoutFeedback>

   {modalVisiable && <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisiable}
    onRequestClose={() => {
      setModalVisible(!modalVisiable);
     }}>

        <View style={styles.Modal}>
        <Pressable onPress={()=>  setModalVisible(false)} style={styles.iconmodal}>
        <MaterialCommunityIcons color={colors.primary} name='close' size={25}/>

        </Pressable>
        <View style={styles.Modalcontainer}>
        
        <AppText style={styles.header}>أختر ورد التسبيح الذي تريد</AppText>
        <FlatList 
        data={items}
         keyExtractor={item=> item.id.toString()}
         renderItem={({item})=>(
     
            <PikerItems label={item.label}
            onPress={()=>{
                setModalVisible(false)
                onSelectZiker(item)             
            }}/> 
        )}/>
        </View>
        </View>
</Modal>}


</>
  );
}

const styles = StyleSheet.create({
    iconmodal:{
position:'absolute',

top:25,
left:15    },
    Modal:{
        flex:1,
justifyContent:'center',
        paddingHorizontal:20,
        marginTop:70,
        borderRadius:20,
   backgroundColor:colors.lightGray
        
       

    },
container:{ 
    flexDirection:'row-reverse',
       justifyContent:'center',
       alignItems:'center',
    width:'100%',
    padding:15,
    marginVertical:10,
    borderRadius:10,
    backgroundColor:colors.secoundery
 },
icon:{
    marginLeft:10
},
text:{
    color:colors.white,
fontWeight:700,
fontSize:18,
flex:1,
marginRight:5
},
header:{
    color:colors.secoundery,
    fontSize:15,
    fontWeight:'bold',
    marginBottom:20
  
  }
})
export default AppPicker;