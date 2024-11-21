import React from 'react';
import { StyleSheet, View, Text, ImageBackground, ScrollView, Image } from 'react-native';

export default function Leaderboard({navigation}: any) {
  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('@/assets/images/background_leaderboard.png')}
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
    resizeMode: 'cover', // Ajusta a imagem para cobrir o fundo
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
  },

  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: 70,
    marginBottom: 50,
  },
  
  rectangle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  firstPlace: {
    width: 100,
    height: 200,
    backgroundColor: '#649C59',
  },
  secondPlace: {
    width: 90,
    height: 130,
    backgroundColor: '#649C59',
  },
  thirdPlace: {
    width: 85,
    height: 100,
    backgroundColor: '#649C59',
  },
  rankNumberTopThree: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  rankNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#649C59',
  },
  nameText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#b6e292',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#414A22',
  },
  userStats: {
    fontSize: 14,
    color: '#666666',
  },
  rankingsContainer: {
    width: '100%',
  },
  rankingCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 25,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  rankingName: {
    fontSize: 16,
    marginLeft: 20,
    color: '#333333',
  },
});
