import React,{useContext} from 'react';
import {AuthContext} from '../contexts/auth';
import { View,ActivityIndicator,StyleSheet} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes(){

    const {signed,loading} = useContext(AuthContext);

    if(loading){
      return(
      <View style={styles.estiloLoading}>
        <ActivityIndicator color={'#fff'}  size={50} />
      </View>
      )
    }

    return(

      signed ? <AppRoutes/> : <AuthRoutes/>

    )
}

export default Routes;

const styles = StyleSheet.create({
  estiloLoading: {
    flex:1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#548AF0',
  },
});