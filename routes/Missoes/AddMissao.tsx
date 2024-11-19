import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image, Button } from 'react-native';
import { firestore } from '@/components/FIrebase';

export default function AdicionarMissao({ navigation }: any) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const adicionarMissao = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    try {
      await firestore.collection('missoes').add({
        titulo,
        descricao,
        criadoEm: new Date(),
      });
      navigation.navigate('Missoes');
    } catch (error) {
      console.error("Erro ao adicionar missão: ", error);
      Alert.alert('Erro ao adicionar missão');
    }
  };

  return (
    <View style={styles.container}>
        <Image
            source={require("@/assets/images/background_missao.png")}
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
    </View>
        <TouchableOpacity onPress={adicionarMissao} style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Tabs')} style={styles.buttonBack}>
            <Text style={styles.buttonText}> Voltar </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
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
  Inputs:{
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
