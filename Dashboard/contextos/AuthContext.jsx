import React, {
  createContext,
  useState,
  useEffect,
} from 'react';

import * as SecureStore from 'expo-secure-store';


export const AuthContext =
  createContext();



export function AuthProvider({ children }) {


  const [userToken, setUserToken] =
    useState(null);


  const [isLoading, setIsLoading] =
    useState(true);



  useEffect(() => {

    verificarSesion();

  }, []);



  const verificarSesion = async () => {


    const token =
      await SecureStore.getItemAsync(
        'auth_token'
      );


    setUserToken(token);


    setIsLoading(false);

  };



  const iniciarSesion = async (token) => {


    await SecureStore.setItemAsync(

      'auth_token',

      token

    );


    setUserToken(token);

  };



  const cerrarSesion = async () => {


    await SecureStore.deleteItemAsync(

      'auth_token'

    );


    setUserToken(null);

  };



  return (

    <AuthContext.Provider

      value={{

        userToken,

        isLoading,

        iniciarSesion,

        cerrarSesion,

      }}

    >

      {children}

    </AuthContext.Provider>

  );


}