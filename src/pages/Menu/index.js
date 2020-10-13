import React, { useState, useContext } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View, TouchableOpacityBase
} from "react-native";
import firebase from '../../database/firebaseconfig';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { AutContext } from '../../dados';

const Menu = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [icone,setIcone] = useState(require('../../assets/arrowUp.png'));
  const[iconeD,setIconeD] = useState(require('../../assets/arrowDown.png'));
  const{user} = useContext(AutContext);

  const navigation = useNavigation();

  function irPerfil(){

    setModalVisible(!modalVisible);
    setIcone(require('../../assets/arrowUp.png'));
    navigation.navigate('Perfil');
  
  }

  function irHistorico(){

    setModalVisible(!modalVisible);
    setIcone(require('../../assets/arrowUp.png'));
    navigation.navigate('Historico');
  
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
          <View style={styles.menu}>
            
            <Image
                  source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
                  style={styles.imgProfile}/>

             
             <Text style={{fontWeight:'bold',fontSize:20,padding:5,color:'#222'}}>Nome Usuário</Text>
                  
                  
                  <View style={styles.ajudatextobtn}>
                    <TouchableOpacity style={{width:55}}>
                      <Text style={styles.ajudaTexto}>Ajuda</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity onPress={irPerfil}>
                      <Text style={styles.perfilTexto}>Editar Perfil</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={irHistorico}>
                    <LinearGradient style={styles.menuBtn}colors={['#FFF','#DDD']}>
                        <Image style={styles.btnText} source={require('../../assets/historico.png')}/>
                        <Text style={styles.menuTexto}>Histórico</Text>
                        
                    </LinearGradient>
                  </TouchableOpacity>

               
                  <TouchableOpacity onPress={irHistorico}>
                    <LinearGradient style={styles.menuBtn}colors={['#FFF','#DDD']}>
                        <Image style={styles.btnText} source={require('../../assets/pagamento.png')}/>
                        <Text style={styles.menuTexto}>Pagamento</Text>
                        
                    </LinearGradient>
                  </TouchableOpacity>
                
                  <TouchableOpacity onPress={irHistorico}>
                    <LinearGradient style={styles.menuBtn}colors={['#FFF','#DDD']}>
                        <Image style={styles.btnText} source={require('../../assets/sobre.png')}/>
                        <Text style={styles.menuTexto}>Sobre</Text>
                        
                    </LinearGradient>
                  </TouchableOpacity>

        
                  <TouchableOpacity>
                   <Image style={styles.menuBtn} source={require('../../assets/versaopremium.png')}/>
                  </TouchableOpacity>

            

                <View style={styles.sairtextobtn}>
                  <TouchableOpacity onPress={irPerfil}>
                    <Text style={styles.sairTexto}>Sair</Text>
                  </TouchableOpacity>
                </View>

              
                <TouchableOpacity 
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    setIcone(require('../../assets/arrowUp.png'));
                  }}
                  style={styles.touchArea} >
                  <Image source={iconeD} style={styles.icon}  />
                </TouchableOpacity>

          </View>
      </Modal>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
          setIcone(null);
        }}>
        <Image style={styles.icon} source={icone} />
      </TouchableOpacity>
      
    </View>
  );
};


const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:60,
    alignItems:'center',
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    position:'absolute',
    marginTop:'175%',
  },
  icon:{
      width:70,
      height:70,
  },
  btnText:{
    height:42,
    width:40,
    marginLeft:'-3%',
    marginTop:-6
  },
  menu:{
    backgroundColor: '#FFF',
    alignItems:'center',
    marginLeft:45,
    marginRight:45,
    flex:1,
    marginTop:'85%',
    marginBottom:'18%',
    borderRadius:40
  },
  imgProfile:{
    width: 120,
    height: 120,
    borderRadius:65,
    borderWidth:3,
    borderColor:'#35AAFF',
    marginBottom:5,
    marginTop:-60,
  },
  menuBtn:{
    width:250,
    height:40,
    backgroundColor:'#FFF',
    borderRadius:5,
    margin:5,
    padding: 5,
    alignContent:'flex-start',
    alignItems:'flex-start'
  },
  menuTexto:{
    textAlign:'left',
    fontSize: 20,
    paddingTop:5,
    color:'#222',
    position:'absolute',
    marginLeft:'20%'
  },
  sairTexto:{
    fontSize:18,
    color:'#878787',
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  sairtextobtn:{
    marginLeft:230,
    padding:10,
    marginBottom:'5%',
    marginTop:0,
  },
  perfilTexto:{
    fontSize:16,
    color:'#878787',
    fontWeight:'bold',
    textDecorationLine:'underline',
    marginBottom:10,
    marginTop: -6,
  },
  ajudaTexto:{
    fontSize:18,
    color:'#878787',
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  ajudatextobtn:{ 
    marginTop: 18,
    position:'absolute',
    width:'100%',
    paddingLeft:30
  },
  touchArea:{
    width:'22%',
    height:'22%',
    marginTop:-60,
  }
});

export default Menu;
