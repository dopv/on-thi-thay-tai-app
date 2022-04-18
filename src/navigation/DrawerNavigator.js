import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from '../screen/auth/home/HomePage';
import { StackName } from './config';
import Notification from '../screen/auth/notifications/Notification';

const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
    <>
      <Drawer.Navigator initialRouteName={StackName.HOME}>
        <Drawer.Screen name={StackName.HOME} component={HomePage} options={{headerShown: false}} />
        <Drawer.Screen name={StackName.NOTIFICATION} component={Notification} options={{headerShown: false}} />
      </Drawer.Navigator>
    </>
  )
}