import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Cadastro from '../pages/Cadastro';
import Recuperar from '../pages/Recuperar';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    
    return(
    <AuthStack.Navigator>
        <AuthStack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <AuthStack.Screen name="Cadastro" component={Cadastro} options={{
            headerTitle: 'Cadastro',
            headerStyle: {
            backgroundColor: '#548AF0',
            },
            headerTintColor: '#fff',
             headerTitleStyle: {
            fontWeight: 'bold',
        },}}/>
        <AuthStack.Screen name="Recuperar Senha" component={Recuperar} options={{headerTitle: 'Recuperar Senha'}}/>
        
    </AuthStack.Navigator>
    );
}

export default AuthRoutes;
