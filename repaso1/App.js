
import { StyleSheet, Text, View,TextInput,Switch,Button ,Alert,SafeAreaView,ScrollView,Pressable} from 'react-native';
import React,{useState} from "react";
export default function App() {
  const[nombre,setNombre]=useState("");
  const[carrera,setCarrera]=useState("");
  const[semestre,setSemestre]=useState("");
  const[taller,setTaller]=useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false); 
  const enviarformulario = () => {
  if (nombre.trim() === '' || carrera.trim() === '' || semestre.trim() === '') {
    Alert.alert(
      'Campos Incompletos',
      'Debes llenar todos los campos del formulario'
    );
    return;
  }

  if (isNaN(Number(semestre))) {
    Alert.alert(
      'Error',
      'El semestre debe ser un número'
    );
    return;
  }

  Alert.alert(
    'Registro enviado',
    'Nombre: ' + nombre +
    '\nCarrera: ' + carrera +
    '\nSemestre: ' + semestre +
    '\n\nTaller: ' + (taller ? 'Sí' : 'No') +
    '\nConstancia: ' + (constancia ? 'Sí' : 'No') +
    '\nDeportes: ' + (deportes ? 'Sí' : 'No'),
    [{ text: 'Aceptar' }]
  );
};
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
      contentContainerStyle={styles.contenido}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Registro al MIMETI</Text>
      <Text style={styles.subtitulo}>Nombre completo:</Text>
      <TextInput style={styles.input} placeholder="Ej. Daniela Ramírez Mercado" value={nombre} onChangeText={setNombre}>
      </TextInput>
      <Text style={styles.subtitulo}>Carrera:</Text>
      <TextInput style={styles.input} placeholder="Ej. Ing. Mecatronica" value={carrera} onChangeText={setCarrera}>
      </TextInput>
      <Text style={styles.subtitulo}>Semestre:</Text>
      <TextInput style={styles.input} placeholder="Ej. 5" value={semestre} onChangeText={setSemestre}>
      </TextInput>
      <View style={styles.separador} ></View>
      <Text style={styles.subtitulo}>Opciones</Text>

      <View style={styles.switches}>
      <View style={styles.fila}>
      <Text style={styles.subtitulo2}>¿Asistira a taller?</Text>
      <Switch
      value={taller}
      onValueChange={setTaller}
      disabled={false}
      trackColor={{false: '#a7a7ac',true:'#7ec4ad'}}
            thumbColor={taller?'#3aae74':'#ffffff'}
      style={styles.switch}
      />
      </View>
      <View style={styles.fila}>

      <Text style={styles.subtitulo2}>¿Requieres constancia?</Text>
      <Switch
      style={styles.switch}
      value={constancia}
      onValueChange={setConstancia}
      disabled={false}
      trackColor={{false: '#a7a7ac',true:'#7ec4ad'}}
            thumbColor={constancia?'#3aae74':'#ffffff'}
      />
      </View>

      <View style={styles.fila}>

      <Text style={styles.subtitulo2}>¿Participara en deportes?</Text>
      <Switch
      style={styles.switch}
      value={deportes}
      onValueChange={setDeportes}
      disabled={false}
      trackColor={{false: '#a7a7ac',true:'#7ec4ad'}}
            thumbColor={deportes?'#3aae74':'#ffffff'}
      />
      </View>
     </View>
     <View style={styles.separador} ></View>

     <Pressable
       style={styles.boton}
       onPress={enviarformulario}>
        <Text style={styles.textoBoton}>
          Enviar Registro
        </Text>
     </Pressable>
     </ScrollView>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:25,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
  },
  titulo:
  {
    fontSize:24,
    fontWeight:'bold',
    textAlign:'center',
    marginBottom:20,
    marginTop:48,
    fontFamily:'Arial',
    color:'#3a7d64',

  },
  subtitulo:
  {
    fontSize:20,
    fontWeight:'bold',
    alignItems:'right',
    marginBottom:15,
    marginTop:10,
    fontFamily:'Arial',
    color:'#3a7d64',

  },
  subtitulo2:
  {
    fontSize:16,
    fontFamily:'Arial',
    color:'#3a7d64',

  },
  input:
  {
    borderWidth:1,
    borderRadius:20,
    padding:10,
    fontSize:16,
    fontFamily:'Arial',
    width:300,
    color:'#3a7d64',
  },
  separador:
    {
        height:2,
        backgroundColor:'#cccccc',
        width:'100%',
        marginVertical:25,
    },
  switch:
  {
    alignItems:'Right',
    margingTop:10,
  },
  fila: 
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
    color:'#3a7d64',
  },
  switches: 
  {
    width: '100%',
    marginTop: 10,
  },
  boton:
  {
    borderRadius:25,
    backgroundColor:'#57c097',
    padding:15,
    alignItems:'center',

  },
  textoBoton:
  {
    color:'#fff',
    fontWeight:'bold',
    fontSize:18,
    
  }
});
