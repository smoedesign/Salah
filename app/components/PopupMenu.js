import React from 'react';
import { View,StyleSheet } from 'react-native';
import AppButton from './AppButton';
import ShareImage from './ShareImage';

function PopupMenu(props) {
   return (
    <View style={styles.container}>
<ShareImage />
        <AppButton style={styles.button} title='share'/>
        <AppButton style={styles.button} title='share'/>
    </View>
  );
}

const styles = StyleSheet.create({
container:{ 
    width:200,
    height:250,
    justifyContent:'space-evenly',
    alignItems:'center',backgroundColor:'red',
    alignSelf:'center',
    marginTop:40,
    borderRadius:20
 },
button:{
    width:100,
    height:50,
    borderRadius:20
}
})
export default PopupMenu;