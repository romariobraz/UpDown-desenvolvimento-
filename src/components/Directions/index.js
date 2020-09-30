import React,{Component} from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) =>(

    <MapViewDirections
            destination ={destination}
            origin={origin}   
            onReady={onReady}
            apikey='AIzaSyAO--SsjOIAVgH3NvV7drSVPnIiL-pk2XE'
            strokeWidth={3}
            strokeColor='#548AF0'
    />

);
    
export default Directions;