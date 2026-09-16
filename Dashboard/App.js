import React, {
  useContext
} from 'react';


import {
  NavigationContainer
} from '@react-navigation/native';


import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';



import {
  AuthProvider,
  AuthContext
} from './contextos/AuthContext';



import {
  ProductosProvider
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



import {
  InventarioScreen,
  VentasScreen,
  ClientesScreen,
  ReportesScreen,
  UsuariosScreen
} from './pantallas/ModulosBasicos';



import SolicitudesScreen
from './pantallas/SolicitudesScreen';


import DetalleSolicitudScreen
from './pantallas/DetalleSolicitudScreen';



const Stack =
createNativeStackNavigator();





function Navegacion() {


  const {

    userToken,

    isLoading

  } = useContext(AuthContext);



  if (isLoading) {

    return null;

  }



  return (

    <NavigationContainer>


      <Stack.Navigator>


        {
          userToken ? (

            <>


              <Stack.Screen

                name="Principal"

                component={InicioScreen}

                options={{

                  headerShown:false

                }}

              />



              <Stack.Screen

                name="Productos"

                component={ProductosScreen}

                options={{

                  title:'Productos'

                }}

              />



              <Stack.Screen

                name="CrearProducto"

                component={CrearProductoScreen}

                options={{

                  title:'Crear Producto'

                }}

              />



              <Stack.Screen

                name="Inventario"

                component={InventarioScreen}

                options={{

                  title:'Inventario'

                }}

              />



              <Stack.Screen

                name="Ventas"

                component={VentasScreen}

                options={{

                  title:'Ventas'

                }}

              />



              <Stack.Screen

                name="Clientes"

                component={ClientesScreen}

                options={{

                  title:'Clientes'

                }}

              />



              <Stack.Screen

                name="Reportes"

                component={ReportesScreen}

                options={{

                  title:'Reportes'

                }}

              />



              <Stack.Screen

                name="Usuarios"

                component={UsuariosScreen}

                options={{

                  title:'Usuarios'

                }}

              />



              <Stack.Screen

                name="Solicitudes"

                component={SolicitudesScreen}

                options={{

                  title:'Solicitudes'

                }}

              />



              <Stack.Screen

                name="DetalleSolicitud"

                component={DetalleSolicitudScreen}

                options={{

                  title:'Detalle de Solicitud'

                }}

              />


            </>


          ) : (


            <>


              <Stack.Screen

                name="InicioSesion"

                component={InicioSesionScreen}

                options={{

                  headerShown:false

                }}

              />



              <Stack.Screen

                name="Registro"

                component={RegistroScreen}

                options={{

                  title:'Registro'

                }}

              />


            </>


          )

        }


      </Stack.Navigator>


    </NavigationContainer>

  );

}





export default function App() {


  return (

    <AuthProvider>


      <ProductosProvider>


        <Navegacion />


      </ProductosProvider>


    </AuthProvider>

  );

}
