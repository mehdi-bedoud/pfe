import HomeScreen from './HomeScreen'
import SecondScreen from './SecondScreen'
import TicketScr from './TicketCreateScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Acceuil"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen
        name="Acceuil"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Acceuil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Second"
        component={SecondScreen}
        options={{
          tabBarLabel: 'Panneau de configuration',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="admin-panel-settings" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScr}
        options={{
          tabBarLabel: 'Déclarer Problème',
          tabBarIcon: ({ color }) => (
            <Icon name="exclamation-circle"  color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}