import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

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

import InicioScreen from './pantallas/InicioScreen';
import ServiciosScreen from './pantallas/ServiciosScreen';
import ContactoScreen from './pantallas/ContactoScreen';

const Tab = createBottomTabNavigator();

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

    primary: COLORS.primary,
    onPrimary: COLORS.white,

    primaryContainer: COLORS.secondaryLight,
    onPrimaryContainer: COLORS.textPrimary,

    secondary: COLORS.secondary,
    onSecondary: COLORS.textPrimary,

    secondaryContainer: COLORS.secondaryLight,
    onSecondaryContainer: COLORS.textPrimary,

    background: COLORS.background,
    onBackground: COLORS.textPrimary,

    surface: COLORS.card,
    onSurface: COLORS.textPrimary,

    outline: COLORS.border,
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={temaBizly}>
        <NavigationContainer>
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
                backgroundColor: COLORS.white,
                borderTopColor: COLORS.border,
                borderTopWidth: 1,
              },

              tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: 'bold',
              },

              tabBarIcon: ({
                color,
                size,
              }) => {
                let icono;

                if (route.name === 'Inicio') {
                  icono = 'home';
                } else if (
                  route.name === 'Servicios'
                ) {
                  icono = 'view-module';
                } else {
                  icono = 'contact-mail';
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
              component={ServiciosScreen}
            />

            <Tab.Screen
              name="Contacto"
              component={ContactoScreen}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}