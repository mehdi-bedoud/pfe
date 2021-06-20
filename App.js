import React, { useEffect } from 'react';
import { StyleSheet , ActivityIndicator ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './screens/TabScreen'
import {DContent} from './screens/DrawerContent';
import RootStackk from './screens/RootStackScreen';
//import { set } from 'react-native-reanimated';
import {AuthContext} from './components/Context';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './screens/SignUpScreen';
import ClientListScreen from './screens/ListeClient';
import EmployeListScreen from './screens/ListEmploye';
import AddEmploye from './screens/addEmploye';
import AddClient from './screens/addClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initialState} from './components/State';
import User from './classes/User';
import administrateur from './classes/administrateur';
import client from './classes/client';
import employe from './classes/employe';
import AddComposant from './screens/addComposantScreen';
import AddProduit from './screens/addProduitScreen';








const Drawer = createDrawerNavigator();
var admin = new administrateur();
var clientt = new client();
var employee = new employe();
var userr = new User();  // pour appeler les fcts  
export default function App() {

  //--------------global state---------------------

const  loginReducer = (state ,action) => {
  switch (action.type){
      case 'retreive-token' : return ({...state , name : action.name ,email: action.email , privilege: action.privilege, isLoading : false});
      case 'login-request' : return ({ ...state , isLoading : true });
      case 'login-fail' : return ({ ...state , isLoading : false });
      case 'login-success' : return ({ ... state , isLoading : false   , name : action.name ,privilege : action.privilege , _id : action._id});
      case 'login-fail' : return ({ ...state , isLoading : false , name : null});
      case 'register' : return ({ ... state , isLoading : false  , name : action.name});
      case 'logout' : return ({...state  , name: null , privilege : null , email : null });
      case 'admin': return ({...state , privilege : action.admin});
      default : return state;
      
  }
}

//   const [state , dispatch ] = React.useReducer(loginReducer,initialState);
  //-------------------------------------------
 
  //----------------------------------------------

  const [loginState , dispatch] = React.useReducer(loginReducer, initialState);
  const authContext = React.useMemo(() => ({
    signIn:async(email , password ) => {
      dispatch ({type : 'login-request'});
        userr =  await User.Login(email,password);
      if (userr){
        console.log('user is ');
        console.log(userr);
        dispatch ({
          type : 'login-success',
          name: userr.name,
          privilege : userr.privilege,
          email : userr.email
        })
        switch(userr.privilege){
          case 'admin' : admin = userr ; 
          case 'client' : clientt = userr;
          case 'employe' : employee = userr ; 
              }
       await AsyncStorage.setItem('name' , userr.name);
       await AsyncStorage.setItem('email' , userr.email);
       await AsyncStorage.setItem('privilege' , userr.privilege);
      }
      else{
        dispatch ({type : 'login-fail'})
        setTimeout(()=> alert('nom d\'utilisateur ou mot de passe incorrecte'), 500);
      }
      
    },
    signOut: async() => {
      dispatch({type : 'logout'})
      await User.Logout();
      loginState.name = null;
     
   
    },
    signUp: () => {
      if (userr.privilege == 'admin')  {
        
      }
   
    },
  


    privilege : loginState.privilege,
    name : loginState.name,
    email:loginState.email,

   
  }));
  //--------------------useEffect-----------------

  useEffect(() => {
   setTimeout(async()=>{
     loginState.isLoading = false;
     var name;var  email; var  privilege ; 
     try{
      name = await AsyncStorage.getItem('name');
      email = await AsyncStorage.getItem('email');
      privilege = await AsyncStorage.getItem('privilege');
      dispatch({type : 'retreive-token' , name , email , privilege   })
     }catch{
      dispatch ({type : 'login-fail'})
     }
   },1200 )

  }, [loginState.name]);

//----------------------------------------------------

if( loginState.isLoading ) {
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center' }}>
      <ActivityIndicator size = 'large' color = '#009387' />
    </View>
  );
}
  return (
   <AuthContext.Provider value = {authContext}>
    
      <NavigationContainer>
      {
       !loginState.name ?  <RootStackk/>  :
<Drawer.Navigator drawerContent = { props => <DContent { ...props} privilege = {loginState.privilege} />}    >
      <Drawer.Screen   children = { props => <Tabs {...props} privilege = {loginState.privilege} />}name = "MainTab"  />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="ListClient" component={ClientListScreen} />
      <Drawer.Screen name="ListEmploye" component={EmployeListScreen} />
      <Drawer.Screen name="AddClient" component={AddClient} />
      <Drawer.Screen name="AddEmploye" component={AddEmploye} />
      <Drawer.Screen name="addComposant" component={AddComposant} />
      <Drawer.Screen name="addProduit" component={AddProduit} />
     
    </Drawer.Navigator> 
    }
  </NavigationContainer>
   </AuthContext.Provider> 
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

