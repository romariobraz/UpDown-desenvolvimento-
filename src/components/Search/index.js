import React,{Component} from 'react';
import { View ,Platform,TouchableOpacity,Text,StyleSheet} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



class Search extends Component{

    state = {
        searchFocused: false,
    }
   
      render(){
   
    // função para o usuário selecionar a localização
    const {onLocationSelected} = this.props;
        
        return(
            
            <GooglePlacesAutocomplete
            placeholder="Local de entrega"
            placeholderTextColor="#DDD"
            onPress={onLocationSelected}
            query={{
                key:'AIzaSyAO--SsjOIAVgH3NvV7drSVPnIiL-pk2XE',
                language:'pt',
                components: 'country:br',
            }}

            textInputProps={{
                onFocus:() => { this.setState({searchFocused: true})},
                onBlur: () =>{this.setState({searchFocused: false})},
                autoCorrect:false
            }}
            listViewDisplayed={this.state.searchFocused}
            fetchDetails 
            enablePoweredByContainer = {false}

            
        
            styles={{
                container:{
                    position:'absolute',
                    top: Platform.select({ ios:60,
                        android:40}),
                        width: "100%"
                },
                textInputContainer:{
                    flex:1,
                    backgroundColor:'transparent',
                    height:54,
                    marginHorizontal:20,
                    borderTopWidth:0,
                    borderBottomWidth:0
                },
                textInput:{
                    height:54,
                    margin:0,
                    borderRadius:12,
                    paddingTop:0,
                    paddingBottom:0,
                    paddingLeft:15,
                    paddingRight:15,
                    marginTop:0,
                    marginLeft:0,
                    marginRight:0,
                    borderWidth:2,
                    borderColor:'#548AF0',
                    fontSize:18

                },
                listView:{
                    borderWidth: 1,
                    borderColor:'#DDD',
                    backgroundColor:'#FFF',
                    marginHorizontal:20,
                    elevation:5,
                    shadowColor: '#000',
                    shadowOpacity:0.1,
                    shadowOffset:{x:0,y:0},
                    shadowRadius: 15,
                    marginTop:10,
                },
                description:{
                    fontSize:16,
                },
                row:{
                    padding:20,
                    height:65
                }         
            }}
            />
            
        );

    }
    }

    export default Search;