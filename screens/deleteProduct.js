import React, { useState , useEffect } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
    StatusBar,
    Alert,
 
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import administrateur from '../classes/administrateur';
import { setMaxListeners } from '../../backend/models/produitModel';


const deleteProduit = ({navigation}) => {

const [title , setTitle ] = useState('');
const [produit , setProduit] = useState();
const [produits , setProduits] = useState();
const [list , setList] = useState();

const addProduct = async()=>{
    if (title.length != 0 )
    var data =await administrateur.addComposant(title , produit)
    if (data ) alert ('Composant ajouté')
    else alert ('erreur')
}
const getProducts = async() => {
    setProduits(await administrateur.getAllProducts())
}



    useEffect( ()=> {
        getProducts();
      } , [produits])


    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>


        <View style={styles.header}>
            <Text style={styles.text_header}>Supprimer Un Produit</Text>
        </View>


        <View style ={styles.footer} >
                <Text style = {{marginTop : 20}}>Les Produits </Text>
                <Picker
      selectedValue={produit}
        style={{ height: 50, width: 150 ,margin : 10,paddingLeft : 10}}
        onValueChange={async(itemValue) => {
            setProduit(itemValue);
           setList( await administrateur.getComposants(itemValue))
        }}
      >
        
       {
         produits ? 
         
           produits.map( (s) => {
                return <Picker.Item key={s.title} value={s.title} label={s.title} value = {s.title}/>
            }) : null 
       }
      </Picker>
     

<View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {async()=>{
                    await administrateur.deleteProduit(produit)
                    setProduits([]);
                    navigation.goBack();
                    alert('produit supprimé ;)')
                }} >
                    <Text style = {styles.appButtonText }>Supprimer le Produit</Text>
                </TouchableOpacity>
            </View >

            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {()=>navigation.goBack()} >
                    <Text style = {styles.appButtonText }>Retour</Text>
                </TouchableOpacity>
            </View >


        </View>


        </View>
       
     
    );
}


export default deleteProduit;

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
      list : {
        padding : 20,
  
        borderWidth : 3,
        flex: 1 ,
        borderRadius: 15,
        borderColor : '#009688',
        justifyContent : 'space-between',
          },
   
  });

