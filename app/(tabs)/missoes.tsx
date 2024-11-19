import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from 'react-native';
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
      </View>
      <View style={styles.missaoBotoes}>
        <TouchableOpacity onPress={() => editarMissao(item.id)} style={styles.missaoBotao}>
          <FontAwesome name="edit" size={18} color="#007BFF" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => excluirMissao(item.id)} style={styles.missaoBotao}>
          <FontAwesome name="trash" size={18} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const editarMissao = (id: string) => {
    navigation.navigate('EditarMissao', { id });
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
    navigation.navigate('AdicionarMissao');
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
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  listaMissoes: {
    width: '80%',
    padding: 10,
    margin: 15,
    marginTop: 50
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
    flexDirection: 'row',
    backgroundColor: '#F8FFF2',
    padding: 15,
    marginBottom: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#6F7D41',
    position: 'relative', 
  },
  missaoInfo:{
    padding: 5,
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
  missaoBotoes: {
    position: 'absolute', 
    top: 10, 
    right: 10, 
    flexDirection: 'row',
  },
  missaoBotao: {
    marginLeft: 10, 
  },
});
