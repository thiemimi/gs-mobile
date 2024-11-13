import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router'; 


const LoginScreen = () => {
  const router = useRouter();

  const handleLogin = () => {
  
    router.push('/(tabs)'); 
  };

  return (
    <View>
      <Text>Login</Text>
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
