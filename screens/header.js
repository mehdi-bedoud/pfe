import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';





const  Headerr = ()=>{
    return <Header
    leftComponent={ <Icon.Button name = "menu" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.openDrawer()}/>}
    containerStyle={{
        backgroundColor: '#009387',
        justifyContent: 'space-around',
      }}

     

  />
}
export default Headerr;