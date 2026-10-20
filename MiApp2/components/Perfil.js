import {Text,View,Button,StyleSheet}from 'react-native';
import {useState} from 'react';
export const Perfil=({nombre,carrera,materia,cuatri,style})=>
{
    const [ver,setVer] = useState(false);
    return(
        <View style={[estilos.tarjetas,style]}>

            <Text style={estilos.nombre}>{nombre}</Text>
            {ver &&
            <>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otrotexto}>{materia}</Text>
            <Text style={estilos.otrotexto}>{cuatri}</Text>
            </>
            }
            <Button title="Ver Perfil" onPress={ ()=>setVer(!ver)}/>
    
        
        </View>
       
    )
}
const estilos=StyleSheet.create(
    {
        nombre:
        {
            fontSize:24,
            fontWeight:900,
            textTransform:'uppercase',
        },
        carrera:
        {
            fontSize:20,
            fontWeight:900,
            color:'lightblue',
            fontFamily:"Roboto",
        },
        otrotexto:
        {
            fontSize:18,
            fontWeight:900,
            color:'lightgreen',
            fontFamily:"Courier",
            fontStyle:'italic',
        },
        tarjetas:
        {
            borderWidth:1.5,
            borderRadius:10,
            backgroundColor:'lightgray',
            padding:15,
            margin:10,
        }

    }
);
