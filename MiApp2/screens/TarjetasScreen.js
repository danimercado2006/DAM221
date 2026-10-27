/*1. Zona de importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import{Perfil} from '../components/Perfil';

/*2. Zona de Render o Main */

export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      
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
