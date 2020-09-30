import React, {useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import Avaliacao from '../Avaliacao';

export default function Historico(props){

    const [historico, setHistorico] = useState(props.data);

    
    function quatroDigitos(){
        if(historico.metodoPagamento != 'dinheiro'){
            return '**** ' + historico.metodoPagamento.substr(-4, 4)
        }
    }
    function metodoPagamento(){
        let cardInicio = historico.metodoPagamento.substr(0, 2);
        let tipo = require('../../assets/dinheiro.png');

        if(parseInt(cardInicio) >= 51 && parseInt(cardInicio) <= 55){
            tipo = require('../../assets/mastercard.png');
        }else if(parseInt(cardInicio) > 39 ){
            tipo = require('../../assets/visacard.png');
        }
        return tipo;
            
    }

        return(
            <View style={styles.container} >

                <View style={styles.areaTxtData}>
                    <Text style={styles.txtData}>{historico.dataPedido}</Text>
                </View>

                <View style={styles.areaCard}>
                    <View style={styles.card}>
                        <View style={styles.areaHistorico}>

                            <View style={styles.topoCard}>
                                <View style={styles.areaDireita}>
                                    <Text>{historico.nome}</Text>
                                    <Text>{historico.entrega}</Text>
                                </View>
                                <View style={styles.areaValor}>
                                        <Text>{historico.valor}</Text>
                                        <View style={styles.metodoPag}>
                                            <Text style={styles.txtQuatroDigitos}> {quatroDigitos()} </Text>
                                            <Image source={metodoPagamento()} style={styles.imgPagamento} />
                                        </View>
                                </View>
                            </View>

                            <View style={styles.areaEsquerda}>
                                <View style={styles.areaTxtAvaliacao}>
                                    <Text>Avaliação: </Text>
                                </View>
                                <View style={styles.avaliacao}>
                                    <Avaliacao avaliacao={historico.avaliacao}/>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        );
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  '#d9e0e3'
    },
    imgPagamento:{
        width: 35,
        height: 35
    },
    areaCard:{
        borderRadius: 6,
        elevation: 5,
        backgroundColor: '#fff',
        marginHorizontal: 4,
        marginVertical: 6,
        shadowOffset: {width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        shadowColor: '#333',
        width: '90%',
        height: 200,
        justifyContent: 'center',
    },
    card:{
        marginHorizontal: 18,
        marginVertical: 10,
        alignItems: 'center',
    },
    areaTxtData:{
        paddingRight: 190,
        marginTop: 10,
        marginBottom: 5,
    },
    areaEsquerda:{
        borderTopWidth: 0.2,
        shadowColor: '#000',
        flexDirection: 'row',
        
    },
    areaDireita:{
       marginRight: 30,
       width: 210,
       height: 120,   
       //backgroundColor: '#000',
       padding: 5,
    },
    areaValor: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: 100,
        //backgroundColor: '#000'
    },
    areaTxtAvaliacao:{
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '50%',
        padding: 5,
    },
    avaliacao: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '50%',
        height: 50,
        padding: 5
    },
    txtQuatroDigitos:{
        fontWeight: 'bold'
    },
    metodoPag:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    topoCard:{
        flexDirection: 'row',
        justifyContent: 'flex-start',   
    },
    txtData: {
        fontWeight: 'bold'
    }
})