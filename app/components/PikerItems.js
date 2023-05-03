import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import History from './SibhaHistory';


function PikerItems({label,onPress}) {
   return (
    <>
    <TouchableOpacity style={styles.container} onPress={onPress}>
<AppText style={styles.text}>{label} </AppText>
<MaterialCommunityIcons color={colors.white} size={25} name='circle'/>
    </TouchableOpacity>

    </>
  );
}

const styles = StyleSheet.create({
container:{  
  width:'100%',
  backgroundColor:colors.primary,
  padding:15,
  margin:1,
  borderRadius:10,
  flexDirection:'row-reverse'

},
text:{
    color:colors.white,
    flex:1
},

})
export default PikerItems;