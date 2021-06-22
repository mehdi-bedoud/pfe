import React, { useEffect , useState } from 'react';
import {Text , StyleSheet , View , FlatList, TouchableOpacity} from 'react-native';
import administrateur from '../classes/administrateur';
const ClientList = (props)=>{
  const [list , setList] = useState();

  const getClients = async()=>{
    setList(await administrateur.getAll('client'))
  }

    useEffect (()=> {
getClients();
    },[])
return (
    <>
<Text style = {styles.title}>Liste des Clients : </Text>

<FlatList style={styles.container} keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Nom Complet : </Text>  
        <Text style = {styles.listItem}>{item.name} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> email : </Text>  
        <Text style = {styles.listItem}>{item.email} </Text>
      </View>

    </View>

      }/>
      <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=>props.navigation.goBack()} >
                    <Text style = {styles.appButtonText }>Retour</Text>
                </TouchableOpacity>
            </View >


</>
);

}

export default ClientList;


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
      margin : 20,
      flexDirection : 'column',
      padding : 20,
      borderWidth : 1,
      borderRadius : 20,
      borderColor : '#009387',
    },
    button: {
      alignItems: 'center',
      marginVertical: 50,
      marginHorizontal : 25,
  },
    container2 : {
      flexDirection : 'row',
    },
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 45,
      paddingVertical: 10,
      width : '100%',
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      
    },
  });