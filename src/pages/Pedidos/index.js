import React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

  function irPerfil(){
    navigation.navigate('Perfil', { nome: 'Matheus', email:'matheus@gmail.com' } );
  }

 return (
   <View>
     <Text>Home</Text>
     <Text>Bem vindo a tela home!!</Text>
     <TouchableOpacity  onPress={irPerfil}>
       <Text>Ir para Perfil</Text>
     </TouchableOpacity>
    
    
     
   </View>
  );
}