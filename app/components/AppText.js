import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from './Screen'
import colors from '../config/colors'

function AppText ({children,style}) {
  return (
    <Text style={[styles.text, style]}>{children}</Text>  )
}


const styles = StyleSheet.create({

    text:{

      fontSize: 18,
    },
   
})
export default AppText;