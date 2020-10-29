import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Mapa from '../pages/Map';
import Perfil from '../pages/Perfil';
import Historico from '../pages/Historico';
import Premium from '../pages/Premium';
import Ajuda from '../pages/Ajuda';
import Sobre from '../pages/Sobre';
import Camera from '../pages/TipoVeiculo/camera';
import TipoVeiculo from '../pages/TipoVeiculo';

const AppStack = createStackNavigator();

function AppRoutes(){
    
    return(
    <AppStack.Navigator>
        <AppStack.Screen name="Mapa" component={Mapa} options={{headerShown:false}}/>
        <AppStack.Screen name="Perfil" component={Perfil} options={{
            headerTitle: 'Editar perfil',
            headerStyle: {
            backgroundColor: '#548AF0',
            },
            headerTintColor: '#fff',
             headerTitleStyle: {
            fontWeight: 'bold',
        },}}/>
           <AppStack.Screen name="Historico" component={Historico} options={{
            headerTitle: 'Histórico',
            headerStyle: {
            backgroundColor: '#548AF0',
            },
            headerTintColor: '#fff',
             headerTitleStyle: {
            fontWeight: 'bold',
        },}}/>

        <AppStack.Screen name="Camera" component={Camera} options={{headerShown: false}}/>
        
        
    </AppStack.Navigator>
    );
}

export default AppRoutes;
