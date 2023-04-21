import React from 'react';
import { Text,StyleSheet,ImageBackground } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import {useEffect, useRef} from 'react'
import * as Sharing from 'expo-sharing';

function ImageView({children,refr}) {
  const viewToSnapRef= useRef();


   return (

    <ImageBackground source={require('../assets/Screen.jpg')} style={styles.container} ref={refr}>
      <Text>
      {children}

      </Text>
        
    </ImageBackground >

  );
}

const styles = StyleSheet.create({
container:{ 
width:'100%',
height:'100%',
justifyContent:'center',
alignItems:'center',
alignSelf:'center',
marginTop:50

 },
})
export default ImageView;