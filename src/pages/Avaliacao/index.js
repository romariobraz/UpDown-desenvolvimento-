import React, { useState } from 'react';
import { View, Platform, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function Avaliacao(props){

    const [avaliacao, setAvaliacao] = useState(props.avaliacao);
    const [maxAvaliacao, setMaxAvaliacao] = useState(5);

    Star = require('../../assets/star_filled.png')
    StarBorder = require('../../assets/star_corner.png')

    function updateRating(key){
        setAvaliacao(key);
    }
    let reactNativeBar = []
    for(let i = 1; i <= maxAvaliacao; i++){
        reactNativeBar.push(
            <TouchableOpacity
                activeOpacity={0.5}
                key={i}
            >
                <Image
                style={styles.starImg}
                source={
                    i <= avaliacao
                    ? Star
                    : StarBorder
                }
                />
            </TouchableOpacity>
        );
    }
    return(
        <View style={styles.container}>
            <View style={styles.avaliacao}>{reactNativeBar}</View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS==='ios'?20:0,
    },
    avaliacao:{
        justifyContent: 'center',
        flexDirection: 'row',
        
    },
    starImg:{
        width: 20,
        height: 20,
        resizeMode: 'cover',
    }

})