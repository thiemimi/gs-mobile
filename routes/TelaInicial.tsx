import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default function TelaInicial({ navigation }: any) {

  return (
    <View style={styles.backgroundContainer}>
      <Image
        source={require("@/assets/images/background_telainicial.png")}
        style={styles.backgroundImage}
      />
      <Image
        source={require("@/assets/images/logoWattEco.png")}
        style={styles.logo}
      />
      <Text style={styles.infoText}>
        Bem-vindo ao WattEco! Cadastre-se e comece a economizar energia de forma sustentável.
      </Text>

      <TouchableOpacity style={styles.cadastrarButton} onPress={() => navigation.navigate('Logon')}>
        <Text style={styles.cadastrarButtonText}>Cadastre-se agora</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginButton}>Já possui uma conta? Faça login!</Text>
      </TouchableOpacity>
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
    width: 235,
    height: 235,
    resizeMode: 'contain',
    marginTop: 190,
    zIndex: 2,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
  },
  infoText: {
    textAlign: 'center',
    marginTop: 35,
    marginHorizontal: 50,  
    fontSize: 16,
  },
  cadastrarButton: {
    backgroundColor: '#3A4518',
    padding: 15,
    width: '50%',
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
  },
});
