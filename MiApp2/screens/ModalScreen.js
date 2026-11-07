
import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Pressable,
  FlatList
} from 'react-native';

export default function ModalScreen() {

  // ESTADOS
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmarEliminar, setConfirmarEliminar] = useState(false);

  const [tarea, setTarea] = useState('');
  const [prioridad, setPrioridad] = useState('Media');
  const [tareas, setTareas] = useState([]);

  // ABRIR Y CERRAR MENU
  const abrirMenu = () => {
    setMenuVisible(true);
  };

  const cerrarMenu = () => {
    setMenuVisible(false);
    setConfirmarEliminar(false);
  };

  // ABRIR FORMULARIO
  const abrirModal = () => {
    cerrarMenu();
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  // GUARDAR TAREA
  const guardarTarea = () => {

    if (tarea.trim() === '') {
      return;
    }

    const nuevaTarea = {
      id: Date.now().toString(),
      nombre: tarea.trim(),
      prioridad: prioridad
    };

    setTareas((anteriores) => [...anteriores, nuevaTarea]);

    setTarea('');
    setPrioridad('Media');

    cerrarModal();
  };

  // MOSTRAR CONFIRMACION DE ELIMINACION
  const limpiarTareas = () => {
    setConfirmarEliminar(true);
  };

  // CONFIRMAR ELIMINACION
  const confirmarLimpieza = () => {
    setTareas([]);
    setConfirmarEliminar(false);
    setMenuVisible(false);
  };

  // CANCELAR ELIMINACION
  const cancelarLimpieza = () => {
    setConfirmarEliminar(false);
  };

  return (

    <View style={styles.container}>

      {/* ENCABEZADO */}
      <Text style={styles.titulo}>
        TaskFlow
      </Text>

      <Text style={styles.subtitulo}>
        Mis tareas ({tareas.length})
      </Text>

      {/* BOTON PRINCIPAL */}
      <Pressable
        style={styles.boton}
        onPress={abrirMenu}
      >
        <Text style={styles.textoBoton}>
          Opciones de tareas
        </Text>
      </Pressable>

      {/* LISTA DE TAREAS */}
      <FlatList
        data={tareas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.tarjeta}>

            <Text style={styles.nombreTarea}>
              {item.nombre}
            </Text>

            <Text style={styles.prioridadTexto}>
              Prioridad: {item.prioridad}
            </Text>

          </View>

        )}

        ListEmptyComponent={
          <Text style={styles.vacio}>
            No tienes tareas registradas.
          </Text>
        }
      />

      {/* ============ FORMULARIO MODAL ============ */}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={cerrarModal}
      >

        <View style={styles.fondoModal}>

          <View style={styles.modal}>

            <Text style={styles.tituloModal}>
              Nueva tarea
            </Text>

            <Text style={styles.etiqueta}>
              Nombre de la tarea
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Escribe tu tarea..."
              value={tarea}
              onChangeText={setTarea}
            />

            <Text style={styles.etiqueta}>
              Selecciona la prioridad:
            </Text>

            <View style={styles.prioridades}>

              {['Baja', 'Media', 'Alta'].map((item) => (

                <Pressable
                  key={item}
                  style={[
                    styles.opcion,
                    prioridad === item && styles.seleccionada
                  ]}
                  onPress={() => setPrioridad(item)}
                >
                  <Text style={styles.textoOpcion}>
                    {item}
                  </Text>
                </Pressable>

              ))}

            </View>

            {/* GUARDAR */}
            <Pressable
              style={styles.boton}
              onPress={guardarTarea}
            >
              <Text style={styles.textoBoton}>
                Guardar tarea
              </Text>
            </Pressable>

            {/* CANCELAR */}
            <Pressable
              style={styles.botonCancelar}
              onPress={cerrarModal}
            >
              <Text style={styles.textoCancelar}>
                Cancelar
              </Text>
            </Pressable>

          </View>

        </View>

      </Modal>

      {/* ============ MENU DE OPCIONES ============ */}

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={cerrarMenu}
      >

        <View style={styles.fondoMenu}>

          {/* FONDO PARA CERRAR */}
          <Pressable
            style={styles.overlay}
            onPress={cerrarMenu}
          />

          {/* CONTENEDOR DEL MENU */}
          <View style={styles.menu}>

            <View style={styles.indicador} />

            {confirmarEliminar ? (

              /* CONFIRMACION DE ELIMINACION */
              <>

                <Text style={styles.tituloMenu}>
                  ¿Eliminar todas las tareas?
                </Text>

                <Text style={styles.descripcionMenu}>
                  Esta acción eliminará todas tus actividades registradas.
                </Text>

                <Pressable
                  style={styles.botonEliminar}
                  onPress={confirmarLimpieza}
                >
                  <Text style={styles.textoEliminar}>
                    Sí, eliminar todas
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.botonCancelar}
                  onPress={cancelarLimpieza}
                >
                  <Text style={styles.textoCancelar}>
                    Cancelar
                  </Text>
                </Pressable>

              </>

            ) : (

              /* MENU NORMAL */
              <>

                <Text style={styles.tituloMenu}>
                  ¿Qué deseas hacer?
                </Text>

                <Text style={styles.descripcionMenu}>
                  Selecciona una opción para continuar.
                </Text>

                {/* NUEVA TAREA */}
                <Pressable
                  style={styles.opcionMenu}
                  onPress={abrirModal}
                >

                  <Text style={styles.icono}>
                    ＋
                  </Text>

                  <View>
                    <Text style={styles.nombreOpcion}>
                      Nueva tarea
                    </Text>

                    <Text style={styles.detalleOpcion}>
                      Registrar una actividad
                    </Text>
                  </View>

                </Pressable>

                {/* LIMPIAR TAREAS */}
                <Pressable
                  style={styles.opcionMenu}
                  onPress={limpiarTareas}
                >

                  <Text style={styles.icono}>
                    ✕
                  </Text>

                  <View>
                    <Text style={styles.nombreOpcion}>
                      Limpiar tareas
                    </Text>

                    <Text style={styles.detalleOpcion}>
                      Eliminar todas las actividades
                    </Text>
                  </View>

                </Pressable>

                {/* CERRAR */}
                <Pressable
                  style={styles.botonCerrar}
                  onPress={cerrarMenu}
                >
                  <Text style={styles.textoCancelar}>
                    Cerrar
                  </Text>
                </Pressable>

              </>

            )}

          </View>

        </View>

      </Modal>

    </View>
  );
}

