import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { View,Text,StyleSheet, Image, ScrollView} from 'react-native';

import Screen from '../components/Screen';
import colors from '../config/colors';
import Header from '../components/Header';
import AppButton from '../components/AppButton';
import Search from '../components/Search';

function HomeScreen(props) {
    return (
       <>
       <Screen style={styles.container}>
       <Header imageuri={require('../assets/white.png')}/>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
<AppButton  style={styles.duaaButton} title='ربي أوزعني أن أشكر نعمتك التي أنعمت علي وعلي والدي وان اعمل صالحاً ترضاه وادخلني برحمتك في عبادك الصحالحين'/>
 <Search  title='أبحث'/>
  <View style={styles.buttonContaıner} >
  <AppButton title='القران الكريم' style={styles.button} />
  <AppButton title='أسماء الله الحسنى' style={styles.button}/>
  <AppButton title='الاذكار' style={styles.button}/>
  <AppButton title='السبحة' style={styles.button}/>
  <AppButton title='الاربعون النووية' style={styles.button}/>
  <AppButton title='دعاء من الكتاب والسنة' style={styles.button}/>

</View>
</ScrollView>
       </Screen>
       </>
    );
}


const styles = StyleSheet.create({
   container:{
paddingTop:20,
backgroundColor:'#efefef',
padding:10
   },
   content:{
marginBottom:50
   },
   
    duaaButton:{
        height:200,
        backgroundColor:colors.primary,
    },
    button:{
        width:165,
        height:165,  
marginVertical:5,
backgroundColor:colors.primary,

padding:15,
},
    buttonContaıner:{
        flexDirection:'row-reverse',
        flexWrap:'wrap',
        justifyContent:'space-between',
        
        
    },

  });
export default HomeScreen;