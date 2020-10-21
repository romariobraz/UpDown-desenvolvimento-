import React, {Component} from  'react';
import { View, Text, Animated, Image, StyleSheet, TouchableOpacity} from 'react-native';

import { Container } from './styles';

export default class AguardPedido extends Component{
  constructor(props){
    super(props);
    this.state = {
      imgMotoboy: require('../../assets/entrega.png'),
      imgPlaca1: require('../../assets/naoconfirme.png'),
      imgPlaca2: require('../../assets/naoconfirme.png'),
      imgVoltar: require('../../assets/voltar-esquerda.png'),

      motoAnimada: new Animated.Value(0),
      motoAnimada2: new Animated.Value(150),
      motoOpacity: new Animated.Value(1),
      motoOpacity2: new Animated.Value(1),
      mudarAnimacao: 0,
      translateX: 0,
      opacity: 1,

      txtPrazoRec: '',
      txtHoraRec: '',
      txtPrazoEnt: '',
      txtHoraEnt: '',

      visivel: this.props.visivel,

      mostrar: true

      
    }
    this.animacao = this.animacao.bind(this);
    this.animacao2 = this.animacao2.bind(this);
  }

  async componentDidMount(){
      this.animacao()
  }

  modalAcompanhePedido = () => {
      this.animacao()
  }
  animacao(){
    this.setState({translateX: this.state.motoAnimada, 
                    opacity: this.state.motoOpacity,
                    txtPrazoRec: 'Prazo de Recolhimento',txtHoraRec: '12:00 ~ 12:30'})
      Animated.loop(
        Animated.sequence([
          Animated.timing(
            this.state.motoAnimada,
            {
              toValue: 150,
              duration: 1500,
              useNativeDriver: false
            }
          ),
            Animated.timing(
              this.state.motoOpacity,
              {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
              }
            )
        ])
      ).start();
    }
    animacao2(){
      this.setState({translateX: this.state.motoAnimada2,
                      opacity: this.state.motoOpacity2,
                      imgPlaca1: require('../../assets/confirme.png'),
                      txtPrazoRec: '',txtHoraRec: '',
                      txtPrazoEnt: 'Prazo de Entrega',txtHoraEnt: '12:30 ~ 13:00',
                      mostrar: false})
      Animated.loop(
        Animated.sequence([
          Animated.timing(
            this.state.motoAnimada2,
            {
              toValue: 280,
              duration: 1500,
              useNativeDriver: false
            }
          ),
            Animated.timing(
              this.state.motoOpacity2,
              {
                toValue: 0,
                duration: 500,
                useNativeDriver: false
              }
            )
        ])
      ).start()
    }
    cancelar = () => {
        this.setState({
            
        })
    }
  render(){
    return(
        <Container>
            <View style={styles.popupAguardandoPedido}>
                <View style={styles.cabecalho}>
                <Text style={{color: '#222',fontSize: 20, marginTop: 10}}>Acompanhe seu Pedido</Text>
                </View>

                <View style={styles.areaPrazos}>
                <View style={styles.txtPrazoRecolhimento}>
                    <Text style={styles.txtPrazos}>{this.state.txtPrazoRec}</Text>
                    <Text style={styles.txtPrazos}>{this.state.txtHoraRec}</Text>
                </View>

                <View style={styles.txtPrazoEntrega}>  
                    <Text style={styles.txtPrazos}>{this.state.txtPrazoEnt}</Text>
                    <Text style={styles.txtPrazos}>{this.state.txtHoraEnt}</Text>
                </View>
                </View>

                <View style={styles.areaGeral}>
                <Animated.View style={{transform: [{translateX: this.state.translateX}],
                                        opacity: this.state.opacity,
                                        marginRight: '30%', marginLeft: 30}}>
                    <Image
                    style={styles.imgMotoboy}
                    source={this.state.imgMotoboy}
                    />
                </Animated.View>

                <View style={styles.areaPlacas}>
                    <Image
                    style={styles.imgPlacas}
                    source={this.state.imgPlaca1}
                    />
                    <Image
                    style={styles.imgPlacas}
                    source={this.state.imgPlaca2}
                    />
                </View>
                </View>
                
                <View style={styles.areaBtns}>
                    <TouchableOpacity style={styles.btnConfirmar} onPress={this.animacao2}>
                        <Text style={styles.txtConfirmar}>Confirmar</Text>
                    </TouchableOpacity>
                    { this.state.mostrar &&
                    <TouchableOpacity style={styles.btnCancelar} onPress={this.props.back}>
                        <Text style={styles.txtCancelar}>Cancelar</Text>
                    </TouchableOpacity>
                    }
                </View>
                
            </View>
        </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  viewModal:{
    backgroundColor: '#808080', 
    width: '100%', 
    height:300,
    marginTop: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnConfirmarModal:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#000',
    width: 300,
    height:40,
    borderWidth: 2,
    margin: 10,
    marginRight: '25%',
    marginTop: '30%'
  },
  areaPrazos:{
    flexDirection: 'row'
  },
  txtPrazoRecolhimento:{
    alignItems: 'center',
    margin: 10,
    marginRight: 200
  },
  txtPrazoEntrega:{
    alignItems: 'center',
    margin: 10
  },
  cabecalho:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  areaGeral:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    
  },
  areaPlacas:{
    flexDirection: 'row',
  },
  imgMotoboy:{
    width: 40,
    height: 40,
    marginTop: 10
  },
  imgPlacas:{
    width: 40,
    height: 40,
    margin: 10,
    marginRight: 80,

  },
  areaBtns:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnConfirmar:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#39b4ef',
    width: 150,
    height: 44,
    borderRadius: 10,
    margin: 10,
    marginTop: 70
  },
  btnCancelar:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#39b4ef',
    width: 150,
    height: 44,
    borderRadius: 10,
    margin: 10,
    marginTop: 70
  },
  txtPrazos:{
    fontSize: 14,
    color: '#666'
  },
  txtConfirmar:{
    color: '#fff',  
  },
  txtCancelar:{
    color: '#fff',
  }
})