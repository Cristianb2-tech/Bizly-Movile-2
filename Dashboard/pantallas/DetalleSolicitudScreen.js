import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Alert,
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

export default function DetalleSolicitudScreen({
  route,
  navigation,
}) {

  const {
    solicitud,
  } = route.params;

  const aprobarSolicitud =
    async () => {

      await Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Success
      );

      Alert.alert(
        'Solicitud aprobada',
        'La solicitud fue aprobada correctamente.',
        [
          {
            text: 'Aceptar',
            onPress: () =>
              navigation.goBack(),
          },
        ]
      );
    };

  const rechazarSolicitud =
    () => {

      Alert.alert(
        'Rechazar Solicitud',
        '¿Está seguro de que desea rechazar esta solicitud?',
        [
          {
            text: 'Cancelar',
            style: 'cancel',
          },

          {
            text: 'Rechazar',
            style: 'destructive',

            onPress:
              async () => {

                await Haptics.notificationAsync(
                  Haptics.NotificationFeedbackType.Warning
                );

                Alert.alert(
                  'Solicitud rechazada',
                  'La solicitud fue rechazada.',
                  [
                    {
                      text: 'Aceptar',
                      onPress: () =>
                        navigation.goBack(),
                    },
                  ]
                );

              },
          },
        ]
      );
    };

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top']}
    >

      <View
        style={styles.container}
      >

        <View
          style={styles.header}
        >

          <Button
            icon="arrow-left"
            textColor={
              COLORS.white
            }
            onPress={() =>
              navigation.goBack()
            }
          >
            Regresar
          </Button>

          <Text
            style={styles.headerTitle}
          >
            Detalle
          </Text>

        </View>

        <Card
          style={styles.card}
        >

          <Card.Content>

            <View
              style={
                styles.iconContainer
              }
            >

              <MaterialIcons
                name="assignment"
                size={45}
                color={
                  COLORS.primary
                }
              />

            </View>

            <Text
              variant="headlineSmall"
              style={styles.title}
            >
              Detalle de Solicitud
            </Text>

            <Text
              variant="titleLarge"
              style={styles.name}
            >
              {solicitud.nombre}
            </Text>

            <Text
              style={styles.description}
            >
              {solicitud.descripcion}
            </Text>

            <View
              style={styles.statusContainer}
            >

              <Text
                style={styles.status}
              >
                Estado actual:
              </Text>

              <Text
                style={
                  styles.statusValue
                }
              >
                {solicitud.estado}
              </Text>

            </View>

          </Card.Content>

        </Card>

        <Card
          style={styles.actionsCard}
        >

          <Card.Content>

            <Text
              variant="titleMedium"
              style={styles.actionsTitle}
            >
              Dictamen de la solicitud
            </Text>

            <Button
              mode="contained"
              icon="check"
              buttonColor={
                COLORS.secondary
              }
              textColor={
                COLORS.white
              }
              onPress={
                aprobarSolicitud
              }
              style={styles.button}
            >
              Aprobar Solicitud
            </Button>

            <Button
              mode="outlined"
              icon="close"
              textColor={
                COLORS.primaryDark
              }
              onPress={
                rechazarSolicitud
              }
              style={styles.button}
            >
              Rechazar Solicitud
            </Button>

          </Card.Content>

        </Card>

      </View>

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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:
      COLORS.primary,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  card: {
    margin: 18,
    borderRadius: 18,
    backgroundColor:
      COLORS.card,
  },

  iconContainer: {
    width: 65,
    height: 65,
    borderRadius: 18,
    backgroundColor:
      COLORS.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },

  title: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },

  name: {
    marginTop: 20,
    color: COLORS.primaryDark,
    fontWeight: 'bold',
  },

  description: {
    marginTop: 10,
    color: COLORS.textSecondary,
    lineHeight: 21,
  },

  statusContainer: {
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    backgroundColor:
      COLORS.secondaryLight,
  },

  status: {
    color: COLORS.textSecondary,
  },

  statusValue: {
    marginTop: 4,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },

  actionsCard: {
    marginHorizontal: 18,
    borderRadius: 18,
    backgroundColor:
      COLORS.card,
  },

  actionsTitle: {
    marginBottom: 15,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },

  button: {
    marginBottom: 12,
    borderRadius: 9,
  },

});