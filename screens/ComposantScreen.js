import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList , Platform , TextInput, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import administrateur from '../classes/administrateur';
import Feather from 'react-native-vector-icons/Feather';





const ComposantScreen  = (props) =>  {
  const [list , setList] = useState();
  const [assign , setAssign] = useState(false);
  const [employes , setEmployes] = useState();
  const [itemId , setItemId] = useState();
  const [value , setValue] = useState();
  const [search , setSearch] = useState(false);
  const [filteredList , setFilteredList] = useState();
  const remplirValue = (val)=>{
    setValue(val)
   
  }

  const  {composantTitle , productTitle} =  props.route.params;
  
  const colonne = ()=>{
    return Platform.OS == 'web' ? 2 : 1

  }


  const assignerTicket = async(itemId , employeEmail) => {
    await administrateur.assignerTicket(itemId , employeEmail , )
    alert ('ticket assigné ;) ')
  }
  const start = async()=> {   setList( await administrateur.getTickets(productTitle , composantTitle))
    setEmployes(await administrateur.getAll('employe'))}

  useEffect(() => {
    start()
}, [list]);
    return (
      <>
        <View style = {styles.action}>
     <TouchableOpacity onPress = {()=>{
       setFilteredList(list.filter(e => e.title == value))
       setSearch(true)
     }}>
     <Feather 
                    name="search"
                    size={20}
                    color = '#707070'
                />
     </TouchableOpacity>
                <TextInput 
                   placeholder = {value}
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>{
                    remplirValue(val) 
                   }}

                  

                ></TextInput>
                 <TouchableOpacity onPress = {()=>{
                   setSearch(false)
                 }}>
                    <Feather 
                        name='x'
                        color='#b8b8b8'
                        size={20}
                       
                        
                    />
         
                 </TouchableOpacity>
            </View>
     {
         !search ?
         <>
         {
            assign ? <>
            <Text style = {styles.title}> Les Employés : </Text>
           
           <View style={styles.container2}>
          <FlatList style={styles.container} numColumns={colonne()} keyExtractor = { e => e._id} data = {employes} renderItem = {({item}) =>
          <View style = {styles.list}>
            <View style = {styles.listRow}> 
              <Text style = {styles.listItem}>{item.name} </Text>
            </View>
            <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
               assignerTicket(itemId , item.email)
               setAssign(false);
              
             }} >
             <Text style = {styles.appButtonText }>Assigner le Ticket</Text>
         </TouchableOpacity>
          </View>
      
            }/>
      </View>
      
           
      
            
            
            </>:
              <>
       <Text style = {styles.title}> Les Tickets : </Text>
       
          <FlatList style={styles.container}  numColumns={colonne()} keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
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
                await administrateur.modifierEtatTicket(item._id, etat);
                setTimeout(()=>{ item.etat = etat ; },40)
      
              
                
              }}
            >
              <Picker.Item label="Ouvert" value="ouvert" />
              <Picker.Item label="Fermé" value="fermé" />
              <Picker.Item label="Assigné" value="assigné" />
              <Picker.Item label="Résolu" value="résolu" />
              <Picker.Item label="Re-ouvert" value="re-ouvert" />
              <Picker.Item label="Pas un probleme" value="nonprobleme" />
            </Picker>
             
            </View>
            <View style = {styles.listRow}>
              <Text style = {styles.ticketTitle}> Description : </Text>  
              <Text style = {styles.listItem}>{item.description} </Text>
            </View>
           {
             item.assignedTo == '' ?  <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
               setAssign(true);
               setItemId(item._id)
             }} >
             <Text style = {styles.appButtonText }>Assigner le Ticket</Text>
         </TouchableOpacity>
         :
         <>
         <Text style = {styles.ticketTitle}> Assigné a : </Text>  
         <Text style = {styles.listItem}>{item.assignedTo} </Text>
      </>
           }
          </View>
      
            }/>
      
      
      
      
      </>
         }
         </> 
         :  // search 
         <>
     {
            assign ? <>
            <Text style = {styles.title}> Les Employés : </Text>
           
           <View style={styles.container2}>
          <FlatList style={styles.container} numColumns={colonne()} keyExtractor = { e => e._id} data = {employes} renderItem = {({item}) =>
          <View style = {styles.list}>
            <View style = {styles.listRow}> 
              <Text style = {styles.listItem}>{item.name} </Text>
            </View>
            <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
               assignerTicket(itemId , item.email)
               setAssign(false);
              
             }} >
             <Text style = {styles.appButtonText }>Assigner le Ticket</Text>
         </TouchableOpacity>
          </View>
      
            }/>
      </View>
      
           
      
            
            
            </>:
              <>
       <Text style = {styles.title}> Les Tickets : </Text>
       
          <FlatList style={styles.container}  numColumns={colonne()} keyExtractor = { e => e._id} data = {filteredList} renderItem = {({item}) =>
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
                await administrateur.modifierEtatTicket(item._id, etat);
                setTimeout(()=>{ item.etat = etat ; },40)
      
              
                
              }}
            >
              <Picker.Item label="Ouvert" value="ouvert" />
              <Picker.Item label="Fermé" value="fermé" />
              <Picker.Item label="Assigné" value="assigné" />
              <Picker.Item label="Résolu" value="résolu" />
              <Picker.Item label="Re-ouvert" value="re-ouvert" />
              <Picker.Item label="Pas un probleme" value="nonprobleme" />
            </Picker>
             
            </View>
            <View style = {styles.listRow}>
              <Text style = {styles.ticketTitle}> Description : </Text>  
              <Text style = {styles.listItem}>{item.description} </Text>
            </View>
           {
             item.assignedTo == '' ?  <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=> {
               setAssign(true);
               setItemId(item._id)
             }} >
             <Text style = {styles.appButtonText }>Assigner le Ticket</Text>
         </TouchableOpacity>
         :
         <>
         <Text style = {styles.ticketTitle}> Assigné a : </Text>  
         <Text style = {styles.listItem}>{item.assignedTo} </Text>
      </>
           }
          </View>
      
            }/>
      
      
      
      
      </>
     }
         </> 
        
   
     }
     </>
    );

}
export default ComposantScreen;

const styles = StyleSheet.create({
    title : {
      fontSize : 30,
      fontWeight : 'bold',
      margin: 10,
    },
    
    list : {
     flex : 1,
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
      width : '100%'
    },
    appButtonContainer: {
        marginTop : 20,
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