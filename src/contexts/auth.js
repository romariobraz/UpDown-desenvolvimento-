import React, {useState ,createContext,useEffect} from 'react';
import firebase from '../database/firebaseconfig';  
import AsyncStorage from '@react-native-community/async-storage';
 


export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    },[]);

    //Login Usuario
    async function Login (Email,Senha){
        await firebase.auth().signInWithEmailAndPassword(Email,Senha)
        .then(async(value) => {
            let uid = value.user.uid;
            await firebase.database().ref('Usuarios').child(uid).once('value')
            .then((snapshot) => {
                let data ={
                    uid:uid,
                    Nome: snapshot.val().Nome,
                    Email: snapshot.val().Email,
                    Idade: snapshot.val().Idade,
                    
                };
                setUser(data);
                storageUser(data);
            })

        })
        .catch((error) => {
            alert(error.code);
            
        });
    }




    //Cadastrar Usuario
    async function Cadastrar(Email,Senha,Nome,Idade,AccLvl,CPF){
        await firebase.auth().createUserWithEmailAndPassword(Email,Senha)
        .then(async(value) => {
            let uid = value.user.uid;
            await firebase.database().ref('Usuarios').child(uid).set({
                Nome: Nome,
                Idade: Idade,
                Email: Email,
                CPF: CPF,
                AccLvl: AccLvl,
            })
            .then(() => {
                let data = {
                    uid:uid,
                    Nome: Nome,
                    Idade: Idade,
                    Email: value.user.Email,
                    CPF: null,
                    AccLvl: 1,
                };
                setUser(data);
                storageUser(data);
            })
        })
    }
    
    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user',JSON.stringify(data));
    }

    async function Sair(){
        await firebase.auth().signOut();
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
        });

    }

    return(
        <AuthContext.Provider value={{signed: !!user, user,loading,Cadastrar,Login,Sair}}>
            {children}
        </AuthContext.Provider>
        );
}
export default AuthProvider;