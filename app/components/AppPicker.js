import React, { useState } from 'react';
import { View,StyleSheet,Modal, TouchableWithoutFeedback, Pressable, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import PikerItems from './PikerItems';

function AppPicker({icon,items,placeholder,SelectedZiker,onSelectZiker}) {
    const [modalVisiable,setModalVisible]=useState(false)
   return (
    <>
    <TouchableWithoutFeedback onPress={()=> setModalVisible(true)}>
    <View style={styles.container}>
{icon &&
<MaterialCommunityIcons name={icon} size={20} color={colors.white} style={styles.icon} /> 

}
<AppText style={styles.text} >{SelectedZiker ? SelectedZiker.label :placeholder} </AppText>

<MaterialCommunityIcons name='chevron-down' size={30} color={colors.white}  /> 
    </View>
    </TouchableWithoutFeedback>
    
    <Modal
    animationType="slide"
    transparent={false}
    visible={modalVisiable}
    onRequestClose={() => {
      setModalVisible(!modalVisiable);
     }}>
        <Pressable onPress={()=>  setModalVisible(false)}>
            <MaterialCommunityIcons color={colors.primary} name='close' size={35} />

        </Pressable>
        <FlatList 
        data={items}
         keyExtractor={item=> item.value.toString()}
         renderItem={({item})=>(
            <PikerItems label={item.label}
            onPress={()=>{
                setModalVisible(false)
                onSelectZiker(item)
            }}
            />
   )}
        />
</Modal>
</>
  );
}

const styles = StyleSheet.create({
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
}
})
export default AppPicker;