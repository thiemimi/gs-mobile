import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { firestore } from '@/components/FIrebase';

export default function EditarMissao({ route, navigation }: any) {
  const { id } = route.params; // Pegando o ID da missão da navegação
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    const fetchMissao = async () => {
      try {
        const doc = await firestore.collection('missoes').doc(id).get();
        if (doc.exists) {
          setTitulo(doc.data()?.titulo);
          setDescricao(doc.data()?.descricao);
        }
      } catch (error) {
        console.error("Erro ao carregar missão: ", error);
      }
    };

    fetchMissao();
  }, [id]);

  const editarMissao = async () => {
    if (!titulo || !descricao) {
      Alert.alert('Preencha todos os campos');
      return;
    }

    try {
      await firestore.collection('missoes').doc(id).update({
        titulo,
        descricao,
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
      <Text style={styles.title}>Editar Missão</Text>

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

      <TouchableOpacity onPress={editarMissao} style={styles.button}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
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
    backgroundColor: '#C5E8AC',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    marginTop: 50,
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
