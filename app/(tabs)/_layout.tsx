import React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './profile';
import Missoes from './missoes';
import Home from './home';
import Recompensas from './recompensas';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName='home'
      screenOptions={{
        tabBarActiveTintColor: '#414A22', 
        tabBarInactiveTintColor: '#F1FEE7', 
        tabBarStyle: {
          backgroundColor: '#A5B574',
          borderTopLeftRadius: 15, 
          borderTopRightRadius: 15, 
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="missoes"
        component={Missoes}
        options={{
          title: 'Missões',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'checkbox' : 'checkbox-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="recompensas"
        component={Recompensas}
        options={{
          title: 'Recompensas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trophy': 'trophy-outline'} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
