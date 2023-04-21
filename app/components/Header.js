import React from 'react';
import { Text,View,StyleSheet ,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors';

function Header({imageuri,title}) {
   return (
    <View style={styles.container}>
     { title && <Text style={styles.title}>{title}</Text>}
{imageuri && <Image source={imageuri} style={styles.headerImage}/>}
<MaterialCommunityIcons name='menu' size={35} color={colors.primary}/>
    </View>
  );
}

const styles = StyleSheet.create({
container:{ 
    width:'100%',
    justifyContent:'space-between',
      flexDirection:'row-reverse',
  alignItems:'center',
  borderRadius:8,

  
 },
 headerImage:{
    width:50,
    height:40,
 },
title:{
  fontSize:16,
  color:colors.primary,
  fontWeight:'bold',
  marginRight:2
}

})
export default Header;