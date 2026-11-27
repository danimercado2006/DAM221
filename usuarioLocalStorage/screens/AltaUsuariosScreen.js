import React, { useState } from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,StyleSheet,} from 'react-native';
import { agregarUsuario } from '../services/usuariosService';


export default function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorEdad, setErrorEdad] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const validarDatos=()=>
  {
    let valido=true;
    setErrorEdad('');
    setErrorNombre('');
    setMensajeExito('');

    if(!nombre.trim())
    {
      setErrorNombre('El nombre es un campo obligatorio');
      valido=false;

    }
    if (!edad.trim()) {
        setErrorEdad('La edad es obligatoria');
        valido = false;
    }
    else if (Number(edad) < 1 || Number(edad) > 120) {
        setErrorEdad('La edad debe estar entre 1 y 120 años');
        valido = false;
    }

    return valido;
};
const guardarUsuario=async()=>
{
  if(!validarDatos())
  {
    return;
  }
  await agregarUsuario(nombre.trim(),Number(edad));
  setEdad('');
  setNombre('');
  setMensajeExito('¡Usuario registrado correctamente!')

};


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Registro de Usuarios
        </Text>
        {
        mensajeExito !== '' && 
        (
          <Text style={styles.exito}>
          {mensajeExito}
          </Text>
        )
        }

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={
            (texto)=>{
              setNombre(texto);
              setErrorNombre('');
              setMensajeExito('');
            }
          }
        />
        {
          errorNombre!==''&&
          (
            <Text style={styles.error}>
              {errorNombre}
            </Text>
          )
        }

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={
            (texto)=>{
              setEdad(texto);
              setErrorEdad('');
              setMensajeExito('');
            }
          }
        />
        {
          errorEdad!==''&&
          (
            <Text style={styles.error}>
              {errorEdad}
            </Text>
          )
        }

        <Pressable style={styles.boton} onPress={guardarUsuario}>
          <Text style={styles.textoBoton}>
            Agregar Usuario
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  error: {
    color: '#DC2626',
    fontSize: 13,
    marginTop: -12,
    marginBottom: 15,
    marginLeft: 5,
},

exito: {
    color: '#16A34A',
    backgroundColor: '#DCFCE7',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
},

});