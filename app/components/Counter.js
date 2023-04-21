import React, { useState } from 'react';
import { View,StyleSheet } from 'react-native';
import AppButton from './AppButton';
import colors from '../config/colors';



function Counter({number,style}) {

 const[count,setCount]= useState(number);

 const onPress = () =>{
  if(count >= 1) 
  {setCount(count - 1)}
 
 }

 
   return (
    <View style={[styles.container,style]}>

<AppButton style={styles.timer} title={count} onPress={onPress} color={colors.primary}/>
    </View>
  
  );
}

const styles = StyleSheet.create({
container:{ 
  width:40,
  height:40,   
  borderRadius:20,
  backgroundColor:colors.white,
justifyContent:'center',
alignItems:'center'
 },
timer:{
backgroundColor:colors.white,
width:14,
borderRadius:20,
justifyContent:'center',
alignItems:'center'
}
})
export default Counter;