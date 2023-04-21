import React from 'react';
import { View,StyleSheet } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { TouchableWithoutFeedback } from 'react-native';


function CopyToClickboard({children}) {
   return (
    <TouchableWithoutFeedback onPress={ async() => {
        await Clipboard.setStringAsync(children);
           alert('Copied')
         }}>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
container:{  },
})
export default CopyToClickboard;