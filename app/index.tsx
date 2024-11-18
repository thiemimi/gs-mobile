
import Login from '@/routes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Logon from '@/routes/Logon';
import TabLayout from '@/app/(tabs)/_layout';
import { NavigationContainer } from '@react-navigation/native';

export default function Index() {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}} >
        <Stack.Screen
            name='Login'
            component={Login}
        />
        <Stack.Screen
            name='Logon'
            component={Logon}
        />
        <Stack.Screen
            name='Tabs'
            component={TabLayout}
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
 
}
