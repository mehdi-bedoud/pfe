import { StyleSheet, Text, View , Button , FlatList } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';


const list = [{title : 'hello ',
 description : 'un problème dans le compteur de l\'eau il n\'est pas strict problème dans le compteur de problème dans le compteur de '
,etat : 'ouvert',
 }, 
{
  title : 'hello ',
description : 'description ',
etat : 'ouvert',
}, 
]

 function HomeScreen({navigation}){
  const user = {
    admin : true
  }
    return  (
       user.admin ? 
        <>
        <Text style = {styles.title}> Les Services : </Text>
        <View style={styles.container}>
    <FlatList  keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
         <Text style = {styles.ticketTitle}> Eau </Text> 
      </View>
    
    </View>

      }/>
</View>

        </>
        : 
      <>
      <Text style = {styles.title}> Les Tickets Ouverts : </Text>
        <View style={styles.container}>
    <FlatList  keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Titre : </Text>  
        <Text style = {styles.listItem}>{item.title} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Etat : </Text>  
        <Text style = {styles.listItem}>{item.etat} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Description : </Text>  
        <Text style = {styles.listItem}>{item.description} </Text>
      </View>
    </View>

      }/>
</View>
</>
);
  }

//-------------------------------------------------------

  const homeStack = createStackNavigator();

  //---------------------------------------------------------
  export default function stackHomeScreen (){
   return (
    <homeStack.Navigator>
    <homeStack.Screen name = 'Acceuil' component = {HomeScreen} options = {
   {
     headerStyle : {
       backgroundColor : '#009387',
       
     },
     headerTintColor : '#fff',
     headerTitleStyle:{
       fontWeight : 'bold',
     }

   }
 }  />
</homeStack.Navigator>
   )
}


//---------------------------------------
const styles = StyleSheet.create({
  title : {
    fontSize : 30,
    fontWeight : 'bold',
    margin: 10,
  },
  
  list : {
    alignItems : 'center',
    padding : 20,
    margin : 20,
    borderWidth : 3,
    
    borderRadius: 15,
    borderColor : '#009688',
  },

  listItem: {
    marginTop : 5 , 
    padding: 10,
    borderColor : 'gray' , 
    borderRadius : 15,
    borderWidth : 1,
    width : '100%'
    
  },

  ticketTitle :{
    fontSize : 30,
    fontWeight : 'bold',
     paddingTop : 5 ,
   
    },

    listRow : { 
      width : '100%'
  }
});
//------------------------------------