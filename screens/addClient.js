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
import client from '../classes/client';


//import { AuthContext } from '../components/context';

//import Users from '../model/users';

const AddClient = ({navigation}) => {

    //--------------------------
    const [visible , setVisible] = useState(true);
    const [eyeName,setEyeName] = useState('eye-off');
    const [eyeColor,setEyeColor] = useState('gray')
    const isVisible = () => {
        setVisible(!visible)
        switch (eyeName){
            case 'eye' : setEyeName('eye-off');break;
            case 'eye-off' : setEyeName('eye');break;
        }
        switch (eyeColor){
            case 'gray' : setEyeColor('green');break;
            case 'green' : setEyeColor('gray');break;
        }
    }
   
    //----------------------------------------
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        //isValidUser: true,
        //isValidPassword: true,
    });
    //--------------------------------------------------
    const textInputChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                email : val ,
                check_textInputChange : true,

            })

        }
        else {
            setData({
                ...data,
                check_textInputChange : false,

            })

        }
    }
    // password 
    const passwordChange = (val) => {
        if(val.length != 0){
            setData({
                ...data,
                password : val ,

            })

        }
        else {
            setData({
                ...data,
                check_textInputChange : false,

            })

        }
    }
//------------------------------------------------

//------------------------------------------------

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Ajouter Un Client</Text>
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
                   onChangeText = {(val)=>textInputChange(val) }
                  

                ></TextInput>
                 <Animatable.View
                    animation="bounceIn"
                >
                    {data.check_textInputChange ?
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                    :
                    null}
                </Animatable.View>
            </View>
       {/* mot de passe  */}
            <Text style ={{marginTop : 35}} >Mot de passe</Text>

            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Entrer votre mot de passe' 
                   secureTextEntry = {visible}
                   style = {styles.textInput} 
                   onChangeText = {(val)=>passwordChange(val) }
                  

                ></TextInput>
                 <TouchableOpacity onPress = {isVisible}>
                 <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name={eyeName}
                        color={eyeColor}
                        size={20}
                       
                        
                    />
                </Animatable.View>
                 </TouchableOpacity>
            </View>
            <Text style = {{marginTop : 35}}>Confirmer le mot de passe</Text>
            <View style = {styles.action}>
            <Feather 
                    name="lock"
                    size={20}
                />
                <TextInput 
                   placeholder = 'Conformer le mot de passe' 
                   secureTextEntry = {visible}
                   style = {styles.textInput} 
                   onChangeText = {(val)=>passwordChange(val) }
                  

                ></TextInput>
                 <TouchableOpacity onPress = {isVisible}>
                 <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name={eyeName}
                        color={eyeColor}
                        size={20}
                       
                        
                    />
                </Animatable.View>
                 </TouchableOpacity>
            </View>
            <View style = {styles.button}>
                <TouchableOpacity style= {styles.appButtonContainer}  >
                    <Text style = {styles.appButtonText }>Ajouter un Client</Text>
                </TouchableOpacity>
            </View >
        </View>
        </View>
        
     
    );
}

export default AddClient;

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