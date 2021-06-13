import React, { useState } from 'react';
import {View , Text , StyleSheet ,TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//import TextInput from 'react-native-input-style';




 const TicketScreen =() =>{
     const [title , setTitle ] = useState();
    const [descrition , setDescrition ] = useState();
    const [priorite , setPriorite] = useState();
    const [selectedValue, setSelectedValue] = useState("petite");
    return (
      <View style = {styles.container}>
      <Text style = {styles.ticketTitle}>Titre : </Text>
        <TextInput 
            style = {styles.input}
            label="Titre"
            outlined
                   placeholder = 'Entrer le titre' 
               
                   onChangeText = {(title )=>{ setTitle(title) } }
            ></TextInput>
              <Text style = {styles.ticketTitle}>Description : </Text>
  <TextInput 
             style = {styles.input}
                  label="Description"
                   placeholder = 'Entrer la description' 
               
                   onChangeText = {(desc)=>{setDescrition (desc)} }
            ></TextInput>
           <Text style = {styles.ticketTitle}>Priorité : </Text>
                 <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 ,}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="petite" value="petite" />
        <Picker.Item label="moyenne" value="moyenne" />
        <Picker.Item label="haute" value="haute" />
        <Picker.Item label="critique" value="critique" />
      </Picker>
      </View>

    );
}
export default TicketScreen;
const styles = StyleSheet.create({
    container: {
      margin : 15,
      marginTop : 50,
      borderWidth : 2,
      borderRadius : 25,
      borderColor : '#009387',
      padding : 20,
     height : '90%'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    input: {
      height: 40,
      marginVertical : 8 ,
      paddingHorizontal : 10,
      borderWidth: 1,
      borderRadius : 30,
    },
  
    button: {
        alignItems: 'center',
        marginTop: 50
    },
 
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
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
      appButtonContainer2: {
          borderColor : '#009688',
          borderWidth : 1,
          marginTop: 15,
        elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 45,
        paddingVertical: 10,
       width : '100%',
      },
      appButtonText2: {

        fontSize: 18,
        color: "#009688",
        fontWeight: "bold",
        alignSelf: "center",
        
      },
      
  ticketTitle :{
    fontSize : 30,
    fontWeight : 'bold',
    marginBottom : 5,
   
    },
  });