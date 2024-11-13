import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default function Missoes() {
  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.titleText}>Missões</Text>
      <View style={styles.whiteContainer}></View>
      
      <TouchableOpacity style={styles.floatingButton} onPress={() => console.log("Botão pressionado!")}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#C5E8AC',
  },
  titleText: {
    fontSize: 24,
    zIndex: 1,
    marginTop: 60,
    fontWeight: 'bold',
  },
  whiteContainer: {
    width: '100%',
    height: '85%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#6F7D41', 
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, 
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 30,
    lineHeight: 30, 
  },
});
