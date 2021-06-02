
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









const Drawer = createDrawerNavigator();

export default function App() {

//   const [isLoading , setIsLoading] = React.useState(true);
// const [userToken , setUserToken] = React.useState(null);

  //--------------global state---------------------
 const initialState =  {
    isLoading : true ,
    userToken : null , 
    userName : null , 

}
const  loginReducer = (state ,action) => {
  switch (action.type){
      case 'retreive-token' : return ({...state , userToken : action.token});
      case 'login-request' : return ({ ...state , isLoading : true });
      case 'login-success' : return ({ ... state , isLoading : false  , userToken: action.token , userName : action.name});
      case 'login-fail' : return ({ ...state , isLoading : false , userToken : null});
      case 'register' : return ({ ... state , isLoading : false  , userToken: action.token , userName : action.name});
      case 'logout' : return ({...state , userToken : null , userName: null });
      default : return state;
      
  }
}

//   const [state , dispatch ] = React.useReducer(loginReducer,initialState);
  //-------------------------------------------
 
  //----------------------------------------------
  const [loginState , dispatch] = React.useReducer(loginReducer, initialState)
  const authContext = React.useMemo(() => ({
    signIn:(userName , password ) => {
      let userToken ; 
      if (userName == 'mehdi' && password == 'bedoud'){
        userToken = 'hey';
        dispatch ({
          type : 'login-success',
          token : userToken,
          name: userName,
        })
      }
      else{
        alert('nom d\'utilisateur ou mot de passe incorrecte');
      }
      
    },
    signOut: () => {
     dispatch({type : 'logout'})
    },
    signUp: () => {
   
    },
  }));
  //--------------------useEffect-----------------

  useEffect(() => {
   setTimeout(()=>{
     loginState.isLoading = false;
     dispatch({type : 'retreive-token' , token : 'hello'})
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
  <Drawer.Navigator drawerContent = { props => <DContent { ...props}/>} >
      <Drawer.Screen name = "MainTab" component={Tabs}/>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="SignUpScreen" component={SignUpScreen} />
     
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
