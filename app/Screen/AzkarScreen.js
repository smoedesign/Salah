import React from 'react';
import { FlatList, TouchableHighlight } from 'react-native';
import { View,StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';
import Header from '../components/Header';
import Search from '../components/Search';
import colors from '../config/colors';


const azkar=[
   
    {id:3,
    title:'أذكار النوم'},
    {id:4,
    title:'أذكار الاستيقاظ النوم'},
    {id:5,
    title:'الاذكار بعد الصلاة'},
    {id:6,
      title:'دعاء سجود التلاوة'},
      {id:7,
      title:'دعاء صلاة الاستخارة'},
      {id:8,
      title:'دعاء الاستفتاح'},
      {id:9,
      title:'دعاء السفر'},
      {id:10,
      title:'دعاء الركوع'},
];

const morning=[
  
    {id:1,
      title:'أذكار الصباح'},
      {id:2,
      title:'أذكار المساء'},
  
]

function AzkarScreen(props) {
   return (
    
    <Screen style={styles.container}>
      <Header title='الاذكار'/>
<Search title='أبحث'/>
<FlatList
     data={morning}
     keyExtractor={zaker=> zaker.id.toString()}
     renderItem={({ item})=> 
     <AppButton title={item.title} style={styles.azkarContainer}
     onPress={()=>console.log('aZKAR',item)}

     />
    } 
     
     style={styles.morningContainer}/>
     <FlatList
     data={azkar}
     keyExtractor={zaker=> zaker.id.toString()}
     renderItem={({ item})=> 
     <AppButton title={item.title} style={styles.azkarContainer}
     onPress={()=>console.log('aZKAR',item)}
     />}
    
     />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop:5
  },
  azkarContainer:{  
    height:50,
    marginBottom:10,
   alignItems:'flex-end',
   paddingRight:20
  },
  
  morningContainer:{
    marginBottom:25,
  }
})
export default AzkarScreen;