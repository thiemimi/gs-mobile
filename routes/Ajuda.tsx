import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';

export default function Ajuda() {
  const [pergunta, setPergunta] = useState('');
  const [expandedIndex, setExpandedIndex] = useState(null);  
  const perguntas = [
    { pergunta: 'O que são as "missões de sustentabilidade" e como posso criar uma para mim?', resposta: 'As metas de sustentabilidade são objetivos que você define para melhorar seu impacto ambiental. Elas podem incluir ações como reduzir o uso de plástico, aumentar a reciclagem, ou adotar práticas de consumo consciente. O aplicativo permite que você crie metas personalizadas, acompanhe seu progresso e ganhe recompensas por suas conquistas.' },
    { pergunta: 'Como recuperar minha senha?', resposta: 'Caso tenha esquecido sua senha, clique em "Esqueci a senha" na tela de login e siga as instruções.' },
    { pergunta: 'Como entrar em contato com o suporte?', resposta: 'Você pode entrar em contato com o suporte através do nosso chat ou enviando um e-mail para suporte@email.com.' },
  ];

  const handleAccordionPress = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const enviarPergunta = () => {
    if (!pergunta) {
      Alert.alert('Por favor, preencha a sua pergunta.');
      return;
    }
    Alert.alert('Sua pergunta foi enviada!', 'Em breve, entraremos em contato.');
    setPergunta('');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/background_login.png')}
      style={styles.backgroundContainer}
    >
      <View style={styles.helpContainer}>
        <Text style={styles.title}>Perguntas Frequentes</Text>

        <View style={styles.faqContainer}>
          {perguntas.map((item, index) => (
            <View key={index} style={styles.faqItem}>
              <TouchableOpacity onPress={() => handleAccordionPress(index)} style={styles.accordionHeader}>
                <Text style={styles.question}>{item.pergunta}</Text>
                <Text style={styles.accordionArrow}>{expandedIndex === index ? '▲' : '▼'}</Text>
              </TouchableOpacity>

              {expandedIndex === index && (
                <View style={styles.accordionAnswer}>
                  <Text style={styles.answer}>{item.resposta}</Text>
                </View>
              )}
            </View>
          ))}
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
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  helpContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 15,
    padding: 35,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#649C59',
  },
  faqContainer: {
    marginBottom: 40,
  },
  faqItem: {
    marginBottom: 15,
  },
  accordionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  accordionArrow: {
    fontSize: 18,
    color: '#649C59',
  },
  accordionAnswer: {
    paddingVertical: 10,
    paddingLeft: 10,
  },
  answer: {
    fontSize: 16,
    color: '#555',
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
