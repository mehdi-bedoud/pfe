import { StyleSheet, View  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerItem , DrawerContentScrollView } from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/Ionicons'
import{ AuthContext } from '../components/Context';






export function DContent (props) {
  
  //console.log (' admin is '+props.admin);

  const {signOut , name , privilege , email} = React.useContext(AuthContext);
    const paperTheme = useTheme();
    const [gclient, setGclient] = useState(false);
    const [gemploye , setGemploye] = useState(false);
    const [gprod , setGprod] = useState(false);
 

    
    return (
        <View style = {{flex:1}}>
          <DrawerContentScrollView  {...props}>
            <View style = {styles.drawerContent}>
            <View style = {styles.userInfoSection}>
              <View style = {{flexDirection : 'row' , marginTop : 15 }}>
                  <Avatar.Image source={require('../assets/profile-user.png')}
                 size = {50}
                  />
                  <View style = {{marginLeft : 15 , flexDirection: 'column'}}>
                  <Title style = {styles.title}>{name}</Title>
                  <Caption style = {styles.caption}>
                   {email}
                  </Caption>
                  </View>
              </View>
              </View>
              <Drawer.Section style = {styles.drawerSection}>
              <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Acceuil"
                            onPress={() => {props.navigation.navigate('Acceuil')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                                
                            )}
                            label="Mon Compte"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                      
                        {
                          privilege == 'admin' ? 
                          <View >
                           <View style ={{flexDirection : 'row' , alignItems : 'center'}}>
                             
                           <DrawerItem style = {{flex : 2 , marginRight : 0 }}
                                     label="gestion des produits"
                            icon={({color, size}) => (
                                <Icon2 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                       
                            onPress={() => {setGprod(!gprod)}}
                            //onPress={() => {props.navigation.navigate('addComposant')}}
                        />
                        <Icon2 
                                name={!gprod ? "ios-chevron-down" : "ios-chevron-up" }
                                color='black'
                                size={20}
                             style = {{marginRight : 20}}
                                />
                           </View>
                         
                        

                       
                         {
                          gprod ?<>
                             <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="ios-add-sharp" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="ajouter Produit"
                            onPress={() => {props.navigation.navigate('addProduit')}}
                        />

                               <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="ios-add-sharp" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="ajouter Composant"
                
                            onPress={() => {props.navigation.navigate('addComposant')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="puzzle-remove-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Supprimer composant"
                            onPress={() => {props.navigation.navigate('deleteComposant')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="puzzle-remove" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Supprimer Produit"
                            onPress={() => {props.navigation.navigate('deleteProduit')}}
                        />
                   
                          </> :null
                        }
                   
                   <View style ={{flexDirection : 'row' , alignItems : 'center'}}>
                          <DrawerItem style = {{flex : 2 , marginRight : 0}}
                              icon={({color, size}) => (
                                  <Icon
                                    name="account-plus-outline" 
                                       color={color}
                                        size={size}
                                              />
                                            )}
                                          label="Gestion des clients"
                                    onPress={() => {setGclient(!gclient)}}
                                          />
                                            <Icon2 
                                              name={!gclient ? "ios-chevron-down" : "ios-chevron-up" }
                                              color='black'
                                              size={20}
                                              style = {{marginRight : 20}}

                                              />
                                          </View>
    
                        {
                          gclient ?<>
                             <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-plus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ajouter Client"
                            onPress={() => {props.navigation.navigate('AddClient')}}
                        />
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-multiple-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Liste des Clients"
                            onPress={() => {props.navigation.navigate('ListClient')}}
                        />
                          </> : null
                        }
                      <View style ={{flexDirection : 'row' , alignItems : 'center'}}>
                      <DrawerItem style = {{flex : 2 , marginRight : 0}}
                            icon={({color, size}) => (
                                <Icon
                                name="account-network" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Gestion de employés"
                            onPress={() => {setGemploye(!gemploye)}}
                        />
                           <Icon2 
                                              name={!gemploye ? "ios-chevron-down" : "ios-chevron-up" }
                                              color='black'
                                              size={20}
                                              style = {{marginRight : 20}}

                                              />
                      </View>
                        {
                          gemploye ? <>
                            <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-plus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ajouter Employé"
                            onPress={() => {props.navigation.navigate('AddEmploye')}}
                        />
                         <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-multiple-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Liste des Employés"
                            onPress={() => {props.navigation.navigate('ListEmploye')}}
                        />
                          </> : null
                        }
                      
                       
                          </View>
                         : null

                        } 



              </Drawer.Section>
         
            </View>
          </DrawerContentScrollView>
          <Drawer.Section style = {styles.bottomDrawerSection} >
          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="md-log-out-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Déconnecter"
                            onPress={() =>{signOut()} }
                        />
         
          </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      marginLeft : -5,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });






