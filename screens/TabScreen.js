import HomeScreen from './HomeScreen'
import TicketScr from './TicketCreateScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

import React from 'react';


const Tab = createMaterialBottomTabNavigator();

export default function MyTabs(props) {
  
  let admin = props.admin;
  return (
    <Tab.Navigator
      initialRouteName="Acceuil"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' , }}
    >
      <Tab.Screen
        name="Acceuil"
        children = { () => <HomeScreen {...props} admin = {admin} />}
        options={{
          tabBarLabel: 'Acceuil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Second"
        component={SecondScreen}
        
        options={{
          tabBarLabel: 'Panneau de configuration',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="admin-panel-settings" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Ticket"
        children = { () => <TicketScr {...props}  />}
        options={{
          tabBarLabel: 'Créer Ticket',
          tabBarIcon: ({ color }) => (
            <Icon2 name="create"  color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}