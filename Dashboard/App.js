import React, { useState } from 'react';

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
  MD3LightTheme,
  PaperProvider,
  Text,
} from 'react-native-paper';

import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import ServicioCard from './componentes/ServicioCard';
import logo from './assets/Logo.jpeg';

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

const temaBizly = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,

    primary: colores.primary,
    onPrimary: colores.white,

    primaryContainer: colores.secondaryLight,
    onPrimaryContainer: colores.textPrimary,

    secondary: colores.secondary,
    onSecondary: colores.textPrimary,

    secondaryContainer: colores.secondaryLight,
    onSecondaryContainer: colores.textPrimary,

    background: colores.background,
    onBackground: colores.textPrimary,

    surface: colores.card,
    onSurface: colores.textPrimary,

    surfaceVariant: colores.secondaryLight,
    onSurfaceVariant: colores.textSecondary,

    outline: colores.border,
  },
};

const serviciosIniciales = [
  {
    id: 1,
    nombre: 'Gestión de inventario',
    descripcion:
      'Controla productos, existencias y alertas de stock bajo.',
    categoria: 'Gestión operativa',
    imagen:
      'https://chatgpt.com/backend-api/estuary/content?id=file_000000004070820eb823d01c81452339&ts=496095&p=fs&cid=1&sig=3f0a480c7f8100076f72676ad165deac93a9b47c973d23d246f233f46974e259&v=0',
  },
  {
    id: 2,
    nombre: 'Registro de ventas',
    descripcion:
      'Registra transacciones y consulta el historial comercial.',
    categoria: 'Gestión comercial',
    imagen:
      '',
  },
  {
    id: 3,
    nombre: 'Administración de clientes',
    descripcion:
      'Centraliza los datos y el seguimiento de cada cliente.',
    categoria: 'Relación con clientes',
    imagen:
      '',
  },
  {
    id: 4,
    nombre: 'Reportes y estadísticas',
    descripcion:
      'Presenta indicadores para apoyar la toma de decisiones.',
    categoria: 'Análisis del negocio',
    imagen:
      '',
  },
];

export default function App() {
  const [servicios, setServicios] =
    useState(serviciosIniciales);

  const agregarServicio = () => {
    const yaExiste = servicios.some(
      (servicio) =>
        servicio.nombre === 'Soporte al cliente'
    );

    if (yaExiste) {
      Alert.alert(
        'Módulo existente',
        'El servicio de soporte al cliente ya fue agregado.'
      );

      return;
    }

    const nuevoServicio = {
      id: Date.now(),
      nombre: 'Soporte al cliente',
      descripcion:
        'Permite orientar a los usuarios y resolver sus solicitudes.',
      categoria: 'Atención al usuario',
      imagen:
        '',
    };

    setServicios((serviciosAnteriores) => [
      ...serviciosAnteriores,
      nuevoServicio,
    ]);

    Alert.alert(
      'Módulo agregado',
      'El módulo de soporte al cliente fue agregado correctamente.'
    );
  };

  const mostrarMenu = () => {
    Alert.alert(
      'Menú de Bizly',
      'Dashboard, inventario, ventas, clientes y reportes.'
    );
  };

  return (
    <SafeAreaProvider>
      <PaperProvider theme={temaBizly}>
        <SafeAreaView style={styles.safeArea}>
          <Appbar.Header style={styles.header}>
            <Image
              source={logo}
              style={styles.logo}
              resizeMode="contain"
            />

            <Appbar.Content
              title="BIZLY"
              subtitle="Gestión comercial para microempresas"
              titleStyle={styles.tituloHeader}
              subtitleStyle={styles.subtituloHeader}
              style={styles.contenidoHeader}
            />

            <Appbar.Action
              icon="menu"
              iconColor={colores.white}
              onPress={mostrarMenu}
            />
          </Appbar.Header>

          <ScrollView
            contentContainerStyle={styles.contenido}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.presentacion}>
              <View style={styles.presentacionSuperior}>
                <Image
                  source={logo}
                  style={styles.logoPresentacion}
                  resizeMode="contain"
                />

                <Text
                  variant="headlineSmall"
                  style={styles.titulo}
                >
                  Administra tu negocio en un solo lugar
                </Text>
              </View>

              <Text style={styles.textoPresentacion}>
                Bizly centraliza los procesos comerciales,
                administrativos y operativos de microempresas
                y emprendimientos.
              </Text>
            </View>

            {servicios.map((servicio) => (
              <ServicioCard
                key={servicio.id}
                nombre={servicio.nombre}
                descripcion={servicio.descripcion}
                categoria={servicio.categoria}
                imagen={servicio.imagen}
              />
            ))}

            <View style={styles.espacioFinal} />
          </ScrollView>

          <FAB
            icon="plus"
            label="Agregar módulo"
            style={styles.fab}
            color={colores.white}
            onPress={agregarServicio}
          />
        </SafeAreaView>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colores.background,
  },

  header: {
    backgroundColor: colores.primaryDark,
    paddingHorizontal: 8,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: colores.white,
  },

  contenidoHeader: {
    marginLeft: 4,
  },

  tituloHeader: {
    color: colores.white,
    fontWeight: 'bold',
  },

  subtituloHeader: {
    color: colores.secondaryLight,
  },

  contenido: {
    padding: 16,
    backgroundColor: colores.background,
  },

  presentacion: {
    backgroundColor: colores.secondaryLight,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colores.secondary,
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
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: colores.white,
  },

  titulo: {
    flex: 1,
    color: colores.primaryDark,
    fontWeight: 'bold',
  },

  textoPresentacion: {
    color: colores.textSecondary,
    lineHeight: 20,
    marginTop: 12,
  },

  espacioFinal: {
    height: 90,
  },

  fab: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    backgroundColor: colores.primary,
  },
});