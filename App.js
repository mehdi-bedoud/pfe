
import React, { useEffect } from 'react';
import { StyleSheet , ActivityIndicator ,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tabs from './screens/TabScreen'
import {DContent} from './screens/DrawerContent';
import { createStackNavigator } from '@react-navigation/stack';
import RootStackk from './screens/RootStackScreen';
import { set } from 'react-native-reanimated';
import {AuthContext} from './components/Context';
import ProfileScreen from './screens/ProfileScreen';
import SignUpScreen from './screens/SignUpScreen';
import ClientListScreen from './screens/ListeClient';
import EmployeListScreen from './screens/ListEmploye';
import AddEmploye from './screens/addEmploye';
import AddClient from './screens/addClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initialState} from './components/State';








const Drawer = createDrawerNavigator();

export default function App() {

  //--------------global state---------------------

const  loginReducer = (state ,action) => {
  switch (action.type){
      case 'retreive-token' : return ({...state , userToken : action.token});
      case 'login-request' : return ({ ...state , isLoading : true });
      case 'login-success' : return ({ ... state , isLoading : false  , userToken: action.token , userName : action.name});
      case 'login-fail' : return ({ ...state , isLoading : false , userToken : null});
      case 'register' : return ({ ... state , isLoading : false  , userToken: action.token , userName : action.name});
      case 'logout' : return ({...state , userToken : null , userName: null });
      case 'admin': return ({...state , admin : action.admin})
      default : return state;
      
  }
}

//   const [state , dispatch ] = React.useReducer(loginReducer,initialState);
  //-------------------------------------------
 
  //----------------------------------------------
  const [loginState , dispatch] = React.useReducer(loginReducer, initialState);
  const authContext = React.useMemo(() => ({
    signIn:async(userName , password ) => {
      let userToken ; 
      if (userName == 'mehdi' && password == 'bedoud'){
        userToken = 'hey';
        dispatch ({
          type : 'login-success',
          token : userToken,
          name: userName,
        })
       await AsyncStorage.setItem('userToken' , userToken);
      }
      else{
        alert('nom d\'utilisateur ou mot de passe incorrecte');
      }
      
    },
    signOut: async() => {
     dispatch({type : 'logout'})
     await AsyncStorage.removeItem('userToken');

    },
    signUp: () => {
   
    },
    admin : (bool)=> {
      dispatch({type : 'admin' , admin : bool })
    },
    adminn : loginState.admin,

   
  }));
  //--------------------useEffect-----------------

  useEffect(() => {
   setTimeout(async()=>{
     loginState.isLoading = false;
     let userToken = null;
     userToken = await AsyncStorage.getItem('userToken');
     dispatch({type : 'retreive-token' , token : userToken})
   },2000 )

  }, []);

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
       !loginState.userToken ? 
    <RootStackk/> 
    :
  <Drawer.Navigator drawerContent = { props => <DContent { ...props} admin = {loginState.admin} />}   >
      <Drawer.Screen   children = { props => <Tabs {...props} admin = {loginState.admin} />}name = "MainTab"  />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
      <Drawer.Screen name="ListClient" component={ClientListScreen} />
      <Drawer.Screen name="ListEmploye" component={EmployeListScreen} />
      <Drawer.Screen name="AddClient" component={AddClient} />
      <Drawer.Screen name="AddEmploye" component={AddEmploye} />
     
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

