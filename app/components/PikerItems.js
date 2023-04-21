import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function PikerItems({label,onPress}) {
   return (
    <TouchableOpacity style={styles.container} onPress={onPress}>

<AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
container:{  

},
text:{
    color:colors.primary,
    padding:20,
    textAlign:'center'
}
})
export default PikerItems;