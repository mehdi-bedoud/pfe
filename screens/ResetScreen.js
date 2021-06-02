import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    StyleSheet ,
   
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';



 export default function ResetScreen  ({navigation}){

    //-------------------------------
    const [email,setEmail] = useState('');
    const reset = (email)=>{

    }
    //-------------------------------
    return (
        <View style={styles.container}>
      
      <View style={styles.header}>
          <Text style={styles.text_header}>Récupérer votre mot de passe ! </Text>
      </View>
      <View style ={styles.footer} >
          <Text>Email</Text>
          <View style = {styles.action}>
          <FontAwesome 
                  name="user-o"
                  size={20}
              />
              <TextInput 
                 placeholder = 'Entrer votre mail' 
                 style = {styles.textInput} 
                 onChangeText = {(val)=>setEmail(val) }
                

              ></TextInput>
               <Animatable.View
                  animation="bounceIn"
              >
                  <Feather 
                      name="check-circle"
                      color="green"
                      size={20}
                  />
              </Animatable.View>
          </View>
          <TouchableOpacity style= {styles.appButtonContainer } onPress = {() => navigation.navigate('resetScreen')} >
                    <Text style = {styles.appButtonText }>Reset Password </Text>
                </TouchableOpacity>
          </View>
          </View>

    )
};

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
        flex: 2,
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
    
  });