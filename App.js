import React,{Component} from "react"
import {Button,View,Text,TouchableOpacity,StyleSheet } from "react-native"
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import SummaryScreen from "./screens/SummaryScreen"
import HomeScreen  from "./screens/HomeScreen"
import AppHeader from "./components/AppHeader"    

export default class App extends React.Component{
  render(){
    return(
      <View>
      <AppHeader/>
    <AppContainer/>
     
      </View>
    )
  }
}

var AppNavigator= createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
})

const AppContainer=createAppContainer(AppNavigator);
