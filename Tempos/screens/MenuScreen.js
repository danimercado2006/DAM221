
/*1. Zona de importaciones */
import {
    StyleSheet,View,   Text,Button,ScrollView
} from 'react-native';

import { useState } from 'react';
import CrearCuenta from './CrearCuenta';
import IniciarSesion from './IniciarSesion';
import RecuperarContrasena from './RecuperarContrasena';
import AgregarUsuario from './Admin/AgregarUsuario';
import CategoriasServicios from './Admin/CategoriasServicios';
import Dashboard from './Admin/Dashboard';
import Intercambios from './Admin/Intercambios';
import NuevaCategoria from './Admin/NuevaCategoria';
import NuevoServicio from './Admin/NuevoServicio';
import Reportes from './Admin/Reportes';
import Usuarios from './Admin/Usuarios';
import AgregarHabilidad from './Usuarios/AgregarHabilidad';
import BuscarServicio from './Usuarios/BuscarServicio';
import EditarPerfil from './Usuarios/EditarPerfil';
import MiPerfil from './Usuarios/MiPerfil';
import MisCreditos from './Usuarios/MisCreditos';
import PanelPrincipal from './Usuarios/PanelPrincipal';
import PublicarServicio from './Usuarios/PublicarServicio';
import Solicitud from './Usuarios/Solicitud';



/*2. Zona de Render o Main */

export default function MenuScreen() {

    const [screen, setScreen] = useState('menu');

    switch(screen)
    {
        // ADMINISTRACIÓN

        case 'dashboard':
            return <Dashboard />;

        case 'agregarUsuario':
            return <AgregarUsuario />;

        case 'categorias':
            return <CategoriasServicios />;

        case 'intercambios':
            return <Intercambios />;

        case 'nuevaCategoria':
            return <NuevaCategoria />;

        case 'nuevoServicio':
            return <NuevoServicio />;

        case 'reportes':
            return <Reportes />;

        case 'usuariosAdmin':
            return <Usuarios />;


        // USUARIOS

        case 'agregarHabilidad':
            return <AgregarHabilidad />;

        case 'buscarServicio':
            return <BuscarServicio />;

        case 'editarPerfil':
            return <EditarPerfil />;

        case 'miPerfil':
            return <MiPerfil />;

        case 'misCreditos':
            return <MisCreditos />;

        case 'panelPrincipal':
            return <PanelPrincipal />;

        case 'publicarServicio':
            return <PublicarServicio />;

        case 'solicitud':
            return <Solicitud />;


        // ACCESO A LA CUENTA

        case 'crearCuenta':
            return <CrearCuenta />;

        case 'iniciarSesion':
            return <IniciarSesion />;

        case 'recuperar':
            return <RecuperarContrasena />;


        // MENÚ PRINCIPAL

        case 'menu':
        default:

            return (
                <ScrollView contentContainerStyle={styles.container}>

                    <Text style={styles.titulo}>TEMPOS</Text>

                    <Text style={styles.subtitulo}>
                        Sistema de gestión de servicios e intercambios
                    </Text>

                    {/* ADMINISTRACIÓN */}

                    <Text style={styles.seccion}>
                        ADMINISTRACIÓN
                    </Text>

                    <Button title='Dashboard'
                        onPress={()=>setScreen('dashboard')} />

                    <Button title='Agregar usuario'
                        onPress={()=>setScreen('agregarUsuario')} />

                    <Button title='Usuarios'
                        onPress={()=>setScreen('usuariosAdmin')} />

                    <Button title='Categorías y servicios'
                        onPress={()=>setScreen('categorias')} />

                    <Button title='Nueva categoría'
                        onPress={()=>setScreen('nuevaCategoria')} />

                    <Button title='Nuevo servicio'
                        onPress={()=>setScreen('nuevoServicio')} />

                    <Button title='Intercambios'
                        onPress={()=>setScreen('intercambios')} />

                    <Button title='Reportes'
                        onPress={()=>setScreen('reportes')} />


                    {/* USUARIOS */}

                    <Text style={styles.seccion}>
                        USUARIOS
                    </Text>

                    <Button title='Panel principal'
                        onPress={()=>setScreen('panelPrincipal')} />

                    <Button title='Mi perfil'
                        onPress={()=>setScreen('miPerfil')} />

                    <Button title='Editar perfil'
                        onPress={()=>setScreen('editarPerfil')} />

                    <Button title='Agregar habilidad'
                        onPress={()=>setScreen('agregarHabilidad')} />

                    <Button title='Mis créditos'
                        onPress={()=>setScreen('misCreditos')} />

                    <Button title='Buscar servicio'
                        onPress={()=>setScreen('buscarServicio')} />

                    <Button title='Publicar servicio'
                        onPress={()=>setScreen('publicarServicio')} />

                    <Button title='Solicitudes'
                        onPress={()=>setScreen('solicitud')} />


                    {/* ACCESO A LA CUENTA */}

                    <Text style={styles.seccion}>
                        ACCESO A LA CUENTA
                    </Text>

                    <Button title='Crear cuenta'
                        onPress={()=>setScreen('crearCuenta')} />

                    <Button title='Iniciar sesión'
                        onPress={()=>setScreen('iniciarSesion')} />

                    <Button title='Recuperar contraseña'
                        onPress={()=>setScreen('recuperar')} />

                    <Text style={styles.footer}>
                        TEMPOS © 2026
                    </Text>

                </ScrollView>
            );
    }
}


/*3. Zona de Estilos */

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 20,
        gap: 12,
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#243B55',
        marginTop: 15,
    },

    subtitulo: {
        fontSize: 13,
        color: '#777',
        textAlign: 'center',
        marginBottom: 15,
    },

    seccion: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#243B55',
        marginTop: 20,
        marginBottom: 8,
    },

    footer: {
        fontSize: 12,
        color: '#999',
        marginTop: 20,
        marginBottom: 15,
    },

});
