import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity, Alert, ImageBackground } from 'react-native';
import { auth } from '@/components/FIrebase'; 

export default function EditProfile({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('********'); 

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setEmail(user.email!);
      setUsername(user.displayName || ''); 
    }
  }, []);

  async function handleUpdateProfile() {
    const user = auth.currentUser;
    if (user) {
      try {
        if (username !== user.displayName) {
          await user.updateProfile({ displayName: username });
        }

        Alert.alert('Perfil atualizado com sucesso!');
        navigation.goBack(); 

      } catch (error) {
        console.error(error);
        Alert.alert('Erro', 'Não foi possível atualizar o perfil. Tente novamente.');
      }
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/background_login.png')}
        style={styles.backgroundContainer}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Editar Perfil</Text>
          <Text style={styles.label}>Nome de Usuário</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome de usuário"
            value={username}
            onChangeText={setUsername}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            editable={false}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            value={password}
            editable={false}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
            <Text style={styles.buttonText}>Atualizar Perfil</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1FEE7',
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center', 
    alignItems: 'center',
    width: '100%', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  form: {
    width: '90%',
    height: '70%',
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  input: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#6F7D41',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#F1FEE7',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
