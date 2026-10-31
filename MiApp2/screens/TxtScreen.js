import React, { useState } from "react"
import {StyleSheet,Text,View,ScrollView,TextInput,Button, Alert} from 'react-native';

export default function TxtScreen()
{
    const[nombre,setNombre]=useState("");
    const[edad,setEdad]=useState("");
    const[password,setPassword]=useState("");
    const[comentario,setComentario]=useState("");
    const alertaSimple =()=>
    {
        Alert.alert('Hola','Esta es una alerta simple');""

    };
    const alertaDosBotones=()=>
    {
        Alert.alert('Confrimar','¿Desea continuar?'),
        [
            {text:'Cancelar'},
            {text:'Aceptar'},
        ]
    };
    const mostrarNombre=()=>
    {
        Alert.alert('Tu nombre',nombre===''?'No escribiste nada':nombre)

    };
    return(
        <ScrollView
        contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>TextInput y Alert</Text>
            <Text style={styles.subtitulo}>1. Textinput básico</Text>
            <TextInput style={styles.input} 
            placeholder="Escribe tu nombre" 
            value={nombre}
            onChangeText={setNombre}
            ></TextInput>
            <Text>Escribiste:{nombre}</Text>
            <Text style={styles.subtitulo}>2. Teclado númerico</Text>
            <TextInput
            style={styles.input}
            placeholder="Edad"
            keyboardType="numeric"
            maxLength={3}
            value={edad}
            onChangeText={setEdad}></TextInput>
            <Text style={styles.subtitulo}>3. Contraseña (secureTextEntry)</Text>
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}></TextInput>
            <Text style={styles.subtitulo}>4.Varias lineas</Text>
            <TextInput
            style={[styles.input,styles.grande]}
            placeholder="Escribe un comentario"
            multiline={true}
            numberOfLines={4}
            value={comentario}
            onChangeText={setComentario}></TextInput>
            <Text style={styles.subtitulo}>5.Ejemplos de alert</Text>
            <View
            style={styles.boton}>
                <Button title="Alerta simple" onPress={alertaSimple}></Button>

            </View>
            <View
            style={styles.boton}>
                <Button title="Alerta con dos botones" onPress={alertaDosBotones}></Button>

            </View>
            <View
            style={styles.boton}>
                <Button title="Mostrar mi nombre" onPress={mostrarNombre}></Button>

            </View>


        </ScrollView>

    );
    
}
const styles=StyleSheet.create({
    container:
    {
        padding:24,
        paddingTop:60,
        backgroundColor:'#fff',
    },
    titulo:
    {
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,

    },
    subtitulo:
    {
        fontSize:16,
        fontWeight:'bold',
        marginTop:16,
        marginBottom:6,

    },
    input:
    {
        borderWidth:1,
        borderColor:'#999',
        borderRadius:6,
        padding:10,
        fontSize:16,
    },
    grande:
    {
        height:90,
        textAlignVertical:'top',
        
    },
    boton:
        {
            marginBottom:10
        },
});