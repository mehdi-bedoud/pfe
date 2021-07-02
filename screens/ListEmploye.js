import React, { useEffect , useState } from 'react';
import {Text , StyleSheet , View , FlatList, TouchableOpacity , TextInput} from 'react-native';
import administrateur from '../classes/administrateur';
import Feather from 'react-native-vector-icons/Feather';


const EmployeList = (props)=>{
  const [list , setList] = useState();
  const [value , setValue] = useState();
  const [search , setSearch] = useState(false);
  const [filteredList , setFilteredList] = useState();
  const [deleted , setDeleted] = useState(false)

  const remplirValue = (val)=>{
    setValue(val)
   
  }
  const getEmployes = async()=>{
    setList(await administrateur.getAll('employe'))
  }
  
  const  supprimer = async(email) => {
    await administrateur.deleteUser(email)
    alert ('employé supprimé ;) ')
    setDeleted(!deleted);
    props.navigation.navigate('Acceuil');
   
  }



    useEffect (()=> {
      props.navigation.addListener('focus', () => {
        getEmployes();
      });
  


    },[search , deleted , props.navigation])
return (
    <>
           <View style = {styles.action}>
     <TouchableOpacity onPress = {()=>{
       setFilteredList(list.filter(e => e.email.includes(value)))
       setSearch(true)
     }}>
     <Feather 
                    name="search"
                    size={20}
                    color = '#707070'
                />
     </TouchableOpacity>
                <TextInput 
                   placeholder = 'chercher'
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>{
                    remplirValue(val) 
                   }}

                  

                ></TextInput>
                 <TouchableOpacity onPress = {()=>setSearch(false)}>
                    <Feather 
                        name='x'
                        color='#b8b8b8'
                        size={20}
                       
                        
                    />
         
                 </TouchableOpacity>
            </View>
<Text style = {styles.title}>Liste des Employés : </Text>

{
  !search ?
  <FlatList  keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> Nom Complet : </Text>  
        <Text style = {styles.listItem}>{item.name} </Text>
      </View>
      <View style = {styles.listRow}>
        <Text style = {styles.ticketTitle}> email : </Text>  
        <Text style = {styles.listItem}>{item.email} </Text>
      </View>
      <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
             supprimer(item.email)
              
             }} >
             <Text style = {styles.appButtonText }>Supprimer l'mployé</Text>
         </TouchableOpacity>

    </View>

      }/>
      : <>
       
        <FlatList  keyExtractor = { e => e._id} data = {filteredList} renderItem = {({item}) => 
       <View style = {styles.list}>
          <View style = {styles.listRow}>
            <Text style = {styles.ticketTitle}> Nom Complet : </Text>  
            <Text style = {styles.listItem}>{item.name} </Text>
          </View>
          <View style = {styles.listRow}>
            <Text style = {styles.ticketTitle}> email : </Text>  
            <Text style = {styles.listItem}>{item.email} </Text>
          </View>
          <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
              supprimer(item.email)
              
             }} >
             <Text style = {styles.appButtonText }>Supprimer l'mployé</Text>
         </TouchableOpacity>
    
        </View> 
    
   

      }/>
      
      </>
}
      <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=>props.navigation.navigate('Acceuil') } >
                    <Text style = {styles.appButtonText }>Retour</Text>
                </TouchableOpacity>
            </View >


</>
);

}

export default EmployeList;


const styles = StyleSheet.create({
    title : {
      fontSize : 25,
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
      fontSize : 22,
      fontWeight : 'bold',
       paddingTop : 5 ,
     
      },
  
      listRow : { 
        width : '100%'
    },
    container : {

      flexDirection : 'row',
 
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
      marginTop : 14,
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
    action: {
      flexDirection: 'row',
      marginTop: 25,
      borderWidth: 1,
      borderColor: '#3D3D3D',
      borderRadius : 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems : 'center',
      alignSelf : 'center',
      width : '80%'
  },
  textInput: {
    flex: 1,
   // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
  });