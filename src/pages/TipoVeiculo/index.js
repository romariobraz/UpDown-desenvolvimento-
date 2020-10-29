import React, { useState, useRef} from 'react';
import { View,Text, StyleSheet, Image, TouchableOpacity, TextInput, Keyboard, Switch} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Modalize } from 'react-native-modalize';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';

import carroComum from '../../assets/carroComum-bola.png';
import carroUtilitario from '../../assets/carroUtilitario-bola.png';
import moto from '../../assets/moto-bola.png';
import imgMotoboy from '../../assets/moto.png';
import imgCarroComum from '../../assets/carroComum.png';
import imgCarroUtilitario from '../../assets/carroUtilitario.png';
import back from '../../assets/seta.png';
import camera from '../../assets/camera.png';
import agendamento from '../../assets/agendamento.png';
import fotoConfirmada from '../../assets/foto-confirme.png';



export default function TipoVeiculo(props) {

    const AppStack = useNavigation();
    const modalizeRef = useRef(null);

    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [pickerAgendar, setPickerAgendar] = useState(false);
    const [tipoVeiculo, setTipoVeiculo] = useState(0);
    const [status, setStatus] = useState(false);
    const [descricao, setDescricao] = useState('');
    const [deletarFoto, setDeletarFoto] = useState(false);
    
    
    function irTipoVeiculo(){
       AppStack.navigate('Mapa', {deletar: true});
    }

    function abrirCamera(){
       AppStack.navigate('Camera');
    }

    function abrirModalizeCC(){
        setTipoVeiculo(1);
        modalizeRef.current?.open();
    }
    function abrirModalizeCU(){
        setTipoVeiculo(2);
        modalizeRef.current?.open();
    }
    function abrirModalizeM(){
        setTipoVeiculo(3);
        modalizeRef.current?.open();
    }

    function guardarData(data){
        
        setHora("Hora: "+ data.toLocaleTimeString());
        setData("Data: "+ data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());
        setPickerAgendar(false);
    }

    function cancelar(){
        setPickerAgendar(false);
    }

    function agendar(){
        setPickerAgendar(true);
    }

    function imgVeiculo(){
        switch(tipoVeiculo){
          case 1:
            return imgCarroComum;
          case 2:
            return imgCarroUtilitario;
          case 3:
            return imgMotoboy;
        }
    }
    function finalizar(){
        if(descricao == ''){
            alert('Campo descrição é obrigatório!');
        }else{
            switch(tipoVeiculo){
                case 1:
                    setTipoVeiculo(props.selecionarCarroComum);
                    return;
                case 2:
                    setTipoVeiculo(props.selecionarCarroUtilitario);
                    return;
                case 3:
                    setTipoVeiculo(props.selecionarMoto);
                    return;
            }
        } 
    }
    function deletar(){
        if(props.foto != null){
            setDeletarFoto(true);
        }
    }
    return (
        <Container>
            <View style={styles.container}>

                <View style={styles.areaCabeçalho}>
                    <View style={styles.areaImgCabeçalho}>
                        <TouchableOpacity onPress={props.back}>
                            <Image
                                source={back}
                                style={styles.imgBack}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.areaTxtCabeçalho}>
                        <Text style={styles.txtCabeçalho}>Escolha o veículo</Text>
                    </View>
                </View>
                <View style={styles.areaImg}>
                    <View>
                        {/* props.selecionarCarroComum */}
                        <TouchableOpacity onPress={abrirModalizeCC}>
                            <Image
                                source={carroComum}
                                style={styles.imgCarroComum}
                            />
                            <Text style={styles.txtImg}>Carro</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={abrirModalizeCU}>
                        <Image
                            source={carroUtilitario}
                            style={styles.imgCarroUtilitario}
                        />
                        <Text style={styles.txtImg}>Utilitário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={abrirModalizeM}>
                        <Image
                            source={moto}
                            style={styles.imgMoto}
                        />
                        <Text style={styles.txtImg}>Moto</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modalize
            ref={modalizeRef}
            snapPoint={750}
            >
                <View style={styles.areaTxt}>
                    <View style={styles.areaCabecalho}>
                        <Text style={styles.txtCabeçalho}>Detalhes</Text>
                    </View>
                    <View style={styles.areaTipoVeiculo}>
                        <Image
                        source={imgVeiculo()}
                        style={styles.imgTipoVeiculo}
                        />
                    </View>
                    <Text style={styles.txtModalize}>Descrição do produto:</Text>
                    <TextInput
                    style={styles.input}
                    multiline={true}
                    returnKeyType='Fim'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(text) => setDescricao(text)}
                    />
                    <View style={styles.areaCamera}>
                        <TouchableOpacity style={styles.bntCamera} onPress={abrirCamera}>
                            <Image
                            style={styles.imgCamera}
                            source={camera}
                            />
                            {
                            props.foto != null && props.deletarFoto != true
                            ?
                            <View style={styles.areaFotoConfirmada}>
                                <Text style={styles.txtCamera} >imagem.jpg</Text>
                                <Image
                                source={fotoConfirmada}
                                style={styles.imgFotoConfirmada}
                                />
                            </View>  
                            :
                            <Text style={styles.txtCamera}>Tire uma foto do produto</Text>
                            }
                        </TouchableOpacity>
                        {
                        props.deletarFoto == true || props.deletarFoto != null
                        &&
                        <TouchableOpacity onPress={irTipoVeiculo} style={styles.bntDeletar}>
                                    <Text style={styles.txtDeletar}>Deletar</Text>
                        </TouchableOpacity>
                        }
                    </View>
                    <View style={styles.areaAgendamento}>
                        <View style={styles.areaAgendar}>
                            <Text style={styles.txtModalize}>Agendar:</Text>
                            <Switch
                            value={status}
                            onValueChange={(valor) => setStatus(valor)}
                            />
                        </View>
                        {status &&
                        <View style={styles.areaBtnTxtAgendamento}>
                            <TouchableOpacity onPress={agendar} style={styles.bntAgendamento}>
                                <Image
                                style={styles.imgAgendamento}
                                source={agendamento}
                                />
                            </TouchableOpacity>
                            <View style={styles.areaTxtAgendamento}>
                                <Text style={styles.txtAgendamento}>{data}</Text>
                                <Text style={styles.txtAgendamento}>{hora}</Text>
                            </View>
                        </View>
                        }
                        <DateTimePickerModal
                        isVisible={pickerAgendar}
                        onConfirm={guardarData}
                        onCancel={cancelar}
                        mode='time'
                        />
                    </View>
                    <View style={styles.areaBtn}>
                        <TouchableOpacity onPress={finalizar} style={styles.btn}>
                            <Text style={styles.txtBtn}>Finalizar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modalize>
        </Container>
    );
}

