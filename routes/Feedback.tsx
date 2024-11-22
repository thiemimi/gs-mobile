import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, ScrollView, View } from 'react-native';

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
      <View style={styles.formContainer}>
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
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#C5E8AC',
  },
  formContainer: {
    backgroundColor: '#fff', 
    borderRadius: 12,
    paddingHorizontal: 25,
    paddingVertical: 40,
    margin: 20,
    marginTop: 90,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#2A5D34',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#777',
    marginBottom: 25,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 150,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingLeft: 15,
    paddingTop: 12,
    backgroundColor: '#fff',
    textAlignVertical: 'top', 
    fontSize: 16,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6D8A2E',
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
