import React,{useState,useEffect } from 'react';
import { StyleSheet,Text,TextInput,Pressable,Alert,View,ImageBackground,FlatList,ActivityIndicator} from 'react-native';
export default function MainScreen(){
   
    const [titulo,setTitulo]=useState("");
    const [autor,setAutor]=useState("");
    const [genero,setGenero]=useState("");
    const [libros,setLibros]=useState([]);
    const [cargando,setCargando]=useState(false);

    const agregarLibro=()=>
    {
      if(titulo.trim()==''||autor.trim()==''|| genero.trim() =='')
      {
        Alert.alert('Error','Todos los campos son obligatorios');
        return;
      }
      if(cargando)return;
      setCargando(true);
          setTimeout(() => {

      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim()
      };

     
      setLibros((actuales) => [
        nuevoLibro,
        ...actuales
      ]);

      
      setTitulo('');
      setAutor('');
      setGenero('');

     
      setCargando(false);

      
      Alert.alert(
        '¡Éxito!',
        'Libro guardado correctamente.'
      );

    }, 4000);

  };
  const renderLibro = ({ item }) => (

    <View style={styles.tarjeta}>

      <Text style={styles.nombreLibro}>
        {item.titulo}
      </Text>

      <Text style={styles.detalle}>
        Autor: {item.autor}
      </Text>

      <Text style={styles.detalle}>
        Género: {item.genero}
      </Text>

    </View>

  );
   return (

    <ImageBackground
      source={require('../assets/RepoLibros.png')}
      style={styles.fondo}
      resizeMode="stretch"
    >

      <View style={styles.contenedor}>

        <Text style={styles.titulo}>
            Catalogo de Libros
        </Text>
        <Text style={styles.subtitulo}> Titulo del libro:</Text>
        <TextInput
        style={styles.input}
        placeholder="Ej. Caperucita Roja"
        value={titulo}
        onChangeText={setTitulo}
        >
        </TextInput>
        <Text style={styles.subtitulo}> Autor del libro:</Text>
        <TextInput
        style={styles.input}
        placeholder="Ej. Caperucita Roja"
        value={autor}
        onChangeText={setAutor}
        >
        </TextInput>
        <Text style={styles.subtitulo}> Genero del libro:</Text>
        <TextInput
        style={styles.input}
        placeholder="Ej. Fantasia"
        value={genero}
        onChangeText={setGenero}
        >
        </TextInput>

     

        <Pressable
          style={({ pressed }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            cargando && styles.botonDeshabilitado
          ]}
          onPress={agregarLibro}
          disabled={cargando}
        >

          <Text style={styles.textoBoton}>
            Agregar Libro
          </Text>

        </Pressable>

       

        {cargando && (

          <View style={styles.cargando}>

            <ActivityIndicator
              size="large"
              color="#FFFFFF"
            />

            <Text style={styles.textoCargando}>
              Guardando libro...
            </Text>

          </View>

        )}

      

        <Text style={styles.total}>
          Total de libros: {libros.length}
        </Text>

       

        <FlatList
          data={libros}
          renderItem={renderLibro}
          keyExtractor={(item) => item.id}
          style={styles.lista}
          contentContainerStyle={styles.contenidoLista}
          ListEmptyComponent={
            <Text style={styles.listaVacia}>
              Aún no tienes libros registrados.
            </Text>
          }
        />

      </View>

    </ImageBackground>

  );
      

  


}

const styles = StyleSheet.create({

  // FONDO
  fondo: {
    flex: 1,
  width: '100%',
  },

  
  contenedor: {
    flex: 1,
  width: '100%',
  padding: 20,
  backgroundColor: 'transparent',
  },

  
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 35,
    marginBottom: 25,
    color: '#693A7D',
  },

  
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
    color: '#693A7D',
  },


  input: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderWidth: 1,
    borderColor: '#D8C4E2',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 48,
    fontSize: 15,
    color: '#a074a3',
    width: '100%',
    marginBottom: 8,
  },

 
  boton: {
    backgroundColor: '#9163ae',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 8,
    width: '100%',
  },

  botonPresionado: {
    backgroundColor: '#846088',
  },

  botonDeshabilitado: {
    opacity: 0.5,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  
  cargando: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    backgroundColor: 'rgba(105,58,125,0.65)',
    borderRadius: 12,
    marginTop: 8,
  },

  textoCargando: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },


  total: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#693A7D',
    marginTop: 18,
    marginBottom: 12,
  },


  lista: {
    flex: 1,
    width: '100%',
  },

  contenidoLista: {
    paddingBottom: 20,
    flexGrow: 1,
  },

  
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.94)',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#89619a',
  },

  nombreLibro: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#693A7D',
    marginBottom: 8,
  },

  detalle: {
    fontSize: 14,
    color: '#72507f',
    marginTop: 3,
  },

  listaVacia: {
    textAlign: 'center',
    color: '#693A7D',
    fontSize: 14,
    marginTop: 20,
    fontWeight: '600',
  },

});
