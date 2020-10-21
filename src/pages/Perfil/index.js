import React,{useState,useContext } from 'react';
import { View, 
   Text,
   StatusBar,
   TouchableOpacity,
   Image,StyleSheet,
   TextInput,
   Button,
   KeyboardAvoidingView,
   ScrollView,
   Modal,} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth';



export default function Perfil() {

  const navigation = useNavigation();

  const[modalSenha,setModalSenha] = useState(false);
  const[password,setPassword] = useState('');
  const[data,setData] = useState();
  const[phone,setPhone] = useState('83986965632');

  const{user} = useContext(AuthContext);

 

  StatusBar.setBarStyle( 'light-content',true);
  StatusBar.setBackgroundColor('#548AF0');

 
 return (

  <ScrollView keyboardShouldPersistTaps={true}>
      <KeyboardAvoidingView styles={{flex:1}}>

        <View style={{borderBottomWidth:2,borderBottomColor:'rgba(84, 138, 240,0.3)',marginBottom:20}}>

            <TouchableOpacity style={styles.imgProfile} >
            
              <Image source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
              style={styles.imgProfile}/>

              <Image source={require('../../assets/edit.png')}
              style={{width:30,height:30,position:'absolute',marginLeft:10,marginTop:95}}/>

            </TouchableOpacity>
        </View>
          
            

            <View style={styles.opcoes}>

              <Text style={styles.text}>Nome:</Text>
              <TextInput
                            style={styles.EntradaTexto1}
                            defaultValue={user && user.Nome}
                            autoCorrect={false}
                            />

            </View>

            <View style={styles.opcoes}>

              <Text style={styles.text}>Telefone:</Text>
              <TextInputMask
                  style={styles.EntradaTexto1}
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  value={phone}
                  onChangeText={text => {
                    setPhone(text);
                  }}
                />

            </View>

            <View style={styles.opcoes}>

              <Text style={styles.text}>E-mail:</Text>
              <TextInput
                            style={styles.EntradaTexto1}
                            defaultValue={user && user.Email}
                            autoCorrect={false}
                            />

            </View>

            <View style={styles.opcoes}>

              <Text style={styles.text}>Data de nascimento:</Text>

              <TextInputMask 
                          style={styles.EntradaTexto1}
                          type={'datetime'}
                          options={{
                             format: 'DD/MM/YYYY'
                          }}
                          value={user.Idade}
                          onChangeText={text => {
                            setData(text);
                          }}/>
            </View>

            <View style={styles.opcoes}>

              <Text style={styles.text}>Senha:</Text>
              <TextInput
                            style={styles.EntradaTexto1}
                            defaultValue='teste123'
                            onFocus={() => setModalSenha(true)}
                            autoCorrect={false}
                            secureTextEntry={true}/>

            </View>

            <View  style={styles.botaoSalvar} >
              <Button title='Salvar'/>
            </View>

              
              <Modal animationType={"slide"}  visible={modalSenha} transparent={true}>
                
                <ScrollView keyboardShouldPersistTaps={true} style={{backgroundColor:'rgba(255, 255, 255,0.8)'}}>
                  <View style={styles.modalSenha} >

                      <View>

                        <TouchableOpacity 
                        style={{width:30,height:30,borderRadius:50,marginLeft:-5,
                        marginTop:-5  ,backgroundColor:'#fff'}}
                        onPress={() => {
                          setModalSenha(!modalSenha);
                        }}>

                        <Image
                        style={{width:30,height:30}}
                        source={require('../../assets/close.png')}
                        />
                        </TouchableOpacity>

                      </View>

                        <Text style={styles.text}>Senha:</Text>
                        <TextInput
                                      style={styles.EntradaTexto1}
                                      defaultValue='teste123'
                                      autoCorrect={false}
                                      secureTextEntry={true}/>
         


                        <Text style={styles.text}>Nova senha:</Text>
                        <TextInput
                                      style={styles.EntradaTexto1}
                                      defaultValue='teste123'
                                      autoCorrect={false}
                                      secureTextEntry={true}/>
                    
                    

                        <Text style={styles.text}>Digite novamente:</Text>
                        <TextInput
                                      style={styles.EntradaTexto1}
                                      defaultValue='teste123'
                                      autoCorrect={false}
                                      secureTextEntry={true}/>

                          

                        <View  style={styles.botaoSalvar} >
                          <Button title='Redefinir'/>
                        </View>
                  </View>
                </ScrollView>
                
              </Modal>

      </KeyboardAvoidingView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgProfile:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 10,
    alignSelf:'center',
    marginBottom:30,
  },
  icon:{
    width:45,
    height:45,
    marginRight: 4,
    alignSelf:'center',
    marginTop:-2,
    marginLeft:10
  },
  text:{
    height:50,
    fontSize:18, 
    marginTop:5,
    marginBottom:-20,
    marginLeft:'5%'

  },
  opcoes:{

    alignSelf:'flex-start',
    marginBottom:5,
  },
  EntradaTexto1:{
    backgroundColor:'#FFF',
    width: 250,
    color:'#222',
    fontSize: 17,
    marginLeft:'5%',
    borderRadius:10
  },
  botaoSalvar:{

    marginRight:'10%',
    marginLeft:'10%',
    marginTop:'8%',
  
  },
  modalSenha:{
    height:'45%',
    marginTop:'55%',
    marginBottom:'55%',
    marginLeft:'15%',
    marginRight:'17%',
    backgroundColor:'#35AAFF',
    borderRadius:45
  },
});