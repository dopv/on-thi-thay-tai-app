import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackName } from './config';
import DrawerNavigator from './DrawerNavigator';
import BottomNavigator from './BottomNavigator';
const Stack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name={StackName.MAIN_DRAWER} component={DrawerNavigator} /> */}
        <Stack.Screen name={StackName.MAIN_BOTTOM_TAB} component={BottomNavigator} />
    </Stack.Navigator>
)
}