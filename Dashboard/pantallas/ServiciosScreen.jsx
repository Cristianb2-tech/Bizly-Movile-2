import React, {
  useState,
} from 'react';

import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Appbar,
  FAB,
  Text,
} from 'react-native-paper';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import ServicioCard
  from '../componentes/ServicioCard';

import logo from '../assets/Logo.png';

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

/*
  IMPORTANTE:
  Los valores son únicamente ejemplos
  para cumplir el taller.

  Cámbialos cuando Bizly defina
  sus precios reales.
*/

const serviciosIniciales = [
  {
    id: 1,

    nombre:
      'Gestión de inventario',

    descripcion:
      'Controla productos, existencias y alertas de stock bajo.',

    categoria:
      'Gestión operativa',

    valor:
      '$25.000 COP / mes',

    imagen:
      'https://picsum.photos/seed/bizly-inventario/900/500',
  },

  {
    id: 2,

    nombre:
      'Registro de ventas',

    descripcion:
      'Registra transacciones y consulta el historial comercial.',

    categoria:
      'Gestión comercial',

    valor:
      '$30.000 COP / mes',

    imagen:
      'https://picsum.photos/seed/bizly-ventas/900/500',
  },

  {
    id: 3,

    nombre:
      'Administración de clientes',

    descripcion:
      'Centraliza los datos y el seguimiento de cada cliente.',

    categoria:
      'Relación con clientes',

    valor:
      '$20.000 COP / mes',

    imagen:
      'https://picsum.photos/seed/bizly-clientes/900/500',
  },

  {
    id: 4,

    nombre:
      'Reportes y estadísticas',

    descripcion:
      'Presenta indicadores para apoyar la toma de decisiones.',

    categoria:
      'Análisis del negocio',

    valor:
      '$30.000 COP / mes',

    imagen:
      'https://picsum.photos/seed/bizly-reportes/900/500',
  },
];

export default function ServiciosScreen() {
  const [servicios, setServicios] =
    useState(serviciosIniciales);

  const agregarServicio = () => {
    const yaExiste = servicios.some(
      (servicio) =>
        servicio.nombre ===
        'Soporte al cliente'
    );

    if (yaExiste) {
      Alert.alert(
        'Módulo existente',
        'El servicio de soporte ya fue agregado.'
      );

      return;
    }

    const nuevoServicio = {
      id: Date.now(),

      nombre:
        'Soporte al cliente',

      descripcion:
        'Permite orientar a los usuarios y resolver sus solicitudes.',

      categoria:
        'Atención al usuario',

      valor:
        '$15.000 COP / mes',

      imagen:
        'https://picsum.photos/seed/bizly-soporte/900/500',
    };

    setServicios(
      (serviciosAnteriores) => [
        ...serviciosAnteriores,
        nuevoServicio,
      ]
    );

    Alert.alert(
      'Módulo agregado',
      'Soporte al cliente fue agregado correctamente.'
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
        <Image
          source={logo}
          style={styles.logo}
          resizeMode="contain"
        />

        <Appbar.Content
          title="BIZLY"
          subtitle="Servicios para tu negocio"
          titleStyle={
            styles.tituloHeader
          }
          subtitleStyle={
            styles.subtituloHeader
          }
        />
      </Appbar.Header>

      <ScrollView
        contentContainerStyle={
          styles.contenido
        }
        showsVerticalScrollIndicator={
          false
        }
      >
        <View
          style={styles.presentacion}
        >
          <View
            style={
              styles.presentacionSuperior
            }
          >
            <Image
              source={logo}
              style={
                styles.logoPresentacion
              }
              resizeMode="contain"
            />

            <Text
              variant="headlineSmall"
              style={styles.titulo}
            >
              Servicios
            </Text>
          </View>

          <Text
            style={
              styles.textoPresentacion
            }
          >
            Bizly integra herramientas
            para gestionar inventario,
            ventas, clientes, reportes
            y otros procesos comerciales.
          </Text>

          <Text style={styles.aviso}>
            Valores demostrativos para
            la actividad académica.
          </Text>
        </View>

        {servicios.map(
          (servicio) => (
            <ServicioCard
              key={servicio.id}
              nombre={servicio.nombre}
              descripcion={
                servicio.descripcion
              }
              categoria={
                servicio.categoria
              }
              imagen={servicio.imagen}
              valor={servicio.valor}
            />
          )
        )}

        <View
          style={styles.espacioFinal}
        />
      </ScrollView>

      <FAB
        icon="plus"
        label="Agregar módulo"
        style={styles.fab}
        color={colores.white}
        onPress={agregarServicio}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:
      colores.background,
  },

  header: {
    backgroundColor:
      colores.primaryDark,
    paddingHorizontal: 8,
  },

  logo: {
  width: 48,
  height: 48,
},

  tituloHeader: {
    color: colores.white,
    fontWeight: 'bold',
  },

  subtituloHeader: {
    color:
      colores.secondaryLight,
  },

  contenido: {
    padding: 16,
    paddingBottom: 110,
    backgroundColor:
      colores.background,
  },

  presentacion: {
    backgroundColor:
      colores.secondaryLight,
    borderRadius: 14,
    borderWidth: 1,
    borderColor:
      colores.secondary,
    padding: 18,
    marginBottom: 18,
  },

  presentacionSuperior: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoPresentacion: {
  width: 65,
  height: 65,
  marginRight: 12,
},

  titulo: {
    flex: 1,
    color:
      colores.primaryDark,
    fontWeight: 'bold',
  },

  textoPresentacion: {
    color:
      colores.textSecondary,
    lineHeight: 20,
    marginTop: 12,
  },

  aviso: {
    color:
      colores.primaryDark,
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
  },

  espacioFinal: {
    height: 20,
  },

  fab: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    backgroundColor:
      colores.primary,
  },
});