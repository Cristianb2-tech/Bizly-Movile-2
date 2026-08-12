import React from 'react';

import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
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

const funcionalidades = [
  {
    id: 1,
    titulo: 'Productos',
    descripcion:
      'Registra, consulta y administra los productos del negocio.',
    icono: 'inventory-2',
  },
  {
    id: 2,
    titulo: 'Inventario',
    descripcion:
      'Controla las entradas, salidas y existencias disponibles.',
    icono: 'warehouse',
  },
  {
    id: 3,
    titulo: 'Ventas',
    descripcion:
      'Registra ventas y consulta las transacciones realizadas.',
    icono: 'point-of-sale',
  },
  {
    id: 4,
    titulo: 'Clientes',
    descripcion:
      'Administra la información de los clientes registrados.',
    icono: 'groups',
  },
  {
    id: 5,
    titulo: 'Reportes',
    descripcion:
      'Consulta reportes comerciales y resultados del negocio.',
    icono: 'assessment',
  },
  {
    id: 6,
    titulo: 'Usuarios',
    descripcion:
      'Gestiona usuarios, roles y permisos de acceso.',
    icono: 'manage-accounts',
  },
];

export default function InicioScreen({
  navigation,
}) {
  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.logoContainer}>
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
            style={styles.welcomeMessage}
          >
            Administra tu negocio de manera
            sencilla, organizada y eficiente.
          </Text>
        </View>

        {/* Resumen */}
        <View style={styles.summaryCard}>
          <View style={styles.summaryIcon}>
            <MaterialIcons
              name="dashboard"
              size={28}
              color={COLORS.secondary}
            />
          </View>

          <View style={styles.summaryText}>
            <Text
              style={styles.summaryTitle}
            >
              Panel principal
            </Text>

            <Text
              style={
                styles.summaryDescription
              }
            >
              Selecciona una función para
              comenzar a gestionar tu negocio.
            </Text>
          </View>
        </View>

        {/* Título */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Funcionalidades
          </Text>

          <Text
            style={styles.sectionSubtitle}
          >
            Herramientas disponibles
          </Text>
        </View>

        {/* Tarjetas */}
        <View style={styles.cardsContainer}>
          {funcionalidades.map((item) => (
            <View
              key={item.id}
              style={styles.card}
            >
              <View
                style={styles.iconContainer}
              >
                <MaterialIcons
                  name={item.icono}
                  size={32}
                  color={COLORS.primary}
                />
              </View>

              <Text style={styles.cardTitle}>
                {item.titulo}
              </Text>

              <Text
                style={
                  styles.cardDescription
                }
              >
                {item.descripcion}
              </Text>

              <View style={styles.cardFooter}>
                <Text
                  style={styles.cardLink}
                  onPress={() =>
                    navigation.navigate(
                      'Servicios'
                    )
                  }
                >
                  Abrir módulo
                </Text>

                <MaterialIcons
                  name="arrow-forward"
                  size={18}
                  color={COLORS.secondary}
                />
              </View>
            </View>
          ))}
        </View>

        {/* Mensaje inferior */}
        <View style={styles.footerCard}>
          <MaterialIcons
            name="lightbulb"
            size={25}
            color={COLORS.secondary}
          />

          <Text style={styles.footerText}>
            Bizly centraliza la información
            de tu empresa para facilitar la
            toma de decisiones.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingBottom: 35,
  },

  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 30,
    backgroundColor: COLORS.primary,
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
  backgroundColor: COLORS.secondaryLight,
  borderWidth: 2,
  borderColor: COLORS.white,
  padding: 6,
},

logo: {
  width: '100%',
  height: '100%',
},

  logo: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
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

  summaryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -15,
    marginHorizontal: 18,
    marginBottom: 25,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 4,
  },

  summaryIcon: {
    width: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor:
      COLORS.secondaryLight,
  },

  summaryText: {
    flex: 1,
    marginLeft: 13,
  },

  summaryTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  summaryDescription: {
    marginTop: 3,
    fontSize: 13,
    lineHeight: 18,
    color: COLORS.textSecondary,
  },

  sectionHeader: {
    marginHorizontal: 18,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  sectionSubtitle: {
    marginTop: 3,
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
  },

  card: {
    width: '48%',
    minHeight: 225,
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 16,
    borderRadius: 17,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    elevation: 4,
  },

  iconContainer: {
    width: 56,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: '#E5F3FB',
  },

  cardTitle: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },

  cardDescription: {
    flex: 1,
    marginTop: 8,
    fontSize: 13,
    lineHeight: 19,
    color: COLORS.textSecondary,
  },

  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },

  cardLink: {
    marginRight: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: COLORS.primary,
  },

  footerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 18,
    marginTop: 7,
    padding: 17,
    borderRadius: 16,
    backgroundColor:
      COLORS.secondaryLight,
    borderLeftWidth: 5,
    borderLeftColor:
      COLORS.secondary,
  },

  footerText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.textPrimary,
  },
});