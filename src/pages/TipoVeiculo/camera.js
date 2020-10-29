import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, StatusBar, Modal, PermissionsAndroid, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import ImagePicker from 'react-native-image-picker';

import foto from '../../assets/camera-lens.png';
import galeria from '../../assets/gallery.png';
import back from '../../assets/seta-para-tras.png';
import confirmar from '../../assets/confirmar.png';
import fechar from '../../assets/fechar.png';


export default function Camera() {

    const AppStack = useNavigation();

    const [type, setType] = useState(RNCamera.Constants.Type.back);
    const [open, setOpen] = useState(false);
    const [capturedPhoto, setCapturedPhoto] = useState(null);

    function voltar(){
        AppStack.goBack();
    }
    function irTipoVeiculo(){
        setOpen(false);
        AppStack.navigate('Mapa', {fotoSalva: capturedPhoto, deletar: false});
    }
    async function takePicture(camera){
        const options = {quality: 0.5, base64: true}
        const data = await camera.takePictureAsync(options);
        setCapturedPhoto(data.uri);
        setOpen(true);
        savePicture(data.uri);
    }

    async function hasAndroidPermission(){
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;

        const hasPermission = await PermissionsAndroid.check(permission);
        if(hasPermission){
            return true;
        }

        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    }
    async function savePicture(data){
        if(Platform.OS === 'android' && !(await hasAndroidPermission())){
            return;
        }
        CameraRoll.save(data, 'photo')
        .then((res) => {
            console.log('SALVO COM SUCESSO: ' + res);
        })
        .catch((err) => {
            console.log('ERRO AO SALVAR: ' + err);
        })
    }

    function openAlbum(){
        const options = {
            title: 'Selecione uma foto',
            chooseFromLibaryButtonTitle: 'Buscar foto do album',
            noData: true,
            midiaType: 'photo'
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            if(response.didCancel){

            }else if(response.error){

            }else{
                setCapturedPhoto(response.uri);
                setOpen(true);
            }
        })
    }

    return (
    <View style={styles.container}>
        <StatusBar hidden={true}/>
        <RNCamera
        style={styles.preview}
        type={type}
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
            title: 'Permissão para usar câmera',
            message: 'Nós precisamos usar a sua câmera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancelar'
        }}
        >
            {( {camera, status, recordAndroidPermissionStatus} ) => {
                if(status !== 'READY') return <View/>;
                return(
                    <View style={styles.bnts}>
                        <TouchableOpacity onPress={voltar} style={styles.capture}>
                            <Image
                            source={back}
                            style={styles.imgs}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> takePicture(camera)} style={styles.capture}>
                            <Image
                            source={foto}
                            style={styles.imgs}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={openAlbum} style={styles.capture}>
                            <Image
                            source={galeria}
                            style={styles.imgs}
                            />
                        </TouchableOpacity>
                    </View>
                );
            }}
        </RNCamera>
        { capturedPhoto &&
            <Modal animationType='slide' transparent={false} visible={open}>
                <View style={styles.areaFoto}>
                    <Image
                    style={styles.foto}
                    resizeMode='contain'
                    source={{uri: capturedPhoto}}
                    />
                    <View style={styles.areaConfFech}>
                        <TouchableOpacity onPress={irTipoVeiculo}>
                            <Image
                            style={styles.imgConfirmar}
                            source={confirmar}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOpen(false)}>
                            <Image
                            style={styles.imgFechar}
                            source={fechar}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        }
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    preview:{
        flex: 1,  
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    bnts:{
        marginBottom: 35,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between'
    },
    capture:{
        flex: 0,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    foto:{
        width: '100%',
        height: '90%'
    },
    areaFoto:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A9A9A9'
    },
    areaConfFech:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgConfirmar:{
        marginRight: 10
    },
    imgFechar:{
        marginLeft: 10
    }

})