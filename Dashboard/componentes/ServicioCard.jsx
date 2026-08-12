import React from 'react';

import {
  Alert,
  StyleSheet,
} from 'react-native';

import {
  Button,
  Card,
  Text,
} from 'react-native-paper';

const colores = {
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

export default function ServicioCard({
  nombre,
  descripcion,
  categoria,
  imagen,
  valor,
}) {
  const mostrarDetalles = () => {
    Alert.alert(
      nombre,
      `${descripcion}\n\nCategoría: ${categoria}\nValor: ${valor}`
    );
  };

  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{ uri: imagen }}
        style={styles.imagen}
      />

      <Card.Content
        style={styles.contenido}
      >
        <Text
          variant="titleLarge"
          style={styles.nombre}
        >
          {nombre}
        </Text>

        <Text
          variant="bodyMedium"
          style={styles.descripcion}
        >
          {descripcion}
        </Text>

        <Text style={styles.categoria}>
          {categoria}
        </Text>

        <Text style={styles.valor}>
          {valor}
        </Text>
      </Card.Content>

      <Card.Actions
        style={styles.acciones}
      >
        <Button
          mode="contained"
          icon="eye"
          buttonColor={colores.primary}
          textColor={colores.white}
          onPress={mostrarDetalles}
        >
          Ver detalles
        </Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 18,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: colores.card,
    borderWidth: 1,
    borderColor: colores.border,
  },

  imagen: {
    height: 180,
    backgroundColor:
      colores.secondaryLight,
  },

  contenido: {
    paddingTop: 4,
  },

  nombre: {
    marginTop: 12,
    marginBottom: 6,
    color: colores.primaryDark,
    fontWeight: 'bold',
  },

  descripcion: {
    marginBottom: 12,
    lineHeight: 20,
    color: colores.textSecondary,
  },

  categoria: {
    alignSelf: 'flex-start',
    backgroundColor:
      colores.secondaryLight,
    color: colores.primaryDark,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    fontWeight: 'bold',
  },

  valor: {
    marginTop: 12,
    color: colores.primary,
    fontWeight: 'bold',
    fontSize: 17,
  },

  acciones: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
});