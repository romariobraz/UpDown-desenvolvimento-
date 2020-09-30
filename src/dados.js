import React, {useState ,createContext } from 'react';
import firebase from './database/firebaseconfig';

export const AutContext = createContext({});

function Autenticador({ children }){
    const [user, setUser] = useState( null );



    return(
        <AutContext.Provider value={{singed:!!user, user}}>
            {children}
        </AutContext.Provider>
        );
}
export default Autenticador;