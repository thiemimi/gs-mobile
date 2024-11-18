
import Login from '@/routes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Logon from '@/routes/Logon';
import LandingPage from '@/routes/LandingPage';

export default function Index() {

  const Stack = createStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
      />
      <Stack.Screen
        name='Logon'
        component={Logon}
      />
      <Stack.Screen
        name='Landing'
        component={LandingPage}
      />
    </Stack.Navigator>
  )
 
}
