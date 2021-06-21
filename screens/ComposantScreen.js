import React , {useState , useEffect} from 'react';
import {View , Text , StyleSheet , FlatList , ScrollView , TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import administrateur from '../classes/administrateur';





const ComposantScreen  = (props) =>  {
  const [list , setList] = useState();
  const [assign , setAssign] = useState(false);
  const [employes , setEmployes] = useState();
  const [itemId , setItemId] = useState();
  const [etaat , setEtaat] = useState();

  const  {composantTitle , productTitle} =  props.route.params;
  


  const assignerTicket = async(itemId , employeEmail) => {
    await administrateur.assignerTicket(itemId , employeEmail , )
  }
  const start = async()=> {   setList( await administrateur.getTickets(productTitle , composantTitle))
    setEmployes(await administrateur.getAll('employe'))}

  useEffect(() => {
    start()
}, []);
    return (
      assign ? <>
      <Text style = {styles.title}> Les Employés : </Text>
      <ScrollView>
     <View style={styles.container2}>
    <FlatList style={styles.container} keyExtractor = { e => e.name} data = {employes} renderItem = {({item}) =>
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

     </ScrollView>

      
      
      </>:
        <>
 <Text style = {styles.title}> Les Tickets : </Text>
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
        selectedValue={item.etat} // l'etat courant du ticket lors de la bd
        style={{ height: 50, width: 150 }}
        onValueChange={async(etat) => {
          await administrateur.modifierEtatTicket(item._id, etat);
          setEtaat(etat)
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
</View>

     </ScrollView>


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
  });