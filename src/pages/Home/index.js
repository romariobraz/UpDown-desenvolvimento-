import React, { Component, useEffect, useState, useContext} from 'react';
import { View, Text, Button, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity,
Modal, Image,ActivityIndicator} from 'react-native';
import { set, Value } from 'react-native-reanimated';
import firebase from '../../database/firebaseconfig';  
import { useNavigation } from '@react-navigation/native';
import {AutContext} from '../../dados';

export default function Home() {
  const[Login, setLogin] = useState('');
  const[Senha, setSenha] = useState('');
  const[Modalv, setModalv] = useState('false');
  const[Modaload, setModaload] = useState(false);
  const[loading,setLoading] = useState(false);

  const navigation = useNavigation();

  function irCadastro(){
    navigation.navigate('Cadastro');
  }
  function irRecuperar(){
    navigation.navigate('Recuperar');
  }

   function irMapa(){

    navigation.navigate('Mapa');
  
  }


  async function logaconta(){
    await firebase.auth().signInWithEmailAndPassword(Login, Senha).then(irMapa).catch( (error) => {
      alert('Senha ou usuário incorretos');
      return;

    });

    setLoading(false);
    setModaload(false);
    
  }

 return (

  <ScrollView keyboardShouldPersistTaps={true}>
    
  <KeyboardAvoidingView style={styles.corpo}>

        {/* View do cabeçalho (e da splash/) */}
        <View style={styles.Splash}>
        <Text style={styles.txspl}>Ajuda</Text>
        </View>

          {/* View da logo */}
             <View style={styles.Logo}>
             <Image
              source={require('../../assets/logosf.png')}
              style={{width: 175, height: 230}}
              />
              </View>

              {/*Entrada de do login*/}
              <View style={{flexDirection:'row', height:120, alignItems:'center'}}>
                <TextInput
                style={styles.EntradaTexto}
                placeholder='Inicie com seu telefone ou email'
                autoCorrect={false}
                onChangeText={Login => setLogin(Login)}/>
                  <TouchableOpacity style={styles.btnLogin} onPress={() => {setModalv(true)}}>
                  <Image
                  source={require('../../assets/botao.png')}
                  style={{width: 175, height: 230}}
                  style={styles.Btn1}
                  />
                  </TouchableOpacity>
              </View>

              {/* Modal do Carregamento*/}
                <Modal animationType={"fade"}  visible={Modaload} transparent={true}>
                  <ActivityIndicator color={'#548AF0'}  size={50} animating={loading} style={styles.estiloLoading}/>
                </Modal>
              
              {/*Modal da senha*/}
              <Modal animationType={"slide"}  visible={Modalv} transparent={true} backgroundColor={'#f2f2f2'}>
              <KeyboardAvoidingView behavior='padding'style={styles.container}>
                <View style={styles.modal1}>
                  <Text style={styles.FonRec}>Insira sua senha:</Text>
                    <View style={styles.camposenha}>
                        <TextInput
                        style={styles.EntradaTexto1}
                        placeholder='Insira sua senha'
                        autoCorrect={false}
                        onChangeText={Senha => setSenha(Senha)}/>
                        <TouchableOpacity style={styles.btnlg2} onPress={() => { 

                          logaconta();
                          setModaload(true);
                          setLoading(true);
                          setModalv(!Modalv);
                  
                        }}>
                        <Image
                        source={require('../../assets/botao.png')}
                        style={{width: 175, height: 230}}
                        style={styles.Btn1}/>
                        </TouchableOpacity> 
                      </View>
                </View>
                </KeyboardAvoidingView>
              </Modal>


              {/*Entrada do cadastro*/}
                <View>
                  <TouchableOpacity style={styles.Btn2} onPress={irCadastro}>
                    <Text style={styles.Fonte2}>
                      Crie sua conta UD
                    </Text>
                  </TouchableOpacity>
                
           
                {/*Linkagem*/}
                <View style={{flexDirection:'row', alignItems:'center'}}>
                </View>
                  <View style={styles.Links}>
                  <TouchableOpacity
                  onPress={irRecuperar}><Text style={styles.Fonte}> Recuperar senha</Text></TouchableOpacity>
                </View></View>
                <View style={styles.Links}>
                <TouchableOpacity onPress={('')}><Text style={styles.Fonte}>Trabalhe conosco</Text></TouchableOpacity></View>

   </KeyboardAvoidingView>
        </ScrollView>
  );
}


/*Estilos*/
const styles = StyleSheet.create({
  Fonte:{
    fontSize:17,
    marginTop: 15,
   },
   Fonte2:{
    fontSize:19,
    marginTop: 10,
    color: 'white',
    alignSelf:'center',
  },
  FonRec:{
    fontSize: 22,
    marginTop: 15,
    justifyContent: 'center',
    textAlign:'center',
   color:'#35AAFF',
  },
  btnlg2:{
    marginStart: -12,
  },
   Corpo:{
     flex: 1,
     backgroundColor: '#F2F2F2',
    },
    txspl:{
      textDecorationLine: 'underline',
      fontSize: 17,
      marginTop: 10,
      marginEnd: 5,
    },
   Logo:{
     flex: 1,
     marginTop: 90, 
     alignItems: 'center',
     justifyContent:'center',
   },
 
  Splash:{
    fontSize:20, 
    textAlign:'right',
    flexDirection:'row',
    alignSelf:'flex-end',
    marginTop: 15,
    marginEnd: 20,
   },
 
  EntradaTexto:{
    backgroundColor:'white',
    width: '77%',
    color:'#222',
    fontSize: 17,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 12,
    marginStart: 25,
  },
  EntradaTexto1:{
    backgroundColor:'white',
    width: 250,
    color:'#222',
    fontSize: 17,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    padding: 12,
    marginStart: 35,
    margin: 3,
  },
 
  Btn1:{
    width: 50,
    height:50,
  },
  Btn2:{
    backgroundColor:'#35AAFF',
    width: 250,
    height: 50,
    fontSize: 30,
    borderRadius: 15,
    color:'white',
    marginTop: -12,
    alignSelf:'center',
  },
  Links:{
   flexDirection:'row',
   alignItems:'center',
   alignSelf:'center',
  },
  modal1:{
    width: 375,
    height: 130,
    borderColor: '#3AB4EE',
    borderWidth: 3,
    borderRadius: 3,
    backgroundColor: '#f2f2f2',
    alignSelf:'center',
    marginTop: 130,
    borderRadius: 15,
    flex: 0,
  },
  camposenha:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center'
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  estiloLoading: {
    flex:1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ffffff',
  },
 });