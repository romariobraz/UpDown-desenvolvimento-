import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{StatusBar} from 'react-native';
import Perfil from './src/pages/Perfil';
import ListaHistorico from './src/pages/Historico';
import Premium from './src/pages/Premium';
import Ajuda from './src/pages/Ajuda';
import Sobre from './src/pages/Sobre';
import Home from './src/pages/Home';
import Cadastro from './src/pages/Cadastro';
import Recuperar from './src/pages/Recuperar';
import TelaEspera from './src/pages/AguardPedido';
import Map from './src/pages/Map';
import Autenticador, { AutContext } from './src/dados'

const Stack = createStackNavigator();

StatusBar.setBarStyle( 'light-content',true);

StatusBar.setBackgroundColor('#548AF0');

export default function App(){

    const { singed } = useContext(AutContext);

  return(
    <NavigationContainer>
      <Autenticador>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Mapa" component={Map} options={{headerShown:false}} />
        <Stack.Screen name="Perfil" component={Perfil} 
        options={{
          title: 'Perfil',
          headerStyle: {
            backgroundColor: '#548AF0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="Historico" component={ListaHistorico} 
        options={{
          title: 'Histórico',
          headerStyle: {
            backgroundColor: '#548AF0',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Premium" component={Premium} />
        <Stack.Screen name="Ajuda" component={Ajuda} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}  />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Recuperar" component={Recuperar} />
        <Stack.Screen name="Aguardar pedido" component={TelaEspera} options={{headerShown:false}} />
      </Stack.Navigator>
      </Autenticador>
    </NavigationContainer>
  );
}