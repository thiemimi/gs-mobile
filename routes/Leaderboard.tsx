import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image } from 'react-native';

export default function Leaderboard() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/background_login.png')}
        style={styles.backgroundContainer}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.topThreeContainer}>
            <View style={[styles.rectangle, styles.secondPlace]}>
              <Text style={styles.rankNumberTopThree}>2</Text>
              <Text style={styles.nameText}>Usuário B</Text>
            </View>

            <View style={[styles.rectangle, styles.firstPlace]}>
              <Text style={styles.rankNumberTopThree}>1</Text>
              <Text style={styles.nameText}>Usuário A</Text>
            </View>

            <View style={[styles.rectangle, styles.thirdPlace]}>
              <Text style={styles.rankNumberTopThree}>3</Text>
              <Text style={styles.nameText}>Usuário C</Text>
            </View>
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Sua posição</Text>
          </View>
          <View style={styles.userInfoContainer}>
            <Image
              source={require('@/assets/icons/icon-profile.png')}
              style={styles.userImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.userName}>username</Text>
              <Text style={styles.userStats}>Missões: 15 | Rank: 8</Text>
            </View>
          </View>

          <View style={styles.sectionTitleContainer}>
            <Text style={styles.sectionTitle}>Ranking Geral</Text>
          </View>
          <View style={styles.rankingsContainer}>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>4</Text>
              <Text style={styles.rankingName}>Usuário D</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>5</Text>
              <Text style={styles.rankingName}>Usuário E</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>6</Text>
              <Text style={styles.rankingName}>Usuário F</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>7</Text>
              <Text style={styles.rankingName}>Usuário G</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>8</Text>
              <Text style={styles.rankingName}>username</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>9</Text>
              <Text style={styles.rankingName}>Usuário H</Text>
            </View>
            <View style={styles.rankingCard}>
              <Text style={styles.rankNumber}>10</Text>
              <Text style={styles.rankingName}>Usuário I</Text>
            </View>
          </View>

        </ScrollView>
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
    paddingTop: 50, 
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  sectionTitleContainer: {
    width: '100%',
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#37423c',
    marginVertical: 1,
 
  },

  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 15,
    marginBottom: 50,
  },
  
  rectangle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  firstPlace: {
    width: 110,
    height: 210,
    backgroundColor: '#4A9E6A', 
  },
  secondPlace: {
    width: 100,
    height: 150,
    backgroundColor: '#6FBF8D', 
  },
  thirdPlace: {
    width: 90,
    height: 120,
    backgroundColor: '#A7D1A2', 
  },
  rankNumberTopThree: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFF',
    marginBottom: 8,
  },
  rankNumber: {
    fontSize: 22,
    fontWeight: '600',
    color: '#4A9E6A',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#90b378',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
  },
  userImage: {
    width: 65,
    height: 65,
    borderRadius: 35,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3A4C2E', 
  },
  userStats: {
    fontSize: 14,
    color: '#ffff',
  },
  rankingsContainer: {
    width: '100%',
  
    marginBottom: 50,
  },
  rankingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 18,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  rankingName: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333',
  },
});
