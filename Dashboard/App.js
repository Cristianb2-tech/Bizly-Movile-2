import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {
  ProductosProvider,
} from './contextos/ProductosContext';

import InicioSesionScreen
  from './pantallas/InicioSesionScreen';

import RegistroScreen
  from './pantallas/RegistroScreen';

import InicioScreen
  from './pantallas/InicioScreen';

import ProductosScreen
  from './pantallas/ProductosScreen';

import CrearProductoScreen
  from './pantallas/CrearProductoScreen';

import ModulosBasicos
  from './pantallas/ModulosBasicos';

import ServiciosScreen
  from './pantallas/ServiciosScreen';

import ContactoScreen
  from './pantallas/ContactoScreen';

import SolicitudesScreen
  from './pantallas/SolicitudesScreen';

import DetalleSolicitudScreen
  from './pantallas/DetalleSolicitudScreen';


const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function Tabs() {

  return (

    <Tab.Navigator>

      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
        options={{
          headerShown: false,
        }}
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

  );
}


export default function App() {

  return (

    <ProductosProvider>

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            name="InicioSesion"
            component={InicioSesionScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Registro"
            component={RegistroScreen}
            options={{
              title: 'Registro',
            }}
          />

          <Stack.Screen
            name="Principal"
            component={Tabs}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Productos"
            component={ProductosScreen}
            options={{
              title: 'Productos',
            }}
          />

          <Stack.Screen
            name="CrearProducto"
            component={CrearProductoScreen}
            options={{
              title: 'Crear Producto',
            }}
          />

          <Stack.Screen
            name="Inventario"
            component={ModulosBasicos}
            initialParams={{
              modulo: 'Inventario',
            }}
            options={{
              title: 'Inventario',
            }}
          />

          <Stack.Screen
            name="Ventas"
            component={ModulosBasicos}
            initialParams={{
              modulo: 'Ventas',
            }}
            options={{
              title: 'Ventas',
            }}
          />

          <Stack.Screen
            name="Clientes"
            component={ModulosBasicos}
            initialParams={{
              modulo: 'Clientes',
            }}
            options={{
              title: 'Clientes',
            }}
          />

          <Stack.Screen
            name="Reportes"
            component={ModulosBasicos}
            initialParams={{
              modulo: 'Reportes',
            }}
            options={{
              title: 'Reportes',
            }}
          />

          <Stack.Screen
            name="Usuarios"
            component={ModulosBasicos}
            initialParams={{
              modulo: 'Usuarios',
            }}
            options={{
              title: 'Usuarios',
            }}
          />

          <Stack.Screen
            name="Solicitudes"
            component={SolicitudesScreen}
            options={{
              title: 'Solicitudes',
            }}
          />

          <Stack.Screen
            name="DetalleSolicitud"
            component={DetalleSolicitudScreen}
            options={{
              title: 'Detalle de Solicitud',
            }}
          />

        </Stack.Navigator>

      </NavigationContainer>

    </ProductosProvider>

  );

}