import React from 'react';
import { View, Text, StatusBar,TouchableOpacity,Image,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Perfil() {
  const navigation = useNavigation();

  function irPerfil(){
    navigation.navigate('Perfil');
  }

  StatusBar.setBarStyle( 'light-content',true);
  StatusBar.setBackgroundColor('#548AF0');

 return (
   <View styles={{flex:1}}>
     
     <Image
          source={{uri:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}}
          style={styles.imgProfile}/>

     <View style={{flex:1}}>

     <TouchableOpacity style={styles.opcoes1}>

      <Image  style={styles.icon} source={{uri:'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png'}}/>
      <Text style={styles.text}>Configuracoes</Text>

     </TouchableOpacity>

     <TouchableOpacity style={styles.opcoes}>

      <Image  style={styles.icon} source={{uri:'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png'}}/>
      <Text style={styles.text}>Configuracoes</Text>

     </TouchableOpacity>

     <TouchableOpacity style={styles.opcoes}>

      <Image  style={styles.icon} source={{uri:'https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png'}}/>
      <Text style={styles.text}>Configuracoes</Text>

     </TouchableOpacity>
      

    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  imgProfile:{
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 140,
    marginTop: 25
  },
  icon:{
    width:30,
    height:30,
    marginTop:-14,
    marginRight: 4
  },
  text:{
    height:50,
    fontSize:15,
    fontWeight:'bold',  
    alignContent:'center',
    marginTop:-10
  },
  opcoes:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    marginTop:30,
    borderBottomWidth:1,
    padding:20,
    marginBottom:-30
  },
  opcoes1:{
    flex:1,
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center',
    marginTop:30,
    borderBottomWidth:1,
    padding:20,
    marginBottom:-30,
    borderTopWidth:1
  }
});