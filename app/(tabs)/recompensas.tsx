import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Alert } from 'react-native';
import { Reward } from '@/models/Recompensas.interface';
import { RewardClient } from '@/client/client';

export default function Recompensas() {
  const [rewardsToCollect, setRewardsToCollect] = useState<Reward[]>([]);
  const [collectedRewards, setCollectedRewards] = useState<Reward[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRewards();
  }, []);

  const fetchRewards = async () => {
    try {
      const data = await RewardClient.getRewards();
      setRewardsToCollect(data); 
    } catch (error) {
      console.error('Erro ao buscar recompensas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const collectReward = (reward: Reward) => {
    setRewardsToCollect((prev) => prev.filter((item) => item.id !== reward.id));
    setCollectedRewards((prev) => [...prev, reward]);
    Alert.alert('Recompensa coletada!', `Você coletou: ${reward.description}`);
  };

  const renderRewardItem = ({ item }: { item: Reward }, isCollectable: boolean) => (
    <View style={styles.rewardItem}>
      <Text style={styles.rewardDescription}>{item.description}</Text>
      <Text style={styles.rewardPoints}>Pontos necessários: {item.pointsRequired} pontos</Text>
      {isCollectable && (
        <TouchableOpacity
          style={styles.collectButton}
          onPress={() => collectReward(item)}
        >
          <Text style={styles.collectButtonText}>Coletar</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  const sections = [
    {
      title: 'Recompensas coletadas',
      data: collectedRewards,
      isCollectable: false,
      emptyText: 'Você ainda não coletou nenhuma recompensa.',
    },
    {
      title: 'Recompensas a serem coletadas',
      data: rewardsToCollect,
      isCollectable: true,
      emptyText: 'Nenhuma recompensa disponível para coleta.',
    },
  ];

  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.titleText}>Recompensas</Text>
      <View style={styles.whiteContainer}>
        {isLoading ? (
          <Text style={styles.loadingText}>Carregando...</Text>
        ) : (
          <SectionList
            sections={sections}
            keyExtractor={(item, index) => `${item.id}-${index}`} 
            renderItem={({ item, section }) =>
              renderRewardItem({ item }, section.isCollectable)
            }
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionTitle}>{title}</Text>
            )}
            renderSectionFooter={({ section: { data, emptyText } }) =>
              data.length === 0 ? (
                <Text style={styles.emptyText}>{emptyText}</Text>
              ) : null
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#C5E8AC',
  },
  titleText: {
    fontSize: 24,
    zIndex: 1,
    marginTop: 60,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteContainer: {
    flex: 1, 
    backgroundColor: '#E3F9D2',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 25,
    padding: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  loadingText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
  emptyText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginVertical: 10,
  },
  rewardItem: {
    backgroundColor: '#F8FFF2',
    padding: 20,
    marginBottom: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#414A22',
    marginVertical: 4,
    fontWeight: 'bold',
  },
  rewardPoints: {
    fontSize: 14,
    color: '#333',
  },
  collectButton: {
    marginTop: 10,
    backgroundColor: '#6F7D41',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  collectButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
