
import Login from '@/routes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Logon from '@/routes/Logon';
import TabLayout from '@/app/(tabs)/_layout';
import { NavigationContainer } from '@react-navigation/native';
import EditarMissao from '@/routes/Missoes/EditMissao';
import AdicionarMissao from '@/routes/Missoes/AddMissao';
import Missoes from './(tabs)/missoes';

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
        <Stack.Screen 
            name="AdicionarMissao"  
            component={AdicionarMissao} 
        />
        <Stack.Screen 
            name="EditarMissao" 
            component={EditarMissao} 
        />
        </Stack.Navigator>
    </NavigationContainer>
  )
 
}
