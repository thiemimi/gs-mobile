import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image } from 'react-native';
import { firestore } from '@/components/FIrebase';

export default function EditarMissao({ route, navigation }: any) {
  const { id } = route.params;
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [pontos, setPontos] = useState('');

  useEffect(() => {
    const fetchMissao = async () => {
      try {
        const doc = await firestore.collection('missoes').doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          setTitulo(data?.titulo || '');
          setDescricao(data?.descricao || '');
          setPontos(data?.pontos?.toString() || ''); 
        }
      } catch (error) {
        console.error("Erro ao carregar missão: ", error);
      }
    };

    fetchMissao();
  }, [id]);

  const editarMissao = async () => {
    if (!titulo || !descricao || !pontos) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    if (isNaN(Number(pontos))) {
      Alert.alert('Os pontos devem ser um número');
      return;
    }

    try {
      await firestore.collection('missoes').doc(id).update({
        titulo,
        descricao,
        pontos: Number(pontos), 
        atualizadoEm: new Date(),
      });
      navigation.goBack();
    } catch (error) {
      console.error("Erro ao editar missão: ", error);
      Alert.alert('Erro ao editar missão');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/background_login.png")}
        style={styles.backgroundContainer}
      />
      <Text style={styles.title}>Editar Missão</Text>
      <View style={styles.inputs}>
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
      <TouchableOpacity onPress={editarMissao} style={styles.button}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
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
    marginBottom: 40,
    marginTop: 50,
  },
  inputs: {
    width: '80%',
    padding: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 25,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6F7D41',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonBack: {
    backgroundColor: '#bec99a',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 65,
    borderRadius: 35,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
