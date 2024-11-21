import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';

export default function Dicas() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topic}>
        <Text style={styles.topicTitle}>🌿 Redução de Resíduos</Text>
        <Text style={styles.tip}>1. Evite produtos descartáveis, opte por reutilizáveis.</Text>
        <Text style={styles.tip}>2. Separe o lixo reciclável do orgânico.</Text>
        <Text style={styles.tip}>3. Compre apenas o necessário para evitar desperdício.</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topicTitle}>💡 Economia de Energia</Text>
        <Text style={styles.tip}>1. Troque lâmpadas incandescentes por LED.</Text>
        <Text style={styles.tip}>2. Desligue aparelhos eletrônicos da tomada quando não estiver usando.</Text>
        <Text style={styles.tip}>3. Aproveite a luz natural sempre que possível.</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topicTitle}>🚰 Conservação de Água</Text>
        <Text style={styles.tip}>1. Feche a torneira enquanto escova os dentes.</Text>
        <Text style={styles.tip}>2. Use um balde em vez de mangueira para lavar o carro.</Text>
        <Text style={styles.tip}>3. Reaproveite água da chuva para regar plantas.</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topicTitle}>🚶 Transporte Sustentável</Text>
        <Text style={styles.tip}>1. Prefira caminhar, usar bicicleta ou transporte público.</Text>
        <Text style={styles.tip}>2. Organize caronas para economizar combustível.</Text>
        <Text style={styles.tip}>3. Considere veículos elétricos ou híbridos.</Text>
      </View>

      <View style={styles.topic}>
        <Text style={styles.topicTitle}>🌱 Consumo Consciente</Text>
        <Text style={styles.tip}>1. Apoie negócios locais e produtores orgânicos.</Text>
        <Text style={styles.tip}>2. Evite produtos com excesso de embalagens.</Text>
        <Text style={styles.tip}>3. Reutilize roupas e doe as que não usa mais.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#C5E8AC',
  },
  topic: {
    marginTop: 15,
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#F1FEE7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d6a4f',
    marginBottom: 12,
  },
  tip: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
});
