import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  MaterialIcons,
} from '@expo/vector-icons';

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

/*
  Reemplaza teléfono, correo y
  redes sociales por los datos
  reales de Bizly antes de entregar.
*/

const contactos = [
  {
    id: 1,
    titulo: 'Teléfono',
    valor: '+57 300 000 0000',
    icono: 'phone',
  },

  {
    id: 2,
    titulo: 'Correo electrónico',
    valor: 'contacto@bizly.com',
    icono: 'email',
  },

  {
    id: 3,
    titulo: 'Ciudad',
    valor:
      'Bogotá D.C., Colombia',
    icono: 'location-on',
  },

  {
    id: 4,
    titulo: 'Instagram',
    valor: '@bizly.app',
    icono: 'camera-alt',
  },

  {
    id: 5,
    titulo: 'Facebook',
    valor: 'Bizly',
    icono: 'facebook',
  },
];

export default function ContactoScreen() {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <ScrollView
        contentContainerStyle={
          styles.contenido
        }
        showsVerticalScrollIndicator={
          false
        }
      >
        <View style={styles.header}>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.nombre}>
            Bizly
          </Text>

          <Text
            style={styles.subtitulo}
          >
            Smart Tools for Small Business
          </Text>
        </View>

        <View
          style={styles.tituloSeccion}
        >
          <Text
            style={
              styles.tituloContacto
            }
          >
            Contacto
          </Text>

          <Text
            style={
              styles.descripcionContacto
            }
          >
            Ponte en contacto con
            nuestro equipo para conocer
            más sobre Bizly.
          </Text>
        </View>

        <View style={styles.tarjeta}>
          {contactos.map(
            (contacto, index) => (
              <View
                key={contacto.id}
                style={[
                  styles.item,

                  index !==
                    contactos.length -
                      1 &&
                    styles.bordeItem,
                ]}
              >
                <View
                  style={
                    styles.iconContainer
                  }
                >
                  <MaterialIcons
                    name={
                      contacto.icono
                    }
                    size={25}
                    color={
                      COLORS.primary
                    }
                  />
                </View>

                <View
                  style={
                    styles.itemTexto
                  }
                >
                  <Text
                    style={
                      styles.etiqueta
                    }
                  >
                    {contacto.titulo}
                  </Text>

                  <Text
                    style={styles.valor}
                  >
                    {contacto.valor}
                  </Text>
                </View>
              </View>
            )
          )}
        </View>

        <View style={styles.footer}>
          <MaterialIcons
            name="business-center"
            size={27}
            color={COLORS.secondary}
          />

          <View
            style={
              styles.footerTexto
            }
          >
            <Text
              style={
                styles.footerTitulo
              }
            >
              BIZLY
            </Text>

            <Text
              style={
                styles.footerDescripcion
              }
            >
              Gestión comercial
              inteligente para
              microempresas y
              emprendimientos.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles =
  StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor:
        COLORS.primary,
    },

    contenido: {
      flexGrow: 1,
      backgroundColor:
        COLORS.background,
      paddingBottom: 30,
    },

    header: {
      backgroundColor:
        COLORS.primary,
      alignItems: 'center',
      paddingTop: 25,
      paddingBottom: 35,
      borderBottomLeftRadius: 28,
      borderBottomRightRadius: 28,
    },

    logo: {
  width: 100,
  height: 100,
},

    nombre: {
      color: COLORS.white,
      fontSize: 31,
      fontWeight: 'bold',
      marginTop: 10,
    },

    subtitulo: {
      color: '#DCEFFA',
      fontSize: 14,
      marginTop: 3,
    },

    tituloSeccion: {
      marginHorizontal: 20,
      marginTop: 25,
      marginBottom: 18,
    },

    tituloContacto: {
      color:
        COLORS.textPrimary,
      fontWeight: 'bold',
      fontSize: 25,
    },

    descripcionContacto: {
      color:
        COLORS.textSecondary,
      marginTop: 5,
      lineHeight: 21,
    },

    tarjeta: {
      marginHorizontal: 18,
      backgroundColor:
        COLORS.card,
      borderRadius: 18,
      borderWidth: 1,
      borderColor:
        COLORS.border,
      elevation: 3,
      overflow: 'hidden',
    },

    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 17,
    },

    bordeItem: {
      borderBottomWidth: 1,
      borderBottomColor:
        COLORS.border,
    },

    iconContainer: {
      width: 48,
      height: 48,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      backgroundColor:
        '#E5F3FB',
    },

    itemTexto: {
      flex: 1,
      marginLeft: 14,
    },

    etiqueta: {
      color:
        COLORS.textSecondary,
      fontSize: 13,
    },

    valor: {
      color:
        COLORS.textPrimary,
      fontWeight: 'bold',
      fontSize: 16,
      marginTop: 3,
    },

    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 18,
      marginTop: 22,
      padding: 17,
      borderRadius: 16,
      backgroundColor:
        COLORS.secondaryLight,
      borderLeftWidth: 5,
      borderLeftColor:
        COLORS.secondary,
    },

    footerTexto: {
      flex: 1,
      marginLeft: 13,
    },

    footerTitulo: {
      color:
        COLORS.primaryDark,
      fontWeight: 'bold',
      fontSize: 17,
    },

    footerDescripcion: {
      color:
        COLORS.textPrimary,
      marginTop: 3,
      lineHeight: 19,
    },
  });   