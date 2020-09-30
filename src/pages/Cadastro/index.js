import React, { Component, useEffect, useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity,
Modal, Image } from 'react-native';
import { set } from 'react-native-reanimated';
import firebase from '../../database/firebaseconfig';

console.disableYellowBox=true;
export default function App(){
  const[Email, setEmail] = useState('');
  const[Senha, setSenha] = useState('');
  const[Nome, setNome] = useState('');
  const[Idade, setIdade] = useState('');
  const[Modalv, setModalv] = useState('false');


  useEffect(() => {
    async function Dados(){ 
await firebase.database().ref('nome').once('value', (snapshot) => {
        setNome(snapshot.val());
      });
    }
    Dados();
  }, []);

  function criaconta(){
    firebase.auth().createUserWithEmailAndPassword(Email, Senha).then((value) => {
      let uid = value.user.uid;
      firebase.database().ref('Usuarios').child(value.user.uid).set({
        Nome: Nome,
      });
      alert('Usuario cadastrado com sucesso.');
      setNome('');
      setEmail('');
      setSenha('');
      setIdade('');
      setModalv('false');
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  };
  
  function logaconta(){
    firebase.auth().signInWithEmailAndPassword(Email, Senha).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
  };
  

  return(
    <ScrollView>
    <KeyboardAvoidingView>
    <View style={style.Logo}>
             <Image
              source={require('../../assets/logosf.png')}
              style={{width: 175, height: 230}}
              />

        <View style={style}>
          <Text style={style.Texto1}>{'É rápido, é fácil, é gratuito.'}</Text>
            <TextInput style={style.Entrada1} 
            placeholder="Insira seu email" 
            underlineColorAndroid="transparent"
            onChangeText={Email => setEmail(Email)}
            value={Email}/>
          </View>

            <TextInput style={style.Entrada1}
            placeholder="Nome e Sobrenome" underlineColorAndroid="transparent" onChangeText={Nome => setNome(Nome)}
            value={Nome}/>
            <TextInput style={style.Entrada1} placeholder=" Data de Nascimento     __/__/____" 
            underlineColorAndroid="transparent" 
            onChangeText={Idade => setIdade(Idade)} keyboardType={'numeric'} value={Idade}/>
            <TouchableOpacity style={style.btnprox} onPress={() => {setModalv(true)}}>
            <Text style={style.txtprox}>Continuar
            </Text></TouchableOpacity>

    </View>


{/*Modal de cadastrar senha*/}
    <Modal  animationType={"slide"}  visible={Modalv} transparent={true} >
                  <View style={style.modal1} >
                  <Text style={style.Texto1}>Agora vamos proteger sua conta UD:</Text>
                  <TextInput style={style.Entrada1} underlineColorAndroid="transparent"
                  placeholder=" Crie sua senha " onChangeText={() => {}}/>
                  <TextInput style={style.Entrada1} underlineColorAndroid="transparent" 
                  placeholder=" Repita sua senha" onChangeText={Senha => setSenha(Senha)}/>
                  <TouchableOpacity style={style.btnprox} onPress={() => { criaconta()}}>
                  <Text style={style.txtprox}>Concluir</Text>
                  </TouchableOpacity>
                  </View>
                </Modal>

      </KeyboardAvoidingView>
      </ScrollView>
  );
}


const style = StyleSheet.create ({
  Logo:{
    flex: 1,
    marginTop: 110, 
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#f2f2f2',
  },
  v1:{
  },
  v2:{
    flexDirection:'row',
  },
Texto1:{
  fontSize: 17,
  marginTop: -3,
  color: '#3AB4EE',
  alignSelf:'center',
},
Texto3:{
  fontSize: 30,
  marginTop: 12,
  marginStart: 10,
},
Texto4:{
  color: 'red',
  fontSize: 25,
  marginTop: 12,
  marginStart: 10,
},
Entrada1:{
  height: 45,
  width: 330,
  borderWidth: 2,
  borderColor: 'white',
  backgroundColor: 'white',
  margin: 10,
  borderRadius: 15,
  fontSize: 19,
  padding: 10,
},
btnprox: {
  backgroundColor:'#3AB4EE',
  width: 260,
  height: 60,
  alignContent:'center',
  justifyContent:'center',
  alignItems:'center',
  alignSelf:'center',
  borderRadius: 12,
  marginTop: 10,
},
txtprox:{
  fontSize: 22,
  color: 'white',
},
modal1:{
  width: 370,
  height: 300,
  backgroundColor:'white',
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: '#3AB4EE',
  backgroundColor:'#f2f2f2',
  borderWidth: 5,
  borderRadius: 3,
  margin: 25,
  marginTop: 180,
  shadowColor:'black',
}

});