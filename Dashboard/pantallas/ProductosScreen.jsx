import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Appbar,
  Avatar,
  Card,
  FAB,
  Text,
  Chip,
} from 'react-native-paper';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  useProductos,
} from '../contextos/ProductosContext';

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

const formatoCOP = (valor) => {

  const numero =
    Number(valor || 0);

  return `$${numero.toLocaleString(
    'es-CO'
  )} COP`;
};

export default function ProductosScreen({
  navigation,
}) {

  const { productos } =
    useProductos();

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

        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />

        <Appbar.Content
          title="Productos"
          subtitle="Catálogo del negocio"
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
        showsVerticalScrollIndicator={
          false
        }
      >

        <Card style={styles.introCard}>

          <Card.Content
            style={styles.introContent}
          >

            <Avatar.Icon
              size={52}
              icon="package-variant-closed"
              color={COLORS.primary}
              style={styles.avatarIntro}
            />

            <View style={styles.introText}>

              <Text
                variant="titleMedium"
                style={styles.introTitle}
              >
                Gestión de productos
              </Text>

              <Text
                style={
                  styles.introDescription
                }
              >
                Consulta los productos
                registrados y agrega nuevos
                artículos con fotografía.
              </Text>

            </View>

          </Card.Content>

        </Card>

        {productos.map(
          (producto) => (

            <Card
              key={producto.id}
              style={styles.card}
            >

              {producto.fotoUri ? (

                <Card.Cover
                  source={{
                    uri: producto.fotoUri,
                  }}
                  style={styles.cover}
                />

              ) : (

                <View
                  style={
                    styles.placeholderFoto
                  }
                >

                  <Avatar.Icon
                    size={70}
                    icon="image-outline"
                    color={COLORS.primary}
                    style={
                      styles.placeholderIcon
                    }
                  />

                </View>

              )}

              <Card.Content
                style={styles.cardContent}
              >

                <Text
                  variant="titleLarge"
                  style={styles.nombre}
                >
                  {producto.nombre}
                </Text>

                <Text
                  style={styles.precio}
                >
                  {formatoCOP(
                    producto.precio
                  )}
                </Text>

                <View style={styles.chips}>

                  <Chip
                    compact
                    style={styles.chip}
                    textStyle={
                      styles.chipText
                    }
                  >
                    Stock: {producto.stock}
                  </Chip>

                  <Chip
                    compact
                    style={styles.chip}
                    textStyle={
                      styles.chipText
                    }
                  >
                    {producto.categoria}
                  </Chip>

                </View>

              </Card.Content>

            </Card>

          )
        )}

        <View
          style={styles.bottomSpace}
        />

      </ScrollView>

      <FAB
        icon="plus"
        label="Nuevo producto"
        color={COLORS.white}
        style={styles.fab}
        onPress={() =>
          navigation.navigate(
            'CrearProducto'
          )
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor:
      COLORS.primaryDark,
  },

  header: {
    backgroundColor:
      COLORS.primaryDark,
    paddingRight: 8,
  },

  logo: {
    width: 42,
    height: 42,
    marginRight: 8,
  },

  headerTitle: {
    color: COLORS.white,
    fontWeight: 'bold',
  },

  headerSubtitle: {
    color:
      COLORS.secondaryLight,
  },

  content: {
    padding: 16,
    paddingBottom: 110,
    backgroundColor:
      COLORS.background,
  },

  introCard: {
    marginBottom: 18,
    backgroundColor:
      COLORS.secondaryLight,
    borderColor:
      COLORS.secondary,
    borderWidth: 1,
  },

  introContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatarIntro: {
    backgroundColor:
      COLORS.white,
  },

  introText: {
    flex: 1,
    marginLeft: 12,
  },

  introTitle: {
    color:
      COLORS.primaryDark,
    fontWeight: 'bold',
  },

  introDescription: {
    marginTop: 4,
    color:
      COLORS.textSecondary,
    lineHeight: 20,
  },

  card: {
    marginBottom: 18,
    backgroundColor:
      COLORS.card,
    borderWidth: 1,
    borderColor:
      COLORS.border,
    overflow: 'hidden',
  },

  cover: {
    height: 190,
  },

  placeholderFoto: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F3FB',
  },

  placeholderIcon: {
    backgroundColor:
      COLORS.white,
  },

  cardContent: {
    paddingTop: 14,
  },

  nombre: {
    color:
      COLORS.textPrimary,
    fontWeight: 'bold',
  },

  precio: {
    marginTop: 6,
    color: COLORS.primary,
    fontSize: 17,
    fontWeight: 'bold',
  },

  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },

  chip: {
    backgroundColor:
      COLORS.secondaryLight,
  },

  chipText: {
    color:
      COLORS.primaryDark,
  },

  fab: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    backgroundColor:
      COLORS.primary,
  },

  bottomSpace: {
    height: 20,
  },

});