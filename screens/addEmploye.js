import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import employe from '../classes/employe';

//import { AuthContext } from '../components/context';

//import Users from '../model/users';



const AddEmploye = ({navigation}) => {

    //--------------------------
    const [name , setName ] = useState('');
    const [mail , setMail ] = useState('');
    const [password1 , setPassword1 ] = useState('');
    const [password2 , setPassword2 ] = useState('');
    
    const addUser = ()=>{
        if (name.length != 0 && mail.length != 0 && password1.length !=0 && password1 == password2)
        administrateur.addUser({name , mail , password1} , 'client')
    }
        return (
          <View style={styles.container}>
              <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Ajouter Un Client</Text>
            </View>
            <View style ={styles.footer} >
                <Text>Nom complet</Text>
                <View style = {styles.action}>
                <FontAwesome 
                        name="user-o"
                        size={20}
                    />
                     <TextInput 
                       placeholder = 'Entrer le nom complet' 
                       style = {styles.textInput} 
                       onChangeText = {(val)=>setName(val) }
                      
    
                    ></TextInput>
                   
                     
                </View>
                <Text style = {{marginTop : 35}}>Email</Text>
                <View style = {styles.action}>
                <FontAwesome 
                        name="user-o"
                        size={20}
                    />
                     <TextInput 
                       placeholder = 'Entrer le mail ' 
                       style = {styles.textInput} 
                       onChangeText = {(val)=>setMail(val) }
                      
    
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
                       placeholder = 'Entrer le mot de passe' 
                       style = {styles.textInput} 
                       onChangeText = {(val)=>setPassword1(val) }
                      
    
                    ></TextInput>
                    
                </View>
                <Text style = {{marginTop : 35}}>Confirmer le mot de passe</Text>
                <View style = {styles.action}>
                <Feather 
                        name="lock"
                        size={20}
                    />
                    <TextInput 
                       placeholder = 'Confirmer le mot de passe' 
                   
                       style = {styles.textInput} 
                       onChangeText = {(val)=>setPassword2(val) }
                      
    
                    ></TextInput>
                    
                </View>
                <View style = {styles.button}>
                    <TouchableOpacity style= {styles.appButtonContainer} onPress = {addUser()} >
                        <Text style = {styles.appButtonText }>Ajouter un Client</Text>
                    </TouchableOpacity>
                </View >
            </View>
            </View>
            
         
        );
}

export default AddEmploye;

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
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
       // marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
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
        
      }
  });