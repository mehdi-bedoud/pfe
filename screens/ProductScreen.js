import React ,  {useState , useEffect} from 'react';
import {View , Text , StyleSheet , ScrollView , TouchableOpacity , FlatList} from 'react-native';
import administrateur from '../classes/administrateur';
import Icon from 'react-native-vector-icons/Ionicons';
import ComposantScreen from './ComposantScreen';

var composantTitle;
const ProductScreen  = (props) =>  {
  const [list , setList] = useState();

  const setComposantTitle = (title)=> {
    composantTitle = title;
    return
  }

  useEffect(async() => {
      setList( await administrateur.getComposants(props.ProductTitle))
}, []);
  console.log('prod is ');
  console.log(props);
    return (
        <>
        <Text style = {styles.title}> Les Composants : </Text>
     <ScrollView style = {styles.container}>
     <View >
    <FlatList   keyExtractor = { e => e.name} data = {list} renderItem = {({item}) =>
    <View style = {styles.list}>
      <View style = {styles.listRow}>
         <TouchableOpacity onPress = {()=> {
           setComposantTitle(item.title)
           props.navigation.navigate("ComposantScreen",{composantTitle : composantTitle , 
            productTitle : props.ProductTitle }) }}>
         <Text style = {styles.ticketTitle}> {item.title} </Text> 
         </TouchableOpacity>
      </View>
    
    </View>

      }/>
</View>
     </ScrollView>

        </>

    );

}
export default ProductScreen;



const styles = StyleSheet.create({
    title : {
      fontSize : 30,
      fontWeight : 'bold',
      margin: 10,
    },
    
    list : {
     
      padding : 20,
      margin : 20,
      borderWidth : 2,
      
      borderRadius: 15,
      borderColor : '#009688',
    },
  
    listItem: {
      marginTop : 5 , 
      padding: 10,
      borderColor : 'gray' , 
      borderRadius : 15,
      borderWidth : 1,
      width : '100%',
  
      
    },
  
    ticketTitle :{
      fontSize : 30,
      fontWeight : 'bold',
       paddingTop : 5 ,
     
      },
  
      listRow : { 
        width : '100%'
    },
    container : {
      flexDirection : 'column',
    },
    container2 : {
      flexDirection : 'row',
    }
  });


  // const productStack = createStackNavigator();

  //---------------------------------------------------------
//   export default function stackProductScreen (props){
//    return (
//     <productStack.Navigator>
//       <productStack.Screen name = 'ProductScreen' children = { () => <ProductScreen {...props  }    />} options = {
//    {
//      headerStyle : {
//        backgroundColor : '#009387',
       
//      },
//      headerTintColor : '#fff',
//      headerTitleStyle:{
//        fontWeight : 'bold',
//      },
//      headerLeft : () =>(  <Icon.Button name = "menu" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.openDrawer()}  />)

//    }
//  }  />
  
//    <productStack.Screen name = 'ComposantScreen' children = { () => <ComposantScreen {...props  } composantTitle =  {composantTitle}   />} options = {
//    {
//      headerStyle : {
//        backgroundColor : '#009387',
       
//      },
//      headerTintColor : '#fff',
//      headerTitleStyle:{
//        fontWeight : 'bold',
//      },
//      headerLeft : () =>(  <Icon.Button name = "menu" backgroundColor = '#009387' size = {25} onPress = { () => props.navigation.openDrawer()}  />)

//    }
//  }  />

// </productStack.Navigator>
//    )
// }