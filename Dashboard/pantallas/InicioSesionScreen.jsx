import React, {
  useState,
  useContext,
} from 'react';


import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';


import {
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
} from 'react-native-paper';


import {
  SafeAreaView,
} from 'react-native-safe-area-context';


import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  AuthContext,
} from '../contextos/AuthContext';


import logo from '../assets/Logo.png';



const COLORS = {
  primary: '#2F80B7',
  primaryDark: '#175B85',
  secondary: '#8BCF1F',
  secondaryLight: '#EAF7D3',
  background: '#F4F8FA',
  card: '#FFFFFF',
  textPrimary: '#173042',
  textSecondary: '#647480',
  border: '#DCE7ED',
  white: '#FFFFFF',
};



export default function InicioSesionScreen({

  navigation,

}) {



  const {
    iniciarSesion,
  } = useContext(AuthContext);




  const [correo, setCorreo] =
    useState('');



  const [contrasena, setContrasena] =
    useState('');





  const iniciarSesionUsuario = async () => {



    if (

      !correo.trim() ||

      !contrasena.trim()

    ) {


      Alert.alert(

        'Datos incompletos',

        'Ingrese el correo y la contraseña.'

      );


      return;

    }





    try {



      const usuarioGuardado =

        await AsyncStorage.getItem(

          'usuario_registrado'

        );





      if (!usuarioGuardado) {


        Alert.alert(

          'Error',

          'No existe ningún usuario registrado.'

        );


        return;


      }





      const usuario =

        JSON.parse(usuarioGuardado);





      if (

        correo === usuario.correo &&

        contrasena === usuario.contrasena

      ) {



        const token =

          'token_bizly_login_' + Date.now();




        iniciarSesion(token);





        Alert.alert(

          'Inicio exitoso',

          'Sesión iniciada correctamente.'

        );





      } else {



        Alert.alert(

          'Error de autenticación',

          'Correo o contraseña incorrectos.'

        );



      }





    } catch(error) {


      console.log(error);



      Alert.alert(

        'Error',

        'No fue posible iniciar sesión.'

      );


    }


  };





  return (

    <SafeAreaView

      style={styles.safeArea}

      edges={['top','bottom']}

    >


      <ScrollView

        contentContainerStyle={styles.content}

        keyboardShouldPersistTaps="handled"

      >



        <Image

          source={logo}

          style={styles.logo}

          resizeMode="contain"

        />



        <Text

          style={styles.nombreApp}

        >

          Bizly

        </Text>




        <Text

          style={styles.slogan}

        >

          Smart Tools for Small Business

        </Text>





        <Card

          style={styles.card}

        >



          <Card.Title

            title="Iniciar sesión"

            subtitle="Ingrese sus datos para continuar"

            titleStyle={styles.cardTitle}

            left={(props)=>(


              <Avatar.Icon

                {...props}

                icon="account"

                color={COLORS.primary}

                style={styles.avatar}

              />


            )}

          />





          <Card.Content>





            <TextInput

              label="Correo"

              mode="outlined"

              value={correo}

              onChangeText={setCorreo}

              keyboardType="email-address"

              autoCapitalize="none"

              outlineColor={COLORS.border}

              activeOutlineColor={COLORS.primary}

              style={styles.input}

            />





            <TextInput

              label="Contraseña"

              mode="outlined"

              value={contrasena}

              onChangeText={setContrasena}

              secureTextEntry

              outlineColor={COLORS.border}

              activeOutlineColor={COLORS.primary}

              style={styles.input}

            />





            <Button

              mode="contained"

              icon="login"

              buttonColor={COLORS.primary}

              textColor={COLORS.white}

              style={styles.boton}

              contentStyle={styles.botonContent}

              onPress={iniciarSesionUsuario}

            >

              Iniciar sesión

            </Button>





            <Text

              style={styles.textoRegistro}

            >

              ¿No tiene una cuenta?

            </Text>





            <Button

              mode="outlined"

              icon="account-plus"

              textColor={COLORS.primary}

              style={styles.botonRegistro}

              onPress={()=>navigation.navigate('Registro')}

            >

              Registrarse

            </Button>





          </Card.Content>




        </Card>





      </ScrollView>



    </SafeAreaView>

  );

}





const styles =
StyleSheet.create({


  safeArea:{

    flex:1,

    backgroundColor:COLORS.primary,

  },


  content:{

    flexGrow:1,

    justifyContent:'center',

    padding:22,

    backgroundColor:COLORS.background,

  },


  logo:{

    width:115,

    height:115,

    alignSelf:'center',

    marginBottom:8,

  },


  nombreApp:{

    fontSize:34,

    fontWeight:'bold',

    textAlign:'center',

    color:COLORS.primaryDark,

  },


  slogan:{

    marginTop:4,

    marginBottom:25,

    fontSize:14,

    textAlign:'center',

    color:COLORS.textSecondary,

  },


  card:{

    backgroundColor:COLORS.card,

    borderWidth:1,

    borderColor:COLORS.border,

    borderRadius:18,

    elevation:4,

  },


  cardTitle:{

    color:COLORS.primaryDark,

    fontWeight:'bold',

  },


  avatar:{

    backgroundColor:COLORS.secondaryLight,

  },


  input:{

    marginBottom:15,

    backgroundColor:COLORS.white,

  },


  boton:{

    marginTop:5,

  },


  botonContent:{

    height:50,

  },


  textoRegistro:{

    marginTop:22,

    marginBottom:8,

    textAlign:'center',

    color:COLORS.textSecondary,

  },


  botonRegistro:{

    borderColor:COLORS.primary,

  },


});