import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import ListaHistorico from '../pages/Historico';
import Premium from '../pages/Premium';
import Sobre from '../pages/Sobre';
import TelaEspera from '../pages/AguardPedido';
import Map from '../pages/Map';
import Historico from '../pages/Historico/historico';



const AppStack = createStackNavigator();

function AppRoutes(){
    return(
    <AppStack.Navigator>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Perfil" component={Perfil} />
        <AppStack.Screen name="ListaHistorico" component={ListaHistorico} />
        <AppStack.Screen name="Premium" component={Premium} />
        <AppStack.Screen name="Sobre" component={Sobre} />
        <AppStack.Screen name="TelaEspera" component={TelaEspera} />
        <AppStack.Screen name="Map" component={Map} />
        <AppStack.Screen name="Historico" component={Historico}/>
    </AppStack.Navigator>
    );
}

export default AppRoutes;
