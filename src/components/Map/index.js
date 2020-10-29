const { RefreshControlComponent } = require("react-native");

import React, {Component,Fragment} from 'react';
import MapView, {Marker} from 'react-native-maps'
import Search from '../Search';
import Menu from '../Menu';
import Directions from '../Directions';
import Details from '../Details';
import AguardPedido from '../AguardPedido';
import { getPixelSize } from '../../utils';
import { View,Text,StyleSheet} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import markerImage from '../../assets/spot.png';
import pinoLocalizacao from '../../assets/localizacao.png';

class Map extends Component{

// Pega localização do usuário
constructor(props){
    super(props);
    this.state = {
        region:{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 0.0022,
            longitudeDelta:  0.0121
        },
        destination: null,
        confirmado: false
    
}
}

confirmarRecolhimento = () => {
    this.setState({
        confirmado: true
    })
}

  //fecha o container de destino

  back = () => {
    this.setState({
        destination: null,
        confirmado: false
    })
}

   async componentDidMount(){
       Geolocation.getCurrentPosition(
           ({coords:{latitude,longitude}}) => {
               this.setState({
                   region:{
                       latitude,
                       longitude,
                       latitudeDelta: 0.0022,
                       longitudeDelta:  0.0121
                   }
               });
           },//sucesso
           () => {}, //erro
       );
   }
   
   // Pega localização selecionada e mostra o destino

   handleLocationSelected = (data,{geometry}) => {
    const{location:{lat: latitude, lng: longitude}} = geometry;

    this.setState({
        destination:{
            latitude,
            longitude,
            title: data.structured_formatting.main_text,
        },
    });
}
  
    render(){

    const {region,destination,confirmado} = this.state;
    
    return(
  <View style={{flex:1}}>

        
        <MapView
        
            style={{flex:1}}
            region={region}
            showsUserLocation
            showsMyLocationButton={false}
            showsCompass={false}
            loadingEnabled
            ref={el => this.mapView = el}
            >
            <Marker
            coordinate={region}
            image={pinoLocalizacao}
            />
            { destination && (
                <Fragment>
                    <Directions
                    origin={region}
                    destination={destination}
                    onReady={result =>{
                        
                         //arredonda a duracao da corrida
                         //this.setState({duration: Math.floor(result.duration)});
                        
                        // controla visualizacao do map quando seleciona a rota
                        this.mapView.fitToCoordinates(result.coordinates,{
                            edgePadding:{
                                right:getPixelSize(85),
                                left:getPixelSize(85),
                                top:getPixelSize(75),
                                bottom:getPixelSize(350)
                            }
                        });   
                    }}
                    />

                    <Marker coordinate={destination} image={markerImage}/>
                    
                    <Marker coordinate={region}>
                        <Text></Text>
                    </Marker>
                </Fragment>
             )}
             
        </MapView> 
        { destination ?
                 <Fragment>
                    {/* <Back onPress={this.handleBack}>
                        <Image source={backImage}/>
                    </Back> */}
                    <Details
                    back = {this.back}
                    confirmarRecolhimento = {this.confirmarRecolhimento}
                    />
                    {confirmado && 
                    <Fragment>
                        <Directions
                                origin={region}
                                destination={destination}
                                onReady={ result =>{
                                    // this.setState({
                                    //     duration: Math.floor(result.duration)
                                    // })
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding:{
                                            right:getPixelSize(85),
                                            left:getPixelSize(85),
                                            top:getPixelSize(75),
                                            bottom:getPixelSize(350),
                                        }
                                    });
                                    
                                }}
                            />
                        <AguardPedido 
                            visivel = {true}
                            back = {this.back}
                        />
                    </Fragment>
                }
                 </Fragment> :
                 <Search onLocationSelected={this.handleLocationSelected}/>
                }      
               
               {
                   destination ? !confirmado : <Menu/>
               }
               
  </View>
    );
}
}

const styles = StyleSheet.create({
locationBox:{
    backgroundColor: '#548AF0',
    shadowColor: '#000',
    shadowOffset: {  width: 10,  height: 10 },
    shadowOpacity: 1.0,
    elevation: 1,
    borderWidth: 1,
    borderColor:'#ddd',
    borderRadius: 3,
    flexDirection:'row',
    fontSize:14,
    color:'#FFF',
    paddingTop:1,
    paddingLeft:3,
    paddingBottom:1,
    paddingRight:3
    
}
});

export default Map;