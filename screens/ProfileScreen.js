import React, { useState } from 'react'
import { View,
     Text ,
     TouchableOpacity,
    TextInput ,
    StyleSheet,
  
    } from 'react-native';
    import { Header } from 'react-native-elements';
 import {Avatar} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import User from '../classes/User';
var ImagePicker = require('react-native-image-picker');

export default function ProfileScreen(props){

const [email, setEmail] = useState('');
const [password , setPassword] = useState('');
const [password1 , setPassword1] = useState('');
const [password2 , setPassword2] = useState('');
const [changeMail , setChangeMail] = useState(false);
const [changePassword , setChangePassword] = useState(false);


const changeEmail = async()=>{
    const resultat = await User.Login(props.email , password)
    if (resultat){
        await User.setEmail(props.email , email)
        props.navigation.goBack();
        alert('email mis à jour :)')
    }else{
        alert('le mot de passe n\'est pas juste')

    }
}
const changeMdp = async()=>{
    const resultat = await User.Login(props.email , password)
    if (resultat){
        if (password1 == password2){
            await User.valideReset(props.email , password);
            props.navigation.goBack();
            alert('mot de passe mis à jour :)')
        }else {
            alert ('les mots de passes ne sont pas identiques')
        }
     
    }else{
        alert('le mot de passe n\'est pas juste')

    }

}
const choosePhoto = ()=>{
  // ImagePicker.launchImageLibrary({noData : true,}, response =>{
    //    setPhoto(response.uri)
         
    

}

    return <>
    
    <View style = {{marginTop : 100 , margin : 15}}>
      <View style= {{alignItems : 'center' , marginBottom : 30 }}>
      <Avatar.Image source={require('../assets/profile-user.png')}
                 size = {80}
                  />
     
       </View>
       { changeMail ? <>
        <Text>Nouveau EMail</Text>
            <View style = {styles.action}>
            <FontAwesome 
                    name="user-o"
                    size={20}
                />
                <TextInput 
                  placeholder = 'entrer le nouveau email'
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setEmail(val) }
                  

                ></TextInput>
               
            </View>
       {/* mot de passe  */}
            <Text style ={{marginTop : 35}} >Mot de passe</Text>

            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Tapez votre mot de passe actuel' 
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setPassword(val) }
                  

                ></TextInput>
            </View>
            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {() => { if (email) {
                    changeEmail()
                }else{
                    alert('vous devez remplir l\'email')
                }
                }} >
                    <Text style = {styles.appButtonText }>Sauvegarder</Text>
                </TouchableOpacity>
        </View> </> : null

       }
       {
           changePassword ? <>
       {/* mot de passe  */}
            <Text style ={{marginTop : 35}} >Ancien mot de passe</Text>

            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Tapez votre ancien mot de passe' 
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setPassword(val) }
                  

                ></TextInput>
            </View>
            <Text style ={{marginTop : 35}} >Nouveau mot de passe</Text>

            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Entrer le nouveau mot de passe' 
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setPassword1(val) }
                  

                ></TextInput>
            </View>
            <Text style ={{marginTop : 35}} >Confirmer nouveau mot de passe</Text>

            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Confirmer le nouveau mot de passe' 
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>setPassword2(val) }
                  

                ></TextInput>
            </View>



            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {() => { changeMdp() }} >
                    <Text style = {styles.appButtonText }>Sauvegarder</Text>
                </TouchableOpacity>
        </View>
           </> : null 
       }
       {
           (!changeMail && !changePassword) ? <>
            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {() => { setChangeMail(true) }} >
                    <Text style = {styles.appButtonText }>Changer l'email</Text>
                </TouchableOpacity>
                </View>
                <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {() => { setChangePassword(true) }} >
                    <Text style = {styles.appButtonText }>Changer le mot de passe</Text>
                </TouchableOpacity>
                </View>
           
           
           </> : null
       }
           <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer} onPress = {() => { props.navigation.navigate('Acceuil') ;
                setChangeMail(false);
                setChangePassword(false) }} >
                    <Text style = {styles.appButtonText }>Retour</Text>
                </TouchableOpacity>
                </View>


           
        </View>
   </>
}

const styles = StyleSheet.create({

 
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
    appButtonContainer: {
        marginTop : 10,
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
        
      }

  });