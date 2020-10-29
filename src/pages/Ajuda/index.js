import React from 'react';
import { View, Text, Button,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
  const navigation = useNavigation();

 return (
   <View>
     <Text>Ajuda</Text>
     <Text>Tela de ajuda</Text>
     <TouchableOpacity  onPress={irPerfil}>
       <Text>Ir para Perfil</Text>
     </TouchableOpacity>
    
    
     
   </View>
  );
}