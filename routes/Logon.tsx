
import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { auth } from '@/components/FIrebase';
import { router, useRouter } from 'expo-router';
import { User } from '@/models/User.interface';

export default function Logon({navigation}: any) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [user, setUser] = useState<User>();
 
  useEffect(() => {
    if(user?.uid){
      navigation.navigate('Tabs')
    }
  })

  async function cadastrar() {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        setUser(response.user)
        navigation.navigate('Landing')
      })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("@/assets/images/background_login.png")}
        style={styles.backgroundImage}
      />

      <View style={styles.whiteContainer}>
        <Text style={styles.titleText}>Cadastro</Text>
        <View style={styles.containerForm}>
          
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />

        

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry 
          />
          
          <TouchableOpacity style={styles.cadastrarButton} onPress={()=> cadastrar()}>
            <Text style={styles.cadastrarButtonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
            <Text style={styles.loginButton}>Já possui uma conta? Faça login!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#C5E8AC',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
  },
  whiteContainer: {
    width: '100%',
    height: '90%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 70,
    paddingTop: 40,
  },
  containerForm: {
    width: '70%',
    marginTop: 105,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#C5E8AC',
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  passwordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  passwordText: {
    color: '#414A22',
    textDecorationLine: 'underline',
  },
  cadastrarButton: {
    backgroundColor: '#A5B574',
    padding: 10,
    width: '50%',
    marginTop: 20,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  cadastrarButtonText: {
    color: '#F1FEE7',
    fontSize: 18,
    fontWeight: 'bold',
  },

  loginButton: {
    color: '#414A22',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center'
  },
});
