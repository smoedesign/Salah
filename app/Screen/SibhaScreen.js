import React, { useState,useRef } from 'react';
import { View,StyleSheet } from 'react-native';
import Screen from '../components/Screen';
import Header from '../components/Header';
import AppText from '../components/AppText';
import AppPicker from '../components/AppPicker';

function SibhaScreen(props) {
const [ziker,setZiker]=useState()
  const azkar=[
    {label:"سبحان الله", value:1},
    {label:"الحمد الله", value:2},
    {label:"لا اله الا الله", value:3},
    {label:" استغفر الله العظيم", value:5},
    {label:"لا حول ولا قوة الا بالله", value:4},
    {label:" الله اكبر", value:6}
  ]

   return (
    <View style={styles.container}>
   
            <Header title='السبحة'/>
<AppPicker 
SelectedZiker={ziker}
onSelectZiker={item=>setZiker(item)}
items={azkar}  placeholder={'الاذكار'} />           
    </View>
  );
}

const styles = StyleSheet.create({
container:{ 
    justifyContent:'center',
    alignItems:'center',
    padding:10
 },
picker:{
backgroundColor:'red',
width:'100%',
height:70,
}
})
export default SibhaScreen;