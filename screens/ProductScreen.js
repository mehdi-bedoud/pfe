import React ,  {useState , useEffect} from 'react';
import {View , Text , StyleSheet  , TouchableOpacity , TextInput, FlatList} from 'react-native';
import administrateur from '../classes/administrateur';
import Feather from 'react-native-vector-icons/Feather';



const ProductScreen  = (props) =>  {
  var composantTitle;
  const [list , setList] = useState();
  const [value , setValue] = useState();
  const [search , setSearch] = useState(false);
  const [filteredList , setFilteredList] = useState();
  const remplirValue = (val)=>{
    setValue(val)
   
  }

  const setComposantTitle = (title)=> {
    composantTitle = title;
  }
  const getComposant = async()=>setList( await administrateur.getComposants(props.ProductTitle))

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      getComposant();
    });
   
}, [props.navigation]);

    return (
        <>
          <View style = {styles.action}>
     <TouchableOpacity onPress = {()=>{
       setFilteredList(list.filter(e =>  e.title.includes(value)))
       setSearch(true)
     }}>
     <Feather 
                    name="search"
                    size={20}
                    color = '#707070'
                />
     </TouchableOpacity>
                <TextInput 
                   placeholder = 'chercher'
                 
                   style = {styles.textInput} 
                   onChangeText = {(val)=>{
                    remplirValue(val) 
                   }}

                  

                ></TextInput>
                 <TouchableOpacity onPress = {()=>{
                   setSearch(false)
                 }}>
                    <Feather 
                        name='x'
                        color='#b8b8b8'
                        size={20}
                       
                        
                    />
         
                 </TouchableOpacity>
            </View>
       {
         !search ?
          <>
           {/* <Text style = {styles.title}> Les Composants : </Text> */}
   
   <View >
  <FlatList   keyExtractor = { e => e._id} data = {list} renderItem = {({item}) =>
  <View style = {styles.list}>
    <View style = {styles.listRow}>
       <TouchableOpacity onPress = {()=> {
         setComposantTitle(item.title)
         props.navigation.navigate("Les Tickets",{composantTitle : composantTitle , 
          productTitle : props.ProductTitle }) }}>
       <Text style = {styles.ticketTitle}> {item.title} </Text> 
       </TouchableOpacity>
    </View>
  
  </View>

    }/>
</View>
         </> : 
         <>
          {/* <Text style = {styles.title}> Les Composants : </Text> */}
   
   <View >
  <FlatList   keyExtractor = { e => e._id} data = {filteredList} renderItem = {({item}) =>
  <View style = {styles.list}>
    <View style = {styles.listRow}>
       <TouchableOpacity onPress = {()=> {
         setComposantTitle(item.title)
         props.navigation.navigate("Les Tickets",{composantTitle : composantTitle , 
          productTitle : props.ProductTitle }) }}>
       <Text style = {styles.ticketTitle}> {item.title} </Text> 
       </TouchableOpacity>
    </View>
  
  </View>

    }/>
</View>
         </>
       }


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
    },
    action: {
      flexDirection: 'row',
      marginTop: 13,
      borderWidth: 1,
      borderColor: '#3D3D3D',
      borderRadius : 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      alignItems : 'center',
      alignSelf : 'center',
      width : '80%'
  },
  textInput: {
    flex: 1,
   // marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
},
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