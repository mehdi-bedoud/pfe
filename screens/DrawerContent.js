import { StyleSheet, View  } from 'react-native';
import React, { useState } from 'react';
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
  const user = {
    admin : true
  }
  const {signOut} = React.useContext(AuthContext);
    const paperTheme = useTheme();
    //const { toggleTheme } = React.useContext(AuthContext);
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style = {{flex:1}}>
          <DrawerContentScrollView  {...props}>
            <View style = {styles.drawerContent}>
            <View style = {styles.userInfoSection}>
              <View style = {{flexDirection : 'row' , marginTop : 15 }}>
                  <Avatar.Image source = {{
                      uri :'https://scontent.fqsf1-1.fna.fbcdn.net/v/t1.6435-9/105302996_3000515003407569_4753253622044843753_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeG6vva93D6pMvScKuE9uDAJWma1mucI77daZrWa5wjvtxi9Ja1j2rbMbMHdRbovlAzOMaiYKesuINgQ4GpfLbhW&_nc_ohc=2FzdIJ8HA40AX-njO7F&_nc_ht=scontent.fqsf1-1.fna&oh=f4a8beab5505de281f562fc449faf958&oe=60D2BA15' ,
                 }}
                 size = {50}
                  />
                  <View style = {{marginLeft : 15 , flexDirection: 'column'}}>
                  <Title style = {styles.title}>Bedoud mahdi</Title>
                  <Caption style = {styles.caption}>
                   @mahdi.901
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
                          <DrawerItem 
                            icon={({color, size}) => (
                                <Icon2 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Paramètres"
                            onPress={() => {props.navigation.navigate('Acceuil')}}
                        />
                        {
                          user.admin ? 
                          <View>
                              <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-plus-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Ajouter Client"
                            onPress={() => {props.navigation.navigate('SignUpScreen')}}
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
                            onPress={() => {props.navigation.navigate('SignUpScreen')}}
                        />
                          </View>
                         : null

                        } 



              </Drawer.Section>
              <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Thème sombre</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
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