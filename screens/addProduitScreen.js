import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import administrateur from '../classes/administrateur';


const AddProduit = (props) => {

const [title , setTitle ] = useState('');

const addProduct = ()=>{
    if (title.length != 0 ){
        administrateur.addProduit(title)
    }else{
        alert('entrer le nom du produit')
    }
   
}

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>


        <View style={styles.header}>
            <Text style={styles.text_header}>Ajouter Un Produit</Text>
        </View>


        <View style ={styles.footer} >
            <Text>Nom de Produit </Text>



            <View style = {styles.action}>
            <FontAwesome 
                    name="user-o"
                    size={20}
                />
                 <TextInput 
                   placeholder = 'Entrer le titre de produit' 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setTitle(val) }
                  

                ></TextInput>
               
                </View>


            
            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=>{
                    addProduct();
                    props.navigation.navigate('Acceuil');
                }} >
                    <Text style = {styles.appButtonText }>Ajouter un Produit</Text>
                </TouchableOpacity>
            </View >
            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=>props.navigation.navigate('Acceuil') } >
                    <Text style = {styles.appButtonText }>Retour</Text>
                </TouchableOpacity>
            </View >


        </View>
        </View>
       
     
    );
}


export default AddProduit;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
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

    textInput: {
        flex: 1,
       // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
   
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
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

