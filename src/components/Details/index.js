import React, { Component } from 'react';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';
import usuario from '../../assets/eu.png';
import back from '../../assets/seta.png';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


class Details extends Component{

      
    render(){
        return (
        <Container>

            {/* <TypeTitle>Popular</TypeTitle>
            <TypeDescription>É rápido, fácil e gratuito</TypeDescription>
            <TypeImage source={uberx}/>

            <TypeTitle>Nome</TypeTitle>
            <TypeDescription>R$6,00</TypeDescription>
            

            <RequestButton onPress={this.props.confirmarRecolhimento}>
                <RequestButtonText> SOLICITAR UBERX </RequestButtonText>
            </RequestButton> */}

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
                        <Text style={styles.txtLema}>É rápido, fácil e gratuito</Text>
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
                        <Text style={styles.txt}>Valor: R$15,00</Text>
                        <Text style={styles.txt}>Tempo: 30 MIN</Text>
                    </View>
                </View>

            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn} onPress={this.props.confirmarRecolhimento}>
                    <Text style={styles.txtBtn}>Solicitar Entrega</Text>
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
    },
    areaTxtCabeçalho:{
        alignItems: 'center',
        marginRight: '30%'
    },
    areaImgCabeçalho:{
        
    },
    areaPedido:{
        alignItems: 'center',
        flexDirection: 'column',
    },
    areaUsuario:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    areaTxtUsuario:{
        flexDirection: 'column',
        padding: 10
    },
    areaBtn:{
        marginBottom: 5
    },
    imgBack:{
        marginRight: '25%',
        width: 40,
        height: 40,
        
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
        backgroundColor: '#39b4ef',
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        width: 350,
        borderRadius: 10,
        marginTop: 55
    }

})