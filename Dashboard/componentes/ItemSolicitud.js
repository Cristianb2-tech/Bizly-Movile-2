import React, {
  useState,
} from 'react';

import {
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

export default function ItemSolicitud({
  solicitud,
  onPress,
}) {

  const [
    prioritario,
    setPrioritario,
  ] = useState(false);

  const cambiarPrioridad =
    async () => {

      if (!prioritario) {

        await Haptics.impactAsync(
          Haptics.ImpactFeedbackStyle.Heavy
        );

      } else {

        await Haptics.impactAsync(
          Haptics.ImpactFeedbackStyle.Light
        );

      }

      setPrioritario(
        !prioritario
      );
    };

  return (
    <Card
      style={styles.card}
      onPress={onPress}
    >

      <Card.Content>

        <View
          style={
            styles.titleContainer
          }
        >

          <View
            style={
              styles.iconContainer
            }
          >

            <MaterialIcons
              name="description"
              size={27}
              color={
                COLORS.primary
              }
            />

          </View>

          <View
            style={
              styles.titleText
            }
          >

            <Text
              variant="titleMedium"
              style={
                styles.title
              }
            >
              {solicitud.nombre}
            </Text>

            <Text
              style={
                styles.status
              }
            >
              Estado: {solicitud.estado}
            </Text>

          </View>

        </View>

        <Text
          style={
            styles.description
          }
        >
          {solicitud.descripcion}
        </Text>

        <Button
          mode={
            prioritario
              ? 'contained'
              : 'outlined'
          }
          icon={
            prioritario
              ? 'star'
              : 'star-outline'
          }
          onPress={
            cambiarPrioridad
          }
          textColor={
            prioritario
              ? COLORS.white
              : COLORS.primary
          }
          buttonColor={
            prioritario
              ? COLORS.primary
              : undefined
          }
          style={
            styles.priorityButton
          }
        >
          {prioritario
            ? 'Prioritario'
            : 'Marcar Prioritario'}
        </Button>

      </Card.Content>

    </Card>
  );
}

const styles = StyleSheet.create({

  card: {
    marginHorizontal: 18,
    marginBottom: 14,
    borderRadius: 16,
    backgroundColor:
      COLORS.card,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 13,
    backgroundColor:
      COLORS.secondaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  titleText: {
    flex: 1,
  },

  title: {
    color: COLORS.textPrimary,
    fontWeight: 'bold',
  },

  status: {
    marginTop: 3,
    color: COLORS.textSecondary,
  },

  description: {
    marginTop: 12,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },

  priorityButton: {
    marginTop: 14,
    borderRadius: 8,
  },

});