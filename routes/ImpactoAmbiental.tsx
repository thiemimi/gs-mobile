import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ImpactoAmbiental (){
  
  const impacto = {
    aguaEconomizada: 1500,
    residuosEvitados: 50, 
    carbonoNaoEmitido: 200, 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F1FEE7',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f855a',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#CCEE8D',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  statTitle: {
    fontSize: 18,
    color: '#4a5568',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#38a169',
  },
  footer: {
    marginTop: 20,
    fontSize: 16,
    color: '#718096',
    textAlign: 'center',
  },
});


