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
      {/* <Text>Hola Mundo React Native</Text>
      <Image source={require('./assets/wave.png')}></Image>
      <Text>____________________________</Text>
      <Saludo></Saludo>
      <Saludo/>
      <Text>____________________________</Text>
      <Saludo2></Saludo2>
      <Saludo2></Saludo2> */}

      <Perfil style={styles.tarjetas1} nombre="Lulu" carrera="ITIID" materia="Desarrollo de Aplicaciones Moviles" cuatri="Cuarto Cuatrimestre"></Perfil>
      <Perfil style={styles.tarjetas2} nombre="Renata" carrera="ITIID" materia="Desarrollo de Aplicaciones Web" cuatri="Cuarto Cuatrimestre"/>
      <Perfil style={styles.tarjetas3} nombre="Luisa" carrera="ITIID" materia="Desarrollo de Aplicaciones Moviles" cuatri="Cuarto Cuatrimestre"/>

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
    flexDirection: 'column',
    justifyContent: 'center',
  },
  tarjetas1:
  {
    backgroundColor:'#c4bbd8',

  },
  tarjetas2:
  {
    backgroundColor:'#f3f2b0',
  },

  tarjetas3:
  {
    backgroundColor:'#b0f3e6',
  },

});
