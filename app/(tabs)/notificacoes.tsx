
import { StyleSheet, Image, Text, View } from 'react-native';


export default function Notificacoes() {
  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.titleText}>Notificações</Text>
      <View style={styles.whiteContainer}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundContainer:{
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#C5E8AC',
  },
  titleText:{
    fontSize: 24,
    zIndex: 1,
    marginTop: 60,
    fontWeight: 'bold',
  },

  whiteContainer:{
    width:'100%',
    height: '85%',
    position:'absolute',
    bottom: 0,
    backgroundColor: '#F1FEE7',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  }
});
