import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function Dicas() {
  const tips = [
    { title: '🌿 Redução de Resíduos', content: 'Evite produtos descartáveis, opte por reutilizáveis.' },
    { title: '💡 Economia de Energia', content: 'Troque lâmpadas incandescentes por LED.' },
    { title: '🚰 Conservação de Água', content: 'Feche a torneira enquanto escova os dentes.' },
    { title: '🚶 Transporte Sustentável', content: 'Prefira caminhar, usar bicicleta ou transporte público.' },
    { title: '🌱 Consumo Consciente', content: 'Apoie negócios locais e produtores orgânicos.' },
  ];

  const [dailyTip, setDailyTip] = useState(tips[0]);

  useEffect(() => {
  
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    setDailyTip(randomTip);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/background_login.png')}
        style={styles.backgroundContainer}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Dica do Dia</Text>
          <View style={styles.topic}>
            <Text style={styles.topicTitle}>{dailyTip.title}</Text>
            <Text style={styles.tip}>{dailyTip.content}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    resizeMode: 'cover',
    paddingTop: 5,
  },
  contentContainer: {
    flex: 1,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    padding: 30,
    marginTop: 180,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
    color: '#4D5532'
  },
  topic: {
    padding: 20,
    backgroundColor: '#edf5de',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 4,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2D6A4F',
    marginBottom: 15,
    letterSpacing: 0.5,
  },
  tip: {
    fontSize: 16,
    color: '#3E5C4B',
    lineHeight: 24,
  },
});
