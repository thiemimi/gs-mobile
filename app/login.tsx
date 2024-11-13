import React from 'react';
import { View, Text, Button } from 'react-native';
import { Redirect } from 'expo-router'; 


const LoginScreen = () => {
  return <Redirect href={"/(tabs)/home"}/>
  
};

export default LoginScreen;
