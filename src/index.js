const { RefreshControlComponent } = require("react-native");

import React, {Component} from 'react';
import MapView from 'react-native-maps';
import { View,TextInput } from 'react-native';
import Map from './components/Map';

class App extends Component{

  render(){
    return(
  <View style={{flex:1}}>
      <Map/>
  </View>
    );
}
}

export default App;