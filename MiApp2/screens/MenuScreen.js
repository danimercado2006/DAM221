/*1. Zona de importaciones */
import { StyleSheet, View,Text,Button, } from 'react-native';
import { useState } from 'react';
import TarjetasScreen  from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import  PressableScreen from './PressableScreen';
import TxtScreen from './TxtScreen';
import FlatScreen from './FlatScreen' ;
import ImageBackScreen from './ImageBackScreen';
import ModalScreen from './ModalScreen';
import ActivityScreen from './ActivityScreen';


/*2. Zona de Render o Main */

export default function MenuScreen() {
    const[screen,setScreen]=useState('Menu');
    switch(screen)
        {
            case'tarjetas':
                return <TarjetasScreen/>;
            case'safe':
                return <SafeScreen/>;
            case'pressable':
                return <PressableScreen/>
            case'text':
                return <TxtScreen/>
            case'flat':
                return <FlatScreen/>
            case'img':
                return <ImageBackScreen/>
            case'modal':
                return <ModalScreen/>
             case'activity':
                return <ActivityScreen/>
            case'menu':
                default:
                    return (
                    <View style={styles.container}>
                        <Text>Menu de Practicas</Text>
                        <Button title='Tarjetas' onPress={()=>setScreen('tarjetas')}></Button>
                        <Button title='SafeAreaView'onPress={()=>setScreen('safe')}></Button>
                        <Button title='Pressable' onPress={()=>setScreen('pressable')}></Button>
                        <Button title='TextInput & Alert'onPress={()=>setScreen('text')}></Button>
                        <Button title='FlatList & SectionList' onPress={()=>setScreen('flat')}></Button>
                        <Button title='ImageBackgroung & SlapshScreen'onPress={()=>setScreen('img')}></Button>
                        <Button title='Modal & Bottom sheet' onPress={()=>setScreen('modal')}></Button>
                        <Button title='ActivityIndicator, KeyboardAvoidingView'onPress={()=>setScreen('activity')}></Button>
                        
                        

                    </View>
                    );
}
}
/*3. Zona de Estilos */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  

});
