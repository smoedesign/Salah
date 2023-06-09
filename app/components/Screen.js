import React from 'react';
import { View,StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants'

function Screen({style,children}) {
    return (
        <SafeAreaView style={[styles.screen,style]}>
             <View style={style}> 
{children}
             </View>

        </SafeAreaView>
     
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        
    }
})

export default Screen;