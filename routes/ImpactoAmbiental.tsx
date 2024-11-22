import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function ImpactoAmbiental() {
  
  const impacto = {
    aguaEconomizada: 1500,
    residuosEvitados: 50, 
    carbonoNaoEmitido: 200, 
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/background_login.png')}
        style={styles.backgroundContainer}
      >
        <Text style={styles.header}>Impacto Ambiental 🌱</Text>

        <View style={styles.card}>
          <Text style={styles.statTitle}>Litros de Água Economizados</Text>
          <Text style={styles.statValue}>{impacto.aguaEconomizada}L</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.statTitle}>Resíduos Evitados</Text>
          <Text style={styles.statValue}>{impacto.residuosEvitados}kg</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.statTitle}>Carbono Não Emitido</Text>
          <Text style={styles.statValue}>{impacto.carbonoNaoEmitido}kg</Text>
        </View>

        <Text style={styles.footer}>
          Cada ação que você realiza no aplicativo contribui para um planeta mais sustentável. Obrigado por fazer a diferença! 🌍
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#4D5532',
  },
  card: {
    backgroundColor: '#edf5de', 
    borderRadius: 12,
    padding: 20,
    marginVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  statTitle: {
    fontSize: 18,
    color: '#4D5532', 
    marginBottom: 8,
  },
  statValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4D5532', 
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    color: '#4D5532', 
    textAlign: 'center',
    marginBottom: 20,
  },
});
