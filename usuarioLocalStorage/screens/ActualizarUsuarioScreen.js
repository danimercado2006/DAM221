import React, { useState } from 'react';
import { SafeAreaView,View,Text, TextInput, Pressable, StyleSheet,} from 'react-native';
import { useLocalSearchParams,router } from 'expo-router';
import { actualizarUsuario as actualizarUsuarioService } from '../services/usuariosService';





export default function ActualizarUsuarioScreen() {

  const params=useLocalSearchParams();

  const[nombre,setNombre]=useState(params.nombre);
  const[edad,setEdad]=useState(params.edad);
  const [mensajeExito, setMensajeExito] = useState('');
  const actualizarUsuario=async()=>
  {
    if (!nombre.trim() || !edad.trim()) {
        return;
    }
    if ( Number(edad) < 1 || Number(edad) > 120) {
        return;
    }
    try {
        await actualizarUsuarioService(
            params.id,
            nombre.trim(),
            Number(edad)
        );

        setMensajeExito('¡Usuario actualizado correctamente!');

    } catch (error) {
        console.error('Error al actualizar usuario:', error);
    }

  };
  







  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Actualizar Usuario
      </Text>
      {
      mensajeExito !== '' && (
        <Text style={styles.exito}>
            {mensajeExito}
        </Text>
      )
      }

      <View style={styles.card}>

        <Text style={styles.label}>
          Nombre
        </Text>

        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
        />

        <Text style={styles.label}>
          Edad
        </Text>

        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          placeholder="Edad"
          keyboardType="numeric"
        />

        <Pressable
          style={styles.boton}
          onPress={actualizarUsuario}
        >
          <Text style={styles.textoBoton}>
            Guardar cambios
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
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 25,
    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 16,
    fontWeight: 'bold',
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