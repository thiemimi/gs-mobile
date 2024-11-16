import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from 'react-native';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    //navigation.navigate('home');
  };

  const handleSignUpRedirect = () => {
    //navigation.navigate('cadastro'); 
  };


  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("@/assets/images/background_login.png")}
        style={styles.backgroundImage}
      />

      <Image
        source={require("@/assets/images/logoWattEco.png")}
        style={styles.logo}
      />
      <View style={styles.whiteContainer}>
        <Text style={styles.titleText}>Login</Text>
        <View style={styles.containerForm}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry // oculta a senha
          />
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Esqueceu a senha?</Text>
          </View>

         
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUpRedirect}>
            <Text style={styles.cadastrarButton}>Não possui uma conta? Crie agora!</Text>
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
  logo: {
    width: 115,
    height: 115,
    resizeMode: 'contain',
    marginTop: 30,
    zIndex: 2,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  whiteContainer: {
    width: '100%',
    height: '80%',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 70,
    paddingTop: 40,
  },
  containerForm: {
    width: '70%',
    marginTop: 60,
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
  loginButton: {
    backgroundColor: '#A5B574',
    padding: 10,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#F1FEE7',
    fontSize: 18,
    fontWeight: 'bold',
  },

  cadastrarButton: {
    color: '#414A22',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center'
  },
});
