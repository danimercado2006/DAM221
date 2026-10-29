import {StyleSheet,Text,Pressable,Switch,View} from 'react-native' ;
import {useState} from 'react';
export default function PressableScreen()
{
    const[mensaje,setMensaje]=useState('Presiona el boton');
    const[activado,setActivado]=useState(false);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Pressable
            </Text>
            <Text>{mensaje}</Text>
            <Pressable 
            onPress={()=>setMensaje('Boton presionado')}
            onPressIn={()=>console.log('Inicio de la pulsacion')}
            onPressOut={()=> console.log('Fin de la pulsacion')}
            onLongPress={()=>setMensaje('Pulsacion Prolongada')}
            disable={false}
            style={({pressed})=>[
                styles.boton,
                pressed && styles.botonPresionado
            ]}
            >
                <Text style={styles.textoBoton}>Presioname</Text>

            </Pressable>
            <View style={styles.separador}/>
            <Text style={styles.titulo}>Switch</Text>
            <Text>
                Estado:{activado?'activado':'Desactivado'}
            </Text>
            <Switch
            value={activado}
            onValueChange={setActivado}
            disabled={false}
            trackColor={{false: '#ebb9ef',true:'#7aff8e'}}
            thumbColor={activado?'#e782b5':'#b756c4'}
            />

            

            
            

        </View>
    );
    

}
const styles = StyleSheet.create({
    container:
    {
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f2ecec',
        padding:20,
    },
    titulo:
    {
        fontSize:24,
        fontWeight:'bold',
        marginBottom:15,
    },
    boton:
    {
        backgroundColor:'#319b80',
        padding:15,
        borderRadius:10,
        marginTop:15,
    },
    botonPresionado:
    {
        backgroundColor:'#1e6655',

    },
    textoBoton:
    {
        color:'white',
        fontSize:16,
    },
    separador:
    {
        height:2,
        backgroundColor:'#cccccc',
        width:'90%',
        marginVertical:35,
    }
    
}
);