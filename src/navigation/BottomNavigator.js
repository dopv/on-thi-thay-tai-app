import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/auth/home/HomePage';
import Notification from '../screen/auth/notifications/Notification';
import { StackName } from './config';
const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name={StackName.HOME} component={HomePage} options={{headerShown: false}} />
        <Tab.Screen name={StackName.NOTIFICATION} component={Notification} options={{headerShown: false}} />
      </Tab.Navigator>
    </>
  )
}