const styles = StyleSheet.create({
    areaCabeçalho:{
        flexDirection: 'row',
    },
    areaTxtCabeçalho:{
        alignItems: 'center',
        marginRight: '30%',
    },
    txtCabeçalho:{
        fontSize: 20
    },
    areaImg:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },
    imgBack:{
        marginRight: '20%',
        width: 40,
        height: 40,
    },
    imgCarroComum:{
        width: 80,
        height: 80,
        margin: 20,
        marginTop: 30,
        justifyContent: 'center',
    },
    imgCarroUtilitario:{
        width: 80,
        height: 80,
        margin: 20,
        marginTop: 30
    },
    imgMoto:{
        width: 80,
        height: 80,
        margin: 20,
        marginTop: 30
    },
    txtAgendamento:{
        fontSize: 15
    },
    txtImg:{
        textAlign: 'center',
        fontSize: 20
    },
    modalAgendamento:{
        flex: 1,
        height: 180,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaCabecalho:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    txtModalize:{
        margin: 5,
    },
    input:{
        margin: 5,
        padding: 5,
        height: 100,
        width: 350,
        borderWidth: 1,
        borderColor: '#000'
    },
    areaBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
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
        width: 350,
        borderRadius: 10,
        marginTop: 30
    },
    areaCamera:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    bntCamera:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtCamera:{
        margin: 5,
        color: '#ccc'
    },
    imgCamera:{
        width: 30,
        height: 30,
        margin: 5,
    },
    areaAgendamento:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    areaAgendar:{
        flexDirection: 'row'
    },
    areaTxtAgendamento:{
        flexDirection: 'column',
    },
    imgAgendamento:{
        width: 30,
        height: 30,
        margin: 5,
    },
    bntAgendamento:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtAgendamento:{
        color: '#000',
    },
    areaBtnTxtAgendamento:{
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    areaTipoVeiculo:{
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
    },
    areaFotoConfirmada:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgFotoConfirmada:{
        width: 15,
        height: 15,
    },
    bntDeletar:{
        borderRadius: 10,
        backgroundColor: '#265CA8',
        width: 55,
        margin: 5
    },
    txtDeletar:{
        textAlign: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 12       
    },

})