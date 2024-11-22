import Login from '@/routes/Login';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Logon from '@/routes/Logon';
import TabLayout from '@/app/(tabs)/_layout';
import { NavigationContainer } from '@react-navigation/native';
import EditarMissao from '@/routes/Missoes/EditMissao';
import AdicionarMissao from '@/routes/Missoes/AddMissao';
import Dicas from '@/routes/Dicas';
import Leaderboard from '@/routes/Leaderboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ajuda from '@/routes/Ajuda';
import Feedback from '@/routes/Feedback';
import ImpactoAmbiental from '@/routes/ImpactoAmbiental';
import TelaInicial from '@/routes/TelaInicial';
import EditProfile from '@/routes/EditarPerfil';

export default function Index() {

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  function MoreTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: 'none' }, 
        }}
      >
        <Tab.Screen
          name="Dicas" 
          component={Dicas}
          options={{headerShown: false}}
          
        />
        <Tab.Screen
          name="ImpactoAmbiental" 
          component={ImpactoAmbiental}
          options={{headerShown: false}}
          
        />

        <Tab.Screen
          name="Leaderboard" 
          component={Leaderboard}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    );
  }

  function MoreProfile(){
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: 'none' }, 
        }}
        >
          <Tab.Screen
            name="EditarPerfil" 
            component={EditProfile}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Ajuda" 
            component={Ajuda}
            options={{headerShown: false}} 
          />
          <Tab.Screen
            name="Feedback" 
            component={Feedback}
            options={{headerShown: false}}
          /> 
        </Tab.Navigator>
    );
  }

  
  function MoreMissoes(){
    return(
        <Tab.Navigator
        screenOptions={{
          tabBarStyle: { display: 'none' }, 
        }}
        >
            <Tab.Screen
            name="AddMissao" 
            component={AdicionarMissao}
            options={{headerShown: false}}
            
            />
            <Tab.Screen
            name="EditMissao" 
            component={EditarMissao}
            options={{headerShown: false}}
            />
        </Tab.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Logon"
          component={Logon}
        />
        <Stack.Screen
          name="Tabs"
          component={TabLayout}
        />
         
        <Stack.Screen
          name="MoreMissoes"
          component={MoreMissoes}
          options={{
            headerShown: true, 
            title: 'Voltar',    
          }}
        />
        
        <Stack.Screen
          name="More"
          component={MoreTabs}
          options={{
            headerShown: true, 
            title: 'Voltar',    
          }}
        />
          <Stack.Screen
          name="MoreProfile"
          component={MoreProfile}
          options={{
            headerShown: true, 
            title: 'Voltar',    
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
