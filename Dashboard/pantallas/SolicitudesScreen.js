import React, { useState } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Button,
  Card,
  Text,
} from 'react-native-paper';

import {
  MaterialIcons,
} from '@expo/vector-icons';

import * as Haptics from 'expo-haptics';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import ItemSolicitud from '../componentes/ItemSolicitud';

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

export default function SolicitudesScreen({
  navigation,
}) {

  const [filtro, setFiltro] =
    useState('Pendientes');

  const solicitudes = [
    {
      id: 1,
      nombre: 'Solicitud de producto',
      descripcion:
        'Solicitud pendiente de revisión.',
      estado: 'Pendientes',
    },

    {
      id: 2,
      nombre: 'Solicitud de inventario',
      descripcion:
        'Solicitud de actualización de inventario.',
      estado: 'Pendientes',
    },

    {
      id: 3,
      nombre: 'Solicitud de venta',
      descripcion:
        'Solicitud relacionada con una venta.',
      estado: 'Aprobados',
    },

    {
      id: 4,
      nombre: 'Solicitud de compra',
      descripcion:
        'Solicitud que fue rechazada.',
      estado: 'Rechazados',
    },
  ];

  const cambiarFiltro = async (nuevoFiltro) => {

    setFiltro(nuevoFiltro);

    await Haptics.selectionAsync();
  };

  const solicitudesFiltradas =
    solicitudes.filter(
      (solicitud) =>
        solicitud.estado === filtro
    );

  const abrirDetalle = async (solicitud) => {

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Light
    );

    navigation.navigate(
      'DetalleSolicitud',
      {
        solicitud,
      }
    );
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

        <View style={styles.header}>

          <View style={styles.headerIcon}>

            <MaterialIcons
              name="assignment"
              size={32}
              color={COLORS.white}
            />

          </View>

          <View>

            <Text
              style={styles.title}
            >
              Solicitudes
            </Text>

            <Text
              style={styles.subtitle}
            >
              Gestión y aprobaciones
            </Text>

          </View>

        </View>

        <Card style={styles.filterCard}>

          <Card.Content>

            <Text
              variant="titleMedium"
              style={styles.filterTitle}
            >
              Filtrar solicitudes
            </Text>

            <View style={styles.filters}>

              <Button
                mode={
                  filtro === 'Pendientes'
                    ? 'contained'
                    : 'outlined'
                }
                onPress={() =>
                  cambiarFiltro(
                    'Pendientes'
                  )
                }
                style={styles.filterButton}
              >
                Pendientes
              </Button>

              <Button
                mode={
                  filtro === 'Aprobados'
                    ? 'contained'
                    : 'outlined'
                }
                onPress={() =>
                  cambiarFiltro(
                    'Aprobados'
                  )
                }
                style={styles.filterButton}
              >
                Aprobados
              </Button>

              <Button
                mode={
                  filtro === 'Rechazados'
                    ? 'contained'
                    : 'outlined'
                }
                onPress={() =>
                  cambiarFiltro(
                    'Rechazados'
                  )
                }
                style={styles.filterButton}
              >
                Rechazados
              </Button>

            </View>

          </Card.Content>

        </Card>

        <Text
          variant="titleLarge"
          style={styles.sectionTitle}
        >
          {filtro}
        </Text>

        {solicitudesFiltradas.map(
          (solicitud) => (

            <ItemSolicitud
              key={solicitud.id}
              solicitud={solicitud}
              onPress={() =>
                abrirDetalle(
                  solicitud
                )
              }
            />

          )
        )}

        {solicitudesFiltradas.length ===
          0 && (

          <Card style={styles.emptyCard}>

            <Card.Content>

              <MaterialIcons
                name="inbox"
                size={45}
                color={
                  COLORS.textSecondary
                }
              />

              <Text
                style={styles.emptyText}
              >
                No hay solicitudes en
                este estado.
              </Text>

            </Card.Content>

          </Card>

        )}

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
    paddingBottom: 30,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor:
      COLORS.primary,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  headerIcon: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor:
      COLORS.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  subtitle: {
    marginTop: 3,
    color: COLORS.white,
  },

  filterCard: {
    margin: 18,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor:
      COLORS.card,
  },

  filterTitle: {
    color: COLORS.textPrimary,
    marginBottom: 12,
  },

  filters: {
    gap: 8,
  },

  filterButton: {
    borderRadius: 8,
  },

  sectionTitle: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 12,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },

  emptyCard: {
    marginHorizontal: 18,
    borderRadius: 16,
  },

  emptyText: {
    marginTop: 10,
    color: COLORS.textSecondary,
  },

});