import { StyleSheet, Text, View , Button , FlatList  , LogBox, TouchableOpacity , Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
//import {AuthContext} from '../components/Context';
import {Picker} from '@react-native-picker/picker';
import ProductScreen from './ProductScreen';
import ComposantScreen from './ComposantScreen';
import administrateur from '../classes/administrateur';
import employe from '../classes/employe';
import client from '../classes/client';






var ProductTitle ;

 function HomeScreen(props){
const [list ,setList] = useState([]); 


const setProductTitle = (title)=> {
  ProductTitle = title;
  return
}
const colonne = ()=>{
  return Platform.OS == 'web' ? 8 : 1

}
const colonneTicket = ()=>{
  return Platform.OS == 'web' ? 2 : 1

}
  
const start = async() => {

  switch (props.privilege){
    case 'admin':   //getting list des produits
    setList( await administrateur.getAllProducts());break;
    case 'employe' :  setList(await employe.getAssignedTickets(props.email)) ;break ; 
    case 'client' : setList(await client.getCreatedTickets(props.email)) ; break ; 
}
}

useEffect(() => {start()}, [list]);

    return  (
       props.privilege == 'admin' ? 
        <>
        <Text style = {styles.title}> Les Produits : </Text>
     
     
 
     <FlatList  numColumns={colonne()} keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
   <TouchableOpacity onPress = {()=>{
     setProductTitle(item.title);
    props.navigation.navigate('ProductScreen')
   }}>
      <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> {item.title} </Text>  
      </View>
    </View>
   </TouchableOpacity>

      }/>

  

        </>
        : props.privilege == 'client' ?  
      <>
      <Text style = {styles.title}> Les Tickets Créés : </Text>
   
     <View style={styles.container2}>
    <FlatList style={styles.container} numColumns={colonneTicket()} keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
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
    
</>  : props.privilege == 'employe' ? 
 <>
 <Text style = {styles.title}> Les Tickets Assignés: </Text>
    
     <View style={styles.container2}>
    <FlatList style={styles.container} numColumns={colonneTicket()} keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Titre : </Text>  
        <Text style = {styles.listItem}>{item.title} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Etat : </Text>  
        <Picker
        selectedValue={item.etat} // l'etat courant du ticket lors de la bd
        style={{ height: 50, width: 150 }}
        onValueChange={async(etat) => {
          item.etat = etat;
          await administrateur.modifierEtatTicket(item._id, etat);
        }}
      >
        <Picker.Item label="Assigné" value="assigné" />
        <Picker.Item label="Résolu" value="résolu" />
        <Picker.Item label="Pas un probleme" value="nonprobleme" />
      </Picker>
        
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Description : </Text>  
        <Text style = {styles.listItem}>{item.description} </Text>
      </View>
    </View>

      }/>
</View>



</> : null
);
  }

//-------------------------------------------------------

  const homeStack = createStackNavigator();

  //---------------------------------------------------------
  export default function stackHomeScreen (props){
   return (
    <homeStack.Navigator>
    <homeStack.Screen name = 'Acceuil' children = { (hh) => <HomeScreen {...props} {...hh} />} options = {
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
   <homeStack.Screen name = 'ProductScreen' children = { (hh) => <ProductScreen {...props  }{...hh} ProductTitle =  {ProductTitle}   />} 
   options = {
   {
     headerStyle : {
       backgroundColor : '#009387',
       
     },
     headerTintColor : '#fff',
     headerTitleStyle:{
       fontWeight : 'bold',
     },
     headerLeft : () =>(  <Icon.Button name = "arrow-back" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.goBack()}  />)

   }
 } 
 />
<homeStack.Screen name = 'ComposantScreen' children = { (hh ) => <ComposantScreen {...props} {...hh} />} options = {
   {
     headerStyle : {
       backgroundColor : '#009387',
      
     },
     headerTintColor : '#fff',
     headerTitleStyle:{
       fontWeight : 'bold',
     },
     headerLeft : () =>(  <Icon.Button name = "arrow-back" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.goBack()}  />)

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
    flex: 1 ,
    borderRadius: 15,
    borderColor : '#009688',
    justifyContent : 'space-between',
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