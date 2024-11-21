import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, ScrollView } from 'react-native';

export default function Feedback() {
  const [feedback, setFeedback] = useState('');

  const enviarFeedback = () => {
    if (!feedback) {
      Alert.alert('Por favor, forneça seu feedback antes de enviar.');
      return;
    }
    Alert.alert('Obrigado pelo seu feedback!', 'Sua opinião é muito importante para nós.');
    setFeedback(''); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Envie seu Feedback</Text>

      <Text style={styles.description}>Nós adoramos ouvir a opinião de nossos usuários! Por favor, compartilhe sua experiência com o aplicativo ou sugestões para melhorá-lo.</Text>

      
      <TextInput
        style={styles.input}
        placeholder="Digite aqui o seu feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={6}
      />

      <TouchableOpacity onPress={enviarFeedback} style={styles.button}>
        <Text style={styles.buttonText}>Enviar Feedback</Text>
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
    marginBottom: 20,
    marginTop: 100,
    color: '#649C59'
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
    textAlignVertical: 'top', 
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
