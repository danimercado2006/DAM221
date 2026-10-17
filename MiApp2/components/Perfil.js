import {Text,View,Button}from 'react-native';
import {useState} from 'react';
export const Perfil=({nombre,carrera,materia,cuatri})=>
{
    const [ver,setVer] = useState(false);
    return(
        <View>

            <Text>{nombre}</Text>
            {ver &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            }
            <Button title="Ver Perfil" onPress={ ()=>setVer(!ver)}/>
    
        
        </View>
       
    )
}