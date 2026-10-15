/*1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import{Saludo}from './components/Saludo';
import{Saludo2}from './components/Saludo2';
import{Perfil} from './components/Perfil';

/*2. Zona de Render o Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Text>____________________________</Text>
      <Saludo></Saludo>
      <Saludo/>
      <Text>____________________________</Text>
      <Saludo2></Saludo2>
      <Saludo2></Saludo2>
      <Perfil></Perfil>
      <StatusBar style="auto" />
    </View>
  );
}
/*3. Zona de Estilos */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
