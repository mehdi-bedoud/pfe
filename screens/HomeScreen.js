import { StyleSheet, Text, View , Button , FlatList , ScrollView , LogBox } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../components/Context';
import {Picker} from '@react-native-picker/picker';






const list = [{title : 'hello ',
 description : 'un problème dans le compteur de l\'eau il n\'est pas strict problème dans le compteur de problème dans le compteur de '
,etat : 'ouvert',
 }, 
{
  title : 'girou ',
description : 'description ',
etat : 'ouvert',
}, 
{
title : 'girofu2',
description : 'description ',
etat : 'ouvert',
}, 
{
  title : 'girou21',
  description : 'description ',
  etat : 'ouvert',

  }, 
  {
    title : 'girou22',
    description : 'description ',
    etat : 'ouvert',
    }, 
    {
      title : 'gihrou2',
      description : 'description ',
      etat : 'ouvert',
      }, 
      {
        title : 'girofu2',
        description : 'description ',
        etat : 'ouvert',
        }, 
]


 function HomeScreen(props){

 
  // we can call db from here but we have to initial the State here of Services and Tickets 


// here it must be a useEffect to bring data from db depending on admin value ;
// so importing th callBack function that executes the dispatch and then use it inside useEffect so : 

// useEffect( () => {
//   if (props.admin){
//     BringServices();
//   } else {
//     bringOpenTickets();
//   } 
// } , [props.admin]);


//const [selectedValue , setSelectedValue] = useState()

useEffect(() => {
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, []);



    return  (
       props.cr ? 
        <>
        <Text style = {styles.title}> Les Services : </Text>
     <ScrollView style = {styles.container}>
     <View >
    <FlatList   keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
         <Text style = {styles.ticketTitle}> {item.title} </Text> 
      </View>
    
    </View>

      }/>
</View>
     </ScrollView>

        </>
        : props.client?  
      <>
      <Text style = {styles.title}> Les Tickets Ouverts : </Text>
     <ScrollView>
     <View style={styles.container2}>
    <FlatList style={styles.container} keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
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
     </ScrollView>
</>  : props.admin ? 
 <>
 <Text style = {styles.title}> Les Tickets Assignés: </Text>
     <ScrollView>
     <View style={styles.container2}>
    <FlatList style={styles.container} keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Titre : </Text>  
        <Text style = {styles.listItem}>{item.title} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Etat : </Text>  
        <Picker
        selectedValue={"Assigné"} // l'etat courant du ticket lors de la bd
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Ouvert" value="ouvert" />
        <Picker.Item label="Fermé" value="fermé" />
        <Picker.Item label="Assigné" value="assigné" />
        <Picker.Item label="Résolu" value="résolu" />
        <Picker.Item label="Re-ouvert" value="re-ouvert" />
        <Picker.Item label="Pas un probleme" value="nonprobleme" />
      </Picker>
        <Text style = {styles.listItem}>{item.etat} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Description : </Text>  
        <Text style = {styles.listItem}>{item.description} </Text>
      </View>
    </View>

      }/>
</View>
     </ScrollView>


</> : null
);
  }

//-------------------------------------------------------

  const homeStack = createStackNavigator();

  //---------------------------------------------------------
  export default function stackHomeScreen (props){
   return (
    <homeStack.Navigator>
    <homeStack.Screen name = 'Acceuil' children = { () => <HomeScreen {...props} />} options = {
   {
     headerStyle : {
       backgroundColor : '#009387',
       
     },
     headerTintColor : '#fff',
     headerTitleStyle:{
       fontWeight : 'bold',
     },
     headerLeft : () =>(  <Icon.Button name = "menu" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.openDrawer()}  />)

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
//------------------------------------