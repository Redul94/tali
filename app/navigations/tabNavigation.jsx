import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home';
import Cashmemo from '../pages/cashmemo';
import Owed from '../pages/owed';
import Stock from '../pages/stock';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
  
    <Tab.Navigator >
        <Tab.Screen name='home' component={Home}
        options={{tabBarLabel: ({color})=>
        (
            <Text style={{color:color,fontSize:17,marginTop:-7}}>Home</Text>
        )
        }}/>
        <Tab.Screen name='memo' component={Cashmemo}/>
        <Tab.Screen name='owed' component={Owed}/>
        <Tab.Screen name='stock' component={Stock}/>
    </Tab.Navigator>
  )
}