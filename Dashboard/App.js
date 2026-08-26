import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  MaterialIcons,
} from '@expo/vector-icons';

import {
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import InicioSesionScreen
  from './pantallas/InicioSesionScreen';

import RegistroScreen
  from './pantallas/RegistroScreen';

import InicioScreen
  from './pantallas/InicioScreen';

import ServiciosScreen
  from './pantallas/ServiciosScreen';

import ContactoScreen
  from './pantallas/ContactoScreen';

import ProductosScreen
  from './pantallas/ProductosScreen';

import CrearProductoScreen
  from './pantallas/CrearProductoScreen';

import {
  InventarioScreen,
  VentasScreen,
  ClientesScreen,
  ReportesScreen,
  UsuariosScreen,
} from './pantallas/ModulosBasicos';

import {
  ProductosProvider,
} from './contextos/ProductosContext';

const Tab =
  createBottomTabNavigator();

const Stack =
  createNativeStackNavigator();

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

const temaBizly = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,

    primary:
      COLORS.primary,

    onPrimary:
      COLORS.white,

    secondary:
      COLORS.secondary,

    background:
      COLORS.background,

    surface:
      COLORS.card,

    onSurface:
      COLORS.textPrimary,

    outline:
      COLORS.border,
  },
};

function TabsPrincipales() {

  return (
    <Tab.Navigator
      initialRouteName="Inicio"

      screenOptions={({ route }) => ({

        headerShown: false,

        tabBarActiveTintColor:
          COLORS.primary,

        tabBarInactiveTintColor:
          COLORS.textSecondary,

        tabBarStyle: {
          height: 68,
          paddingTop: 7,
          paddingBottom: 8,
          backgroundColor:
            COLORS.white,
          borderTopColor:
            COLORS.border,
        },

        tabBarIcon: ({
          color,
          size,
        }) => {

          let icono;

          if (
            route.name === 'Inicio'
          ) {

            icono = 'home';

          } else if (
            route.name ===
            'Servicios'
          ) {

            icono = 'view-module';

          } else {

            icono =
              'contact-mail';
          }

          return (
            <MaterialIcons
              name={icono}
              size={size}
              color={color}
            />
          );
        },

      })}
    >

      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
      />

      <Tab.Screen
        name="Servicios"
        component={
          ServiciosScreen
        }
      />

      <Tab.Screen
        name="Contacto"
        component={
          ContactoScreen
        }
      />

    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <SafeAreaProvider>

      <PaperProvider
        theme={temaBizly}
      >

        <ProductosProvider>

          <NavigationContainer>

            <Stack.Navigator
              initialRouteName=
                "InicioSesion"

              screenOptions={{
                headerShown: false,
              }}
            >

              <Stack.Screen
                name="InicioSesion"
                component={
                  InicioSesionScreen
                }
              />

              <Stack.Screen
                name="Registro"
                component={
                  RegistroScreen
                }
              />

              <Stack.Screen
                name="Principal"
                component={
                  TabsPrincipales
                }
              />

              <Stack.Screen
                name="Productos"
                component={
                  ProductosScreen
                }
              />

              <Stack.Screen
                name="CrearProducto"
                component={
                  CrearProductoScreen
                }
              />

              <Stack.Screen
                name="Inventario"
                component={
                  InventarioScreen
                }
              />

              <Stack.Screen
                name="Ventas"
                component={
                  VentasScreen
                }
              />

              <Stack.Screen
                name="Clientes"
                component={
                  ClientesScreen
                }
              />

              <Stack.Screen
                name="Reportes"
                component={
                  ReportesScreen
                }
              />

              <Stack.Screen
                name="Usuarios"
                component={
                  UsuariosScreen
                }
              />

            </Stack.Navigator>

          </NavigationContainer>

        </ProductosProvider>

      </PaperProvider>

    </SafeAreaProvider>
  );
}