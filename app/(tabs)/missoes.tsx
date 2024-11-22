import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { firestore } from '@/components/FIrebase';
import { FontAwesome } from '@expo/vector-icons';

export default function Missoes({ navigation }: any) {
  const [missoes, setMissoes] = useState<any[]>([]);

  useEffect(() => {
    const fetchMissoes = () => {
      const unsubscribe = firestore.collection('missoes')
        .onSnapshot((snapshot) => {
          const listaMissoes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setMissoes(listaMissoes);
        }, (error) => {
          console.error("Erro ao buscar missões: ", error);
        });
        return () => unsubscribe();
    };   
    fetchMissoes();
  }, []);

  const renderMissao = ({ item }: any) => (
    <View style={styles.missaoItem}>
      <View style={styles.missaoInfo}>
        <Text style={styles.missaoTitulo}>{item.titulo}</Text>
        <Text style={styles.missaoDescricao}>{item.descricao}</Text>
        <Text style={styles.missaoPontos}>Pontos: {item.pontos}</Text>
      </View>
      <TouchableOpacity onPress={() => excluirMissao(item.id)} style={styles.excluirBotao}>
        <FontAwesome name="times" size={18} color="red" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => editarMissao(item.id)} style={styles.editarBotao}>
        <FontAwesome name="edit" size={18} color="#007BFF" />
      </TouchableOpacity>
    </View>
  );

  const editarMissao = (id: string) => {
    navigation.navigate('MoreMissoes', { screen: 'EditMissao', params: { id } });
  };

  const excluirMissao = async (id: string) => {
    try {
      await firestore.collection('missoes').doc(id).delete();
      setMissoes(missoes.filter(missao => missao.id !== id));
    } catch (error) {
      console.error("Erro ao excluir missão: ", error);
    }
  };

  const adicionarMissao = () => {
    navigation.navigate('MoreMissoes', {screen: 'AdicionarMissao'});
  };

  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.titleText}>Missões</Text>
      <View style={styles.whiteContainer}></View>
      <FlatList
        style={styles.listaMissoes}
        data={missoes}
        renderItem={renderMissao}
        keyExtractor={item => item.id.toString()}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={adicionarMissao}>
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
    backgroundColor: '#E3F9D2',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  listaMissoes: {
    width: '80%',
    padding: 1,
    marginTop: 80
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

  missaoItem: {
    backgroundColor: '#F8FFF2',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative',
  },
  missaoInfo: {
    padding: 8,
    flex: 1,
  },
  missaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  missaoDescricao: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
  },
  missaoPontos: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5,
    fontWeight: '800'
  },
  excluirBotao: {
    position: 'absolute',
    top: 10,
    padding: 8,
    right: 10,
  },
  editarBotao: {
    position: 'absolute',
    padding: 5,
    bottom: 10,
    right: 10,
  },
});
