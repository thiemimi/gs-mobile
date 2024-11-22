import { auth } from '@/components/FIrebase';
import { Image, StyleSheet, TouchableOpacity, Text, View, ImageSourcePropType } from 'react-native';

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
      <Image source={require('@/assets/icons/icon-arrow.png')} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

export default function Profile({navigation}: any) {

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/background_profile.png")}
        style={styles.backgroundContainer}
      />
      <View style={styles.profileContainer}>
        <Text style={styles.titleText}>Perfil</Text>
        <Image 
          source={require("@/assets/icons/icon-photo.png")}
          style={styles.profileImage}
        />
        <Text style={styles.userName}> username </Text>
      </View>

      <View style={styles.WhiteContainer}>
        <MenuButton
          icon={require('@/assets/icons/icon-profile.png')}
          text="Editar Perfil"
          onPress={() => navigation.navigate('MoreProfile', {screen: 'EditarPerfil'})}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-config.png')}
          text="Configurações"
          onPress={() => console.log('Configurações')}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-feedback.png')}
          text="Feedback"
          onPress={() => navigation.navigate('MoreProfile', {screen: 'Feedback'})}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-help.png')}
          text="Ajuda"
          onPress={() => navigation.navigate('MoreProfile', {screen: 'Ajuda'})}
        />
        <MenuButton
          icon={require('@/assets/icons/icon-logout.png')}
          text="Sair"
          onPress={() => {
            auth.signOut();
            navigation.navigate('Login')
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
  },
  backgroundContainer: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    resizeMode: 'stretch',
  },
  profileContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 40,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 50, 
    marginTop: 20,
    marginBottom: 15,    
  },
  userName:{
    fontSize: 18,
    marginBottom: 35,
  },

  WhiteContainer: {
    flexGrow: 1,  
    width: '100%',
    height: 475,
    paddingTop: 40,
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    margin: 25,
    borderRadius: 15,
    marginVertical: -6,
  },
  iconBackground: {
    width: 70, 
    height: 70, 
    backgroundColor: '#B3D69B', 
    borderRadius: 10, 
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    flex: 1,
    position: 'absolute',
    width: 35,
    height: 35,
    marginRight: 15,
  },
  buttonText: {
    flex: 1,
    fontSize: 18,
    color: '#414A22',
    marginLeft: 15,
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});
