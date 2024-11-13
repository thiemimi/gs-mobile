// app/cadastro.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

const CadastroScreen = () => {
  const router = useRouter();

  return (
    <View>
      <Text>Cadastro</Text>
      <Button title="Voltar para Login" onPress={() => router.back()} />
    </View>
  );
};

export default CadastroScreen;
