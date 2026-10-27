/*1. Zona de importaciones */
import { StyleSheet, View } from 'react-native';
import MenuScreen from './screens/MenuScreen';


/*2. Zona de Render o Main */

export default function App() {
  return (
    <View style={styles.container}>
      
      <MenuScreen/>
      
      
    </View>
  );
}
/*3. Zona de Estilos */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  

});
