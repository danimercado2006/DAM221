import {Text, View, Button,Image} from 'react-native';
export const Saludo2=()=>
{
    return (
        <View>
            <Text>Hola RN: Soy un componente COMPUESTO</Text>
            <Image source={require('../assets/wave.png')}></Image>
            <Button title="Presiona para saludar "></Button>
        </View>
    )
}
