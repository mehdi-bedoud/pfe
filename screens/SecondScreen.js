
import { StyleSheet, Text, View , Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react';
 function Second({navigation}){
 
    return  <View style={styles.container}>
    <Text>Hi you're in second :)</Text>
    <Button onPress = {() => navigation.navigate("Acceuil") } title = 'click to go Acceuil' >Go to Acceuil</Button> 
    {/**navigation.navigate || navigation.goBack  ||  navigation.popToTop   || navigation.push */}
  </View>
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const secondStack = createStackNavigator();
  export default function stackSecondScreen ({navigation}){
    return(
      <secondStack.Navigator screenOptions = {
        {
          headerStyle : {
            backgroundColor : '#009387',
          },
  
          headerTintColor : '#fff',
          headerTitleStyle:{
            fontWeight : 'bold',
          },
  
          headerLeft : () =>(  <Icon.Button name = "menu" backgroundColor = '#009387' size = {25} onPress = { () => navigation.openDrawer()}  />)
  
        }
        
      }>
        <secondStack.Screen name = 'Second' component = {Second}  />
    </secondStack.Navigator>
    )
  }
