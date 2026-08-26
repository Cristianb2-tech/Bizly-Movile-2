import React, {
  useState,
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

export default function RegistroScreen({
  navigation,
}) {

  const [nombre, setNombre] =
    useState('');

  const [correo, setCorreo] =
    useState('');

  const [
    contrasena,
    setContrasena,
  ] = useState('');

  const registrarUsuario = () => {

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

    Alert.alert(
      'Registro exitoso',
      'El usuario fue registrado correctamente.',
      [
        {
          text: 'Aceptar',

          onPress: () =>
            navigation.goBack(),
        },
      ]
    );
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
          onPress={() =>
            navigation.goBack()
          }
        />

        <Appbar.Content
          title="Registro"
          subtitle="Crear cuenta de usuario"
          titleStyle={
            styles.headerTitle
          }
          subtitleStyle={
            styles.headerSubtitle
          }
        />

      </Appbar.Header>

      <ScrollView
        contentContainerStyle={
          styles.content
        }
        keyboardShouldPersistTaps="handled"
      >

        <Card style={styles.card}>

          <Card.Title
            title="Crear usuario"
            subtitle="Ingrese los datos solicitados"
            titleStyle={
              styles.cardTitle
            }
            left={(props) => (

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
              onChangeText={
                setNombre
              }
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <TextInput
              label="Correo"
              mode="outlined"
              value={correo}
              onChangeText={
                setCorreo
              }
              keyboardType=
                "email-address"
              autoCapitalize="none"
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <TextInput
              label="Contraseña"
              mode="outlined"
              value={contrasena}
              onChangeText={
                setContrasena
              }
              secureTextEntry
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <Button
              mode="contained"
              icon="account-plus"
              buttonColor={
                COLORS.primary
              }
              textColor={
                COLORS.white
              }
              style={styles.boton}
              contentStyle={
                styles.botonContent
              }
              onPress={
                registrarUsuario
              }
            >
              Registrar
            </Button>

          </Card.Content>

        </Card>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles =
  StyleSheet.create({

    safeArea: {
      flex: 1,
      backgroundColor:
        COLORS.primaryDark,
    },

    header: {
      backgroundColor:
        COLORS.primaryDark,
    },

    headerTitle: {
      color:
        COLORS.white,
      fontWeight: 'bold',
    },

    headerSubtitle: {
      color:
        COLORS.secondaryLight,
    },

    content: {
      flexGrow: 1,
      justifyContent:
        'center',
      padding: 18,
      backgroundColor:
        COLORS.background,
    },

    card: {
      backgroundColor:
        COLORS.card,
      borderWidth: 1,
      borderColor:
        COLORS.border,
    },

    cardTitle: {
      color:
        COLORS.primaryDark,
      fontWeight: 'bold',
    },

    avatar: {
      backgroundColor:
        COLORS.secondaryLight,
    },

    input: {
      marginBottom: 15,
      backgroundColor:
        COLORS.white,
    },

    boton: {
      marginTop: 10,
    },

    botonContent: {
      height: 50,
    },

  });