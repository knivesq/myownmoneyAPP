import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react'
// Importacao das stacks
// import InicioStack from './InicioStack'
import AuthScreen from '../screens/auth'
import SplashScreen from '../screens/splash'



const Routes = createSwitchNavigator({
  Splash: SplashScreen, // SPLASH switch
  Auth: AuthScreen, // LOGIN ETC switch
  // AppStack: AppStack       //AREA LOGADA DO APP 
},
{
  initialRouteName: 'Splash',
});

// const Routes = createStackNavigator({
//   AuthFlow
// },
//   {
//     headerMode: 'none',
//     navigationOptions: {
//       headerVisible: false,
//     },
//     initialRouteName: "AuthFlow"
//   });


export default createAppContainer(Routes);