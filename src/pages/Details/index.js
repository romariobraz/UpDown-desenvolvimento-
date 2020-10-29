import React, { Component } from 'react';

import { Container } from './styles';
import usuario from '../../assets/eu.png';
import back from '../../assets/seta.png';
import formaPagamento from '../../assets/forma-pagamento.png';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


class Details extends Component{

      
    render(){
        return (
        <Container>

            <View style={styles.areaPedido}>

            <View style={styles.areaCabeçalho}>
                <View style={styles.areaImgCabeçalho}>
                    <TouchableOpacity onPress={this.props.back}>
                        <Image
                            source={back}
                            style={styles.imgBack}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.areaTxtCabeçalho}>
                    <Text style={styles.txtCabeçalho}>Popular</Text>
                </View>
                <View style={styles.areaValor}>
                    <Text style={styles.txtValor}>R$150,00</Text>
                </View>
            </View>

            <View style={styles.areaUsuario}>
                <View>
                    <Image 
                        source={usuario}
                        style={styles.imgUsuario}
                    />
                </View>

                <View style={styles.areaTxtUsuario}>
                    <Text style={styles.txt}>Nome: Namikoka</Text>
                    <Text style={styles.txt}>Ranking: 1000 Estrelas</Text>
                    <Text style={styles.txt}>Coleta: </Text>
                    <Text style={styles.txt}>Entrega: </Text>
                    
                    <Text style={styles.txt}>Tempo: 30 MIN</Text>
                </View>
            </View>

            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn} onPress={this.props.confirmarRecolhimento}>
                    <Text style={styles.txtBtn}>Solicitar Entrega</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnPagamento} onPress={() => {}}>
                    <Image 
                        source={formaPagamento}
                        style={styles.imgFormaPagamento}
                    />
                </TouchableOpacity>
            </View>

        </Container>
        );
    }
}

export default Details;

const styles = StyleSheet.create({
    areaCabeçalho:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaTxtCabeçalho:{
        marginLeft: '15%'
    },
    areaImgCabeçalho:{
        marginRight: '18%'
    },
    areaValor:{
        marginLeft: '18%'
    },
    areaPedido:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    areaUsuario:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        marginTop: '10%'
    },
    areaTxtUsuario:{
        flexDirection: 'column',
        padding: 10,
        width: 300,
    },
    areaBtn:{
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderTopWidth: 0.8,
        marginTop: '25%'
    },
    imgBack:{
        width: 40,
        height: 40,
    },
    txtValor:{
        fontSize: 20,
    },
    imgUsuario:{
        height: 80,
        width: 80,
        borderRadius: 35,
    },
    txtCabeçalho:{
        color: '#222',
        fontSize: 20,
    },
    txtLema:{
        color: '#666',
        fontSize: 14,
    },
    txt:{
        color: '#222',
        fontSize: 14,
    },
    txtBtn:{
        color: '#fff',
        fontSize: 18,
    },
    btn:{
        backgroundColor: '#265CA8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: 300,
        borderRadius: 10,
        marginRight: 20
    },
    imgFormaPagamento:{
        height:55,
        width:55,
    }
})