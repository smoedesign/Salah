// import { View, Text,StatusBar,Platform } from 'react-native';
// import AzkarDetailsScreen from './app/Screen/AzkarDetailsScreen';
// import AzkarScreen from './app/Screen/AzkarScreen';
// import HomeScreen from './app/Screen/HomeScreen';
// import Screen from './app/components/Screen';
// import TakeSnapShot from './app/components/SaveImage';
// import SaveImage from './app/components/SaveImage';
// import colors from './app/config/colors';
// import * as NavigationBar from 'expo-navigation-bar';
// import { useEffect, useState,useRef } from 'react';
// import AppButton from './app/components/AppButton';
// import * as Sharing from 'expo-sharing';
// import { captureRef } from 'react-native-view-shot';
// import { Image } from 'react-native';






// export default function App() {
//   const [ImageVisable, setImageVisiable] = useState(false);
//   const viewToSnapRef= useRef();

//   const share = async ()=>{
//     setImageVisiable(true)
//     try {
//       setTimeout( async() => {
//         const result= await captureRef(viewToSnapRef,{
         
//           quality: 1,
//           format: 'png',
//         })
//                       setImageVisiable(false);
//                       const test=await Sharing.isAvailableAsync();
//                       await Sharing.shareAsync(result);
//             }, 2000);
   
//     } catch (error) {
//       console.log(error)
//     }
    
//   }
//   const [barVisibility, setBarVisibility] = useState();
  
  
  
//   NavigationBar.addVisibilityListener(({ visibility }) => {
//       if (visibility === "visible") {
//         setBarVisibility(visibility);
//       }

//     });
//     useEffect(() => {
//       navigationConfig();
//     }, [barVisibility]);
  
//     const navigationConfig = async () => {
//       // Just incase it is not hidden

//       // Hide it
//     await NavigationBar.setVisibilityAsync('hidden');
//     await NavigationBar.setBehaviorAsync('inset-swipe')
//     };

//   return (
// <>
// <StatusBar hidden/>
// {ImageVisable &&  

// <View ref={viewToSnapRef} style={{flex:1, justifyContent:'center',
//     alignItems:'center',  backgroundColor:colors.lightGray}}>
//             <Image source={require('./app/assets/white.png')} style={{  width:100,height:100,top:20,position:'absolute'}}  />

// <View style={{ color: colors.white,
//     marginBottom: 15,
//     textAlign: 'center',
//     width:300,
//     height:300,
//     padding:20,
//     backgroundColor:colors.primary,
//     justifyContent:'center',
//     alignItems:'center',
//     borderRadius: 20,

//     }}>
// <Text style={{fontSize:15,color:colors.white,textAlign:'center' }}>﴿ الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يئوده حفظهما وهو العلي العظيم ﴾ [ البقرة: 255]
// </Text>
// </View>

// </View>

// }
// { !ImageVisable &&<AppButton onPress={share} title='share' style={{ backgroundColor:colors.primary,width:10,height:30,alignSelf:'center', margin:10 }}/>
// }
// </>
//   );



//   }