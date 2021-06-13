import React from 'react';
import {Text , StyleSheet , View} from 'react-native';
import employe from '../classes/employe';

const EmployeList = ()=>{


    
return (
<View  style = {styles.container}>
<Text style = {styles.title}>Liste des Employés : </Text>

</View>
);

}

export default EmployeList;

const styles = StyleSheet.create({
    title : {
      fontSize : 30,
      fontWeight : 'bold',
      margin: 10,
    },
    
    list : {
     
      padding : 20,
      margin : 20,
      borderWidth : 2,
      
      borderRadius: 15,
      borderColor : '#009688',
    },
  
    listItem: {
      marginTop : 5 , 
      padding: 10,
      borderColor : 'gray' , 
      borderRadius : 15,
      borderWidth : 1,
      width : '100%',
  
      
    },
  
    ticketTitle :{
      fontSize : 30,
      fontWeight : 'bold',
       paddingTop : 5 ,
     
      },
  
      listRow : { 
        width : '100%'
    },
    container : {
      flexDirection : 'column',
    },
    container2 : {
      flexDirection : 'row',
    }
  });