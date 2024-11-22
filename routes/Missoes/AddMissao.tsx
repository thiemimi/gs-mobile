import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { firestore } from '@/components/FIrebase';

export default function AdicionarMissao({ navigation }: any) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pontos, setPontos] = useState('');

  const adicionarMissao = async () => {
    if (!titulo || !descricao || !pontos) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    if (isNaN(Number(pontos))) {
      Alert.alert('Os pontos devem ser um número');
      return;
    }

    try {
      await firestore.collection('missoes').add({
        titulo,
        descricao,
        pontos: Number(pontos), 
        criadoEm: new Date(),
      });
      navigation.navigate('Tabs', { screen: 'Missoes' });
    } catch (error) {
      console.error("Erro ao adicionar missão: ", error);
      Alert.alert('Erro ao adicionar missão');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/background_login.png")}
        style={styles.backgroundContainer}
      />

      <Text style={styles.title}>Adicionar Missão</Text>
      <View style={styles.Inputs}>
        <TextInput
          style={styles.input}
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
        />
        <TextInput
          style={styles.input}
          placeholder="Descrição"
          value={descricao}
          onChangeText={setDescricao}
        />
        <TextInput
          style={styles.input}
          placeholder="Pontos"
          value={pontos}
          onChangeText={setPontos}
          keyboardType="numeric" 
        />
      </View>
      <TouchableOpacity onPress={adicionarMissao} style={styles.button}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'stretch',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 50,
  },
  Inputs: {
    width: '80%',
    padding: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6F7D41',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 35,
  },
  buttonBack: {
    backgroundColor: '#bec99a',
    marginTop: 20,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
