import React,{Component} from "react"
import {Button,View,Text,TouchableOpacity,StyleSheet } from "react-native"

class AppHeader extends Component{

  render(){
    return(
      <View style={styles.textContainer}>
      <Text style={styles.text}>Student Attendence  </Text>
      </View>
    )
  }
}


const styles=StyleSheet.create({
  textContainer:{
marginBottom:15,
backgroundColor:"violet"
  },
  text:{
    color:"black",
    padding:18,
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginLeft:10
  }
});

export default AppHeader;








