import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function Recuperar() {
 const navigation = useNavigation();


 return (
   <View>
<Text style={styles.FonRec}>Entre com seu telefone ou email para recuperar sua senha:</Text>
   <View style={{flexDirection:'row', height:120, alignItems:'center'}}>
                <TextInput
                style={styles.EntradaTexto}
                placeholder='Entre com telefone ou email'
                autoCorrect={false}
                onChangeText={() => {}}/>
                <Text style={styles.Btn1}> {">"} </Text>
   </View>
   </View>
  );
}
/*Estilos*/
const styles = StyleSheet.create({
  FonRec:{
    fontSize: 22,
    marginTop: 15,
    justifyContent: 'center',
    margin: 15,
  },
  EntradaTexto:{
    backgroundColor:'white',
    width: '75%',
    color:'#222',
    fontSize: 20,
    borderRadius: 15,
    padding: 10,
    marginStart: 30
  },
  Btn1:{
    backgroundColor:'#35AAFF',
    width: '10%',
    height:'35%',
    fontSize: 30,
    borderRadius: 20,
    color:'white',
    justifyContent:'center',
    textAlign:'center'
  },
});