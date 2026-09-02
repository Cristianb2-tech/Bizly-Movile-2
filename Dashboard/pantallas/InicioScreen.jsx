import React from 'react';

import {
  ScrollView,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import {
  Avatar,
  Button,
  Card,
  Text,
} from 'react-native-paper';

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

const funcionalidades = [
  {
    id: 1,
    titulo: 'Productos',
    descripcion:
      'Registra, consulta y administra los productos del negocio.',
    icono: 'inventory-2',
    ruta: 'Productos',
  },

  {
    id: 2,
    titulo: 'Inventario',
    descripcion:
      'Controla las entradas, salidas y existencias disponibles.',
    icono: 'warehouse',
    ruta: 'Inventario',
  },

  {
    id: 3,
    titulo: 'Ventas',
    descripcion:
      'Registra ventas y consulta las transacciones realizadas.',
    icono: 'point-of-sale',
    ruta: 'Ventas',
  },

  {
    id: 4,
    titulo: 'Clientes',
    descripcion:
      'Administra la información de los clientes registrados.',
    icono: 'groups',
    ruta: 'Clientes',
  },

  {
    id: 5,
    titulo: 'Reportes',
    descripcion:
      'Consulta reportes comerciales y resultados del negocio.',
    icono: 'assessment',
    ruta: 'Reportes',
  },

  {
    id: 6,
    titulo: 'Usuarios',
    descripcion:
      'Gestiona usuarios, roles y permisos de acceso.',
    icono: 'manage-accounts',
    ruta: 'Usuarios',
  },
  {
  id: 7,
  titulo: 'Solicitudes',
  descripcion:
    'Gestiona solicitudes y realiza aprobaciones.',
  icono: 'assignment',
  ruta: 'Solicitudes',
},
];

export default function InicioScreen({
  navigation,
}) {

  const abrirModulo = (ruta) => {
    navigation.navigate(ruta);
  };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >

      <ScrollView
        style={styles.container}
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
      >

        {/* ENCABEZADO */}
        <View style={styles.header}>

          <View style={styles.headerTop}>

            <View
              style={
                styles.logoContainer
              }
            >

              <Image
                source={logo}
                style={styles.logo}
                resizeMode="contain"
              />

            </View>

            <View
              style={
                styles.headerTextContainer
              }
            >

              <Text
                style={styles.projectName}
              >
                Bizly
              </Text>

              <Text style={styles.slogan}>
                Smart Tools for Small Business
              </Text>

            </View>

          </View>

          <Text
            style={styles.welcomeTitle}
          >
            ¡Bienvenido a Bizly!
          </Text>

          <Text
            style={
              styles.welcomeMessage
            }
          >
            Administra tu negocio de manera
            sencilla, organizada y eficiente.
          </Text>

        </View>

        {/* PANEL PRINCIPAL */}
        <Card style={styles.summaryCard}>

          <Card.Content
            style={
              styles.summaryContent
            }
          >

            <Avatar.Icon
              size={52}
              icon="view-dashboard"
              color={COLORS.secondary}
              style={
                styles.summaryAvatar
              }
            />

            <View
              style={
                styles.summaryText
              }
            >

              <Text
                variant="titleMedium"
                style={
                  styles.summaryTitle
                }
              >
                Panel principal
              </Text>

              <Text
                style={
                  styles.summaryDescription
                }
              >
                Selecciona una función para
                comenzar a gestionar tu
                negocio.
              </Text>

            </View>

          </Card.Content>

        </Card>

        {/* TÍTULO FUNCIONALIDADES */}
        <View
          style={styles.sectionHeader}
        >

          <Text
            style={styles.sectionTitle}
          >
            Funcionalidades
          </Text>

          <Text
            style={
              styles.sectionSubtitle
            }
          >
            Herramientas disponibles
          </Text>

        </View>

        {/* TARJETAS */}
        <View
          style={styles.cardsContainer}
        >

          {funcionalidades.map(
            (item) => (

              <Card
                key={item.id}
                style={styles.card}
              >

                <Card.Content
                  style={
                    styles.cardContent
                  }
                >

                  <View
                    style={
                      styles.iconContainer
                    }
                  >

                    <MaterialIcons
                      name={item.icono}
                      size={32}
                      color={
                        COLORS.primary
                      }
                    />

                  </View>

                  <Text
                    style={
                      styles.cardTitle
                    }
                  >
                    {item.titulo}
                  </Text>

                  <Text
                    style={
                      styles.cardDescription
                    }
                  >
                    {item.descripcion}
                  </Text>

                </Card.Content>

                <Card.Actions
                  style={
                    styles.cardActions
                  }
                >

                  <Button
                    mode="text"
                    compact
                    textColor={
                      COLORS.primary
                    }
                    icon="arrow-right"
                    contentStyle={{
                      flexDirection:
                        'row-reverse',
                    }}
                    labelStyle={
                      styles.buttonLabel
                    }
                    onPress={() =>
                      abrirModulo(
                        item.ruta
                      )
                    }
                  >
                    Abrir módulo
                  </Button>

                </Card.Actions>

              </Card>

            )
          )}

        </View>

        {/* MENSAJE INFERIOR */}
        <Card style={styles.footerCard}>

          <Card.Content
            style={styles.footerContent}
          >

            <Avatar.Icon
              size={45}
              icon="lightbulb-outline"
              color={COLORS.secondary}
              style={styles.footerAvatar}
            />

            <Text
              style={styles.footerText}
            >
              Bizly centraliza la información
              de tu empresa para facilitar la
              toma de decisiones.
            </Text>

          </Card.Content>

        </Card>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor:
      COLORS.primary,
  },

  container: {
    flex: 1,
    backgroundColor:
      COLORS.background,
  },

  content: {
    paddingBottom: 35,
  },

  /*
   * ENCABEZADO
   */

  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor:
      COLORS.primary,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },

  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },

  logoContainer: {
    width: 82,
    height: 82,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor:
      COLORS.secondaryLight,
    borderWidth: 2,
    borderColor:
      COLORS.white,
    padding: 6,
  },

  logo: {
    width: '100%',
    height: '100%',
  },

  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
  },

  projectName: {
    fontSize: 31,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  slogan: {
    marginTop: 3,
    fontSize: 13,
    color: '#DCEFFA',
  },

  welcomeTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  welcomeMessage: {
    marginTop: 7,
    fontSize: 15,
    lineHeight: 22,
    color: '#E7F4FA',
  },

  /*
   * PANEL PRINCIPAL
   */

  summaryCard: {
    marginTop: -15,
    marginHorizontal: 18,
    marginBottom: 25,
    borderRadius: 16,
    backgroundColor:
      COLORS.card,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    elevation: 4,
  },

  summaryContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryAvatar: {
    backgroundColor:
      COLORS.secondaryLight,
  },

  summaryText: {
    flex: 1,
    marginLeft: 13,
  },

  summaryTitle: {
    fontWeight: 'bold',
    color:
      COLORS.textPrimary,
  },

  summaryDescription: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 18,
    color:
      COLORS.textSecondary,
  },

  /*
   * TÍTULOS
   */

  sectionHeader: {
    marginHorizontal: 18,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color:
      COLORS.textPrimary,
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 14,
    color:
      COLORS.textSecondary,
  },

  /*
   * TARJETAS
   */

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:
      'space-between',
    paddingHorizontal: 18,
  },

  card: {
    width: '48%',
    minHeight: 235,
    marginBottom: 16,
    borderRadius: 17,
    backgroundColor:
      COLORS.card,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    elevation: 4,
  },

  cardContent: {
    flex: 1,
    paddingBottom: 0,
  },

  iconContainer: {
    width: 56,
    height: 56,
    justifyContent:
      'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor:
      '#E5F3FB',
  },

  cardTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: 'bold',
    color:
      COLORS.textPrimary,
  },

  cardDescription: {
    marginTop: 8,
    fontSize: 13,
    lineHeight: 19,
    color:
      COLORS.textSecondary,
  },

  cardActions: {
    justifyContent:
      'flex-start',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },

  buttonLabel: {
    fontSize: 12,
    fontWeight: 'bold',
  },

  /*
   * TARJETA INFERIOR
   */

  footerCard: {
    marginHorizontal: 18,
    marginTop: 7,
    borderRadius: 16,
    backgroundColor:
      COLORS.secondaryLight,
    borderLeftWidth: 5,
    borderLeftColor:
      COLORS.secondary,
    elevation: 0,
  },

  footerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  footerAvatar: {
    backgroundColor:
      COLORS.white,
  },

  footerText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 20,
    color:
      COLORS.textPrimary,
  },

});