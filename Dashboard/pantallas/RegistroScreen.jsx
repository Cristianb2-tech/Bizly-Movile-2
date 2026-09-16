import React, {
  useState,
  useContext,
} from 'react';

import {
  Alert,
  ScrollView,
  StyleSheet,
} from 'react-native';


import {
  Appbar,
  Avatar,
  Button,
  Card,
  TextInput,
} from 'react-native-paper';


import {
  SafeAreaView,
} from 'react-native-safe-area-context';


import AsyncStorage from '@react-native-async-storage/async-storage';

import * as SecureStore from 'expo-secure-store';


import {
  AuthContext,
} from '../contextos/AuthContext';



const COLORS = {

  primary: '#2F80B7',

  primaryDark: '#175B85',

  secondary: '#8BCF1F',

  secondaryLight: '#EAF7D3',

  background: '#F4F8FA',

  card: '#FFFFFF',

  border: '#DCE7ED',

  white: '#FFFFFF',

};



export default function RegistroScreen({

  navigation,

}) {



  const {
    iniciarSesion,
  } = useContext(AuthContext);



  const [nombre, setNombre] =
    useState('');



  const [correo, setCorreo] =
    useState('');



  const [contrasena, setContrasena] =
    useState('');





  const registrarUsuario = async () => {



    if (

      !nombre.trim() ||

      !correo.trim() ||

      !contrasena.trim()

    ) {



      Alert.alert(

        'Datos incompletos',

        'Complete todos los campos.'

      );


      return;

    }




    try {



      const usuario = {


        nombre,

        correo,

        contrasena


      };





      await AsyncStorage.setItem(

        'usuario_registrado',

        JSON.stringify(usuario)

      );





      const token =

        'token_bizly_' + Date.now();





      await SecureStore.setItemAsync(

        'auth_token',

        token

      );





      Alert.alert(

        'Registro exitoso',

        'Usuario creado correctamente.',

        [

          {

            text:'Aceptar',

            onPress:()=>{


              iniciarSesion(token);


            }

          }

        ]

      );




    } catch(error) {



      console.log(error);



      Alert.alert(

        'Error',

        'No fue posible registrar el usuario.'

      );


    }


  };





  return (


    <SafeAreaView

      style={styles.safeArea}

      edges={['top']}

    >



      <Appbar.Header

        style={styles.header}

      >



        <Appbar.BackAction

          color={COLORS.white}

          onPress={()=>

            navigation.goBack()

          }

        />



        <Appbar.Content

          title="Registro"

          subtitle="Crear cuenta de usuario"

          titleStyle={styles.headerTitle}

          subtitleStyle={styles.headerSubtitle}

        />



      </Appbar.Header>





      <ScrollView

        contentContainerStyle={styles.content}

      >




        <Card

          style={styles.card}

        >



          <Card.Title

            title="Crear usuario"

            subtitle="Ingrese los datos solicitados"

            left={(props)=>(


              <Avatar.Icon

                {...props}

                icon="account-plus"

                color={COLORS.primary}

                style={styles.avatar}

              />


            )}

          />





          <Card.Content>





            <TextInput

              label="Nombre"

              mode="outlined"

              value={nombre}

              onChangeText={setNombre}

              style={styles.input}

            />





            <TextInput

              label="Correo"

              mode="outlined"

              value={correo}

              onChangeText={setCorreo}

              keyboardType="email-address"

              autoCapitalize="none"

              style={styles.input}

            />





            <TextInput

              label="Contraseña"

              mode="outlined"

              value={contrasena}

              onChangeText={setContrasena}

              secureTextEntry

              style={styles.input}

            />





            <Button

              mode="contained"

              icon="account-plus"

              buttonColor={COLORS.primary}

              textColor={COLORS.white}

              style={styles.button}

              onPress={registrarUsuario}

            >

              Registrar

            </Button>




          </Card.Content>




        </Card>




      </ScrollView>




    </SafeAreaView>


  );

}





const styles = StyleSheet.create({


  safeArea:{

    flex:1,

    backgroundColor:COLORS.primaryDark,

  },



  header:{

    backgroundColor:COLORS.primaryDark,

  },



  headerTitle:{

    color:COLORS.white,

    fontWeight:'bold',

  },



  headerSubtitle:{

    color:COLORS.secondaryLight,

  },



  content:{

    flexGrow:1,

    justifyContent:'center',

    padding:18,

    backgroundColor:COLORS.background,

  },



  card:{

    backgroundColor:COLORS.card,

    borderRadius:15,

    borderWidth:1,

    borderColor:COLORS.border,

  },



  avatar:{

    backgroundColor:COLORS.secondaryLight,

  },



  input:{

    marginBottom:15,

    backgroundColor:COLORS.white,

  },



  button:{

    marginTop:10,

  },


});