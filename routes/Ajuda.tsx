import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from 'react-native';

export default function Ajuda() {
  const [pergunta, setPergunta] = useState('');

  const enviarPergunta = () => {
    if (!pergunta) {
      Alert.alert('Por favor, preencha a sua pergunta.');
      return;
    }
    Alert.alert('Sua pergunta foi enviada!', 'Em breve, entraremos em contato.');
    setPergunta('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Perguntas Frequentes</Text>

      <View style={styles.faqContainer}>
        <View style={styles.faqItem}>
          <Text style={styles.question}>1. O que são as "missões de sustentabilidade" e como posso criar uma para mim?</Text>
          <Text style={styles.answer}>As metas de sustentabilidade são objetivos que você define para melhorar seu impacto ambiental. Elas podem incluir ações como reduzir o uso de plástico, aumentar a reciclagem, ou adotar práticas de consumo consciente. O aplicativo permite que você crie metas personalizadas, acompanhe seu progresso e ganhe recompensas por suas conquistas.</Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>2. Como recuperar minha senha?</Text>
          <Text style={styles.answer}>Caso tenha esquecido sua senha, clique em "Esqueci a senha" na tela de login e siga as instruções.</Text>
        </View>
        <View style={styles.faqItem}>
          <Text style={styles.question}>3. Como entrar em contato com o suporte?</Text>
          <Text style={styles.answer}>Você pode entrar em contato com o suporte através do nosso chat ou enviando um e-mail para suporte@email.com.</Text>
        </View>
      </View>

      <Text style={styles.subTitle}>Mande sua pergunta</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua pergunta aqui"
        value={pergunta}
        onChangeText={setPergunta}
      />

      <TouchableOpacity onPress={enviarPergunta} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Pergunta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
    color: '#649C59'
  },
  faqContainer: {
    marginBottom: 40,
  },
  faqItem: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  answer: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6F7D41',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