// ================ ESTILOS =================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5fa',
    padding: 20,
    paddingTop: 60
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333'
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15
  },

  boton: {
    backgroundColor: '#8c7cce',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8
  },

  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },

  tarjeta: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#e5e5e5'
  },

  nombreTarea: {
    fontSize: 17,
    fontWeight: 'bold'
  },

  prioridadTexto: {
    marginTop: 5,
    color: '#666'
  },

  vacio: {
    textAlign: 'center',
    marginTop: 30,
    color: '#777'
  },

  // ESTILOS DEL MODAL

  fondoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  modal: {
    backgroundColor: 'white',
    width: '100%',
    padding: 22,
    borderRadius: 15
  },

  tituloModal: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  },

  etiqueta: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 15
  },

  prioridades: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },

  opcion: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8
  },

  seleccionada: {
    backgroundColor: '#dcd5ff',
    borderColor: '#7057d9',
    borderWidth: 2
  },

  textoOpcion: {
    fontWeight: 'bold'
  },

  botonCancelar: {
    padding: 12,
    alignItems: 'center'
  },

  textoCancelar: {
    color: '#7057d9',
    fontWeight: 'bold',
    fontSize: 15
  },

  // ESTILOS DEL MENU INFERIOR

  fondoMenu: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },

  menu: {
    backgroundColor: 'white',
    padding: 22,
    paddingBottom: 35,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },

  indicador: {
    width: 45,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20
  },

  tituloMenu: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333'
  },

  descripcionMenu: {
    color: '#777',
    marginTop: 5,
    marginBottom: 15
  },

  opcionMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },

  icono: {
    fontSize: 25,
    color: '#7057d9',
    marginRight: 15,
    width: 30,
    textAlign: 'center'
  },

  nombreOpcion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  detalleOpcion: {
    fontSize: 13,
    color: '#888',
    marginTop: 3
  },

  botonCerrar: {
    backgroundColor: '#eee9ff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20
  },

  // ESTILOS DE ELIMINACION

  botonEliminar: {
    backgroundColor: '#DC2626',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15
  },

  textoEliminar: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }

});
