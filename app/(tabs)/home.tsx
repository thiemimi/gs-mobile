import { StyleSheet, Image, Text, View, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface MenuButtonProps {
  icon: ImageSourcePropType;
  text: string;
  onPress: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.iconBackground}>
        <Image source={icon} style={styles.iconStyle} />
      </View>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default function Home() {
  return (
    <View style={styles.containerTela}>
      <Image
        source={require('@/assets/images/background_dashboard.png')}
        style={styles.backgroundContainer}
      />
      <Text style={styles.textTitle}>Dashboard</Text>
      <View style={styles.cardLevelContainer}>
        <View style={styles.hexagonContainer}>
          <Image
            source={require('@/assets/icons/icon-hexagon.png')}
            style={styles.lvlImage}
          />
          <Text style={styles.numberText}>5</Text>
        </View>
        <Text style={styles.lvlText}>
          Seu nível atual é 5, continue completando missões para avançar.
        </Text>
      </View>

      <View style={styles.rowContainer}>
        <MenuButton
          icon={require('@/assets/icons/icon-dicas.png')}
          text="Dicas verdes"
          onPress={() => console.log('Dicas')}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-rewards.png')}
          text="Recompensas"
          onPress={() => console.log('Recompensas')}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-leaderboard.png')}
          text="Leaderboard"
          onPress={() => console.log('Leaderboard')}
        />
      </View>
      <View style={styles.WhiteContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTela: {
    flex: 1,
    alignItems: 'center',
  },
  textTitle: {
    justifyContent: 'flex-start',
    fontSize: 24,
    marginTop: 60,
    fontWeight: 'bold',
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    resizeMode: 'stretch',
  },


 //===========================
  cardLevelContainer: {
    flexDirection: 'row',
    width: '80%',
    height: '12%',
    backgroundColor: '#F1FEE7',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    marginTop: 30,
  },
  hexagonContainer: {
    position: 'relative',
    width: 80,
    height: 80,
    marginRight: 10,
  },
  lvlImage: {
    width: '100%',
    height: '100%',
  },
  numberText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -9 },  
      { translateY: -21 },  
    ],
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  lvlText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 14,
    padding: 8,
  },



 //===========================
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginTop: 8,
    paddingHorizontal: 15,
  },

  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  iconBackground: {
    width: 70,
    height: 70,
    backgroundColor: '#F1FEE7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 35,
    height: 35,
  },
  buttonText: {
    fontSize: 14,
    color: '#414A22',
    marginTop: 5,
  },



  //===========================

  WhiteContainer: {
    flex: 1,
    width: '100%',
    height: '55%',
    position: 'absolute',
    bottom: 0,
    paddingTop: 40,
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
