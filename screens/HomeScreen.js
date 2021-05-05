import React,{Component} from "react"
import {Button,View,Text,TouchableOpacity,StyleSheet } from "react-native"

import db from "../config"

export default class HomeScreen extends React.Component{
 constructor(){   
   super();
   this.state={
     all_students:[],
     presentPressedlist:[],
     absentPressedlist:[]
   }
 }

componentDidMount= async()=>{
var class_ref=await db.ref("/").on("value",data=>{
var all_students=[]
var class_a=data.val();
for (var i in class_a){
  all_students.push(class_a[i]);

}
all_students.sort(function(a,b){
  return a.roll_no-b.roll_no;
});
this.setState({all_students:all_students})
console.log(all_students);
})
}

updateAttendance(roll_no, status){
var id="";
if(roll_no<=9){
  id="0" + roll_no;

} else {
  id= roll_no
}

 var today = new Date();
 var dd = today.getDate();
 var mm = today.getMonth()+1;
 var yyyy= today.getFullYear();
  
  if(dd< 10){
    dd="0" + dd;
  }
   if(mm< 10){
    mm="0" + mm;
  }

  today = dd + "-" + mm + "-" + yyyy;
  var ref_path = id;
  var class_ref = db.ref(ref_path);
  class_ref.update({
    [today]: status
  });
}

gotoSummaryScreen=()=>{
this.props.navigation.navigate("SummaryScreen")
}
  render(){
    var all_students=this.state.all_students
    if(all_students.length===0){
    return(
    
    <View style={{flex:1, alignItems:"center",justifyContent:"center"}}>
    <Text style={{fontSize:35, fontWeight:"bold"}}>Please Wait...</Text>     

    </View>
    )
    } else {
  return(
    <View style={styles.container}>
<View style={{flex:3}}>
{all_students.map((student, index)=>(
 <View key={index} style={styles.studentContainer}>
 <View key={"name"+index} style={{flexDirection:"row",flex:1}}>
 <Text style ={{fontSize:20, fontWeight:"bold", fontFamily:"Comic Sans Ms"}}>{student.roll_no}</Text>
  <Text style ={{fontSize:20, fontWeight:"bold", fontFamily:"Comic Sans Ms"}}>{student.name}</Text>
</View>
<View style={{flexDirection:"row",flex:1}}>
<TouchableOpacity style={this.state.presentPressedlist.includes(index)?[styles.presentButton, {backgroundColor:"green"}]: styles.presentButton} 
onPress={()=>{
var presentPressedlist=this.state.presentPressedlist;
presentPressedlist.push(index);
this.setState({presentPressedlist:presentPressedlist});
var roll_no=index+1;
this.updateAttendance(roll_no, "present");
}}>
<Text>Present</Text>
</TouchableOpacity>

<TouchableOpacity style={this.state.absentPressedlist.includes(index)?[styles.absentButton, {backgroundColor:"red"}]: styles.absentButton} 
onPress={()=>{
var absentPressedlist=this.state.absentPressedlist;
absentPressedlist.push(index);
this.setState({absentPressedlist:absentPressedlist});
var roll_no=index+1;
this.updateAttendance(roll_no, "absent");
}}>
<Text>Absent</Text>
</TouchableOpacity>


</View>
 </View>
))}
<View style={{flex:1}}>
<TouchableOpacity style={styles.footer} onPress={()=>{
  this.props.navigation.navigate("SummaryScreen")
}}>
<Text style={{color:"white", fontWeight:"bold", fontSize:20}}> Submit </Text>
</TouchableOpacity>
</View>
</View>
    </View>
  )
  }
    }
  }

  const styles = StyleSheet.create({
  

  container: {
    flex: 1,
backgroundColor: 'lightblue'
  },
  studentContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    margin: 20,
  
  },
  presentButton: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderWidth: 4,
  },
  absentButton: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    marginTop:10,  
  },
});








