import React from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Appbar,
  Avatar,
  Card,
  Chip,
  Text,
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

function PantallaModulo({
  navigation,
  titulo,
  subtitulo,
  icono,
  items,
}) {

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
          title={titulo}
          subtitle={subtitulo}
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
      >

        <Card style={styles.heroCard}>

          <Card.Content
            style={styles.heroContent}
          >

            <Avatar.Icon
              size={58}
              icon={icono}
              color={COLORS.primary}
              style={styles.heroAvatar}
            />

            <View
              style={styles.heroText}
            >

              <Text
                variant="titleLarge"
                style={styles.heroTitle}
              >
                {titulo}
              </Text>

              <Text
                style={
                  styles.heroDescription
                }
              >
                {subtitulo}
              </Text>

            </View>

          </Card.Content>

        </Card>

        {items.map((item) => (

          <Card
            key={item.id}
            style={styles.card}
          >

            <Card.Content>

              <Text
                variant="titleMedium"
                style={styles.itemTitle}
              >
                {item.titulo}
              </Text>

              <Text
                style={
                  styles.itemDescription
                }
              >
                {item.descripcion}
              </Text>

              {item.estado && (

                <Chip
                  compact
                  style={styles.chip}
                >
                  {item.estado}
                </Chip>

              )}

            </Card.Content>

          </Card>

        ))}

      </ScrollView>

    </SafeAreaView>
  );
}

export function InventarioScreen(
  props
) {

  return (
    <PantallaModulo
      {...props}
      titulo="Inventario"
      subtitulo="Control de existencias y disponibilidad."
      icono="warehouse"
      items={[
        {
          id: 1,
          titulo: 'Camiseta básica',
          descripcion:
            '18 unidades disponibles.',
          estado: 'Stock estable',
        },

        {
          id: 2,
          titulo: 'Gorra urbana',
          descripcion:
            '12 unidades disponibles.',
          estado: 'Stock estable',
        },

        {
          id: 3,
          titulo: 'Mochila clásica',
          descripcion:
            '8 unidades disponibles.',
          estado: 'Revisar stock',
        },
      ]}
    />
  );
}

export function VentasScreen(
  props
) {

  return (
    <PantallaModulo
      {...props}
      titulo="Ventas"
      subtitulo="Transacciones recientes del negocio."
      icono="cash-register"
      items={[
        {
          id: 1,
          titulo: 'Venta #1048',
          descripcion:
            '$85.000 COP · 2 productos',
          estado: 'Completada',
        },

        {
          id: 2,
          titulo: 'Venta #1047',
          descripcion:
            '$35.000 COP · 1 producto',
          estado: 'Completada',
        },
      ]}
    />
  );
}

export function ClientesScreen(
  props
) {

  return (
    <PantallaModulo
      {...props}
      titulo="Clientes"
      subtitulo="Clientes vinculados al negocio."
      icono="account-group"
      items={[
        {
          id: 1,
          titulo: 'Laura Gómez',
          descripcion:
            'Cliente frecuente',
          estado: 'Activo',
        },

        {
          id: 2,
          titulo: 'Andrés Ruiz',
          descripcion:
            'Cliente registrado',
          estado: 'Activo',
        },
      ]}
    />
  );
}

export function ReportesScreen(
  props
) {

  return (
    <PantallaModulo
      {...props}
      titulo="Reportes"
      subtitulo="Indicadores del negocio."
      icono="chart-box"
      items={[
        {
          id: 1,
          titulo:
            'Ventas del mes',
          descripcion:
            '$2.450.000 COP acumulados.',
          estado: '+12%',
        },

        {
          id: 2,
          titulo:
            'Productos vendidos',
          descripcion:
            '74 unidades registradas.',
          estado:
            'Buen desempeño',
        },
      ]}
    />
  );
}

export function UsuariosScreen(
  props
) {

  return (
    <PantallaModulo
      {...props}
      titulo="Usuarios"
      subtitulo="Usuarios y roles de acceso."
      icono="account-cog"
      items={[
        {
          id: 1,
          titulo:
            'Administrador',
          descripcion:
            'Acceso completo.',
          estado: 'Activo',
        },

        {
          id: 2,
          titulo: 'Vendedor',
          descripcion:
            'Acceso a ventas y clientes.',
          estado: 'Activo',
        },
      ]}
    />
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
      color: COLORS.white,
      fontWeight: 'bold',
    },

    headerSubtitle: {
      color:
        COLORS.secondaryLight,
    },

    content: {
      padding: 16,
      backgroundColor:
        COLORS.background,
    },

    heroCard: {
      marginBottom: 18,
      backgroundColor:
        COLORS.secondaryLight,
      borderWidth: 1,
      borderColor:
        COLORS.secondary,
    },

    heroContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    heroAvatar: {
      backgroundColor:
        COLORS.white,
    },

    heroText: {
      flex: 1,
      marginLeft: 14,
    },

    heroTitle: {
      color:
        COLORS.primaryDark,
      fontWeight: 'bold',
    },

    heroDescription: {
      marginTop: 4,
      color:
        COLORS.textSecondary,
    },

    card: {
      marginBottom: 14,
      backgroundColor:
        COLORS.card,
      borderWidth: 1,
      borderColor:
        COLORS.border,
    },

    itemTitle: {
      color:
        COLORS.textPrimary,
      fontWeight: 'bold',
    },

    itemDescription: {
      marginTop: 4,
      color:
        COLORS.textSecondary,
    },

    chip: {
      alignSelf: 'flex-start',
      marginTop: 12,
      backgroundColor:
        COLORS.secondaryLight,
    },

  });