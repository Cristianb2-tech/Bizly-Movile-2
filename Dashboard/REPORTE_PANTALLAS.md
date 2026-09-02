# REPORTE DE PANTALLAS – BIZLY

## 1. Descripción del proyecto

Bizly es una aplicación móvil orientada a la gestión de las operaciones básicas de un negocio. Durante el desarrollo del proyecto se construyeron diferentes pantallas destinadas a organizar y consultar información relacionada con productos, inventario, ventas, clientes, reportes, usuarios y servicios.

La aplicación cuenta con una pantalla de inicio de sesión y una pantalla de registro de usuarios. Después de iniciar sesión, el usuario puede acceder al panel principal y a los diferentes módulos disponibles.

## 2. Pantallas desarrolladas

### 2.1 Inicio de sesión

La pantalla de Inicio de sesión permite ingresar el correo electrónico y la contraseña del usuario.

Cuenta con un botón para iniciar sesión y permite acceder al registro cuando el usuario todavía no tiene una cuenta.

### 2.2 Registro

La pantalla de Registro permite crear un usuario mediante los datos solicitados por la aplicación.

### 2.3 Inicio

La pantalla de Inicio funciona como el panel principal de Bizly.

Presenta el nombre y logotipo de la aplicación, además de las funcionalidades disponibles.

Desde esta pantalla se puede acceder a los diferentes módulos de la aplicación.

### 2.4 Productos

La pantalla de Productos permite consultar los productos registrados.

Cada producto presenta información relacionada con su nombre, precio, stock y categoría.

También cuenta con la opción para crear un nuevo producto.

### 2.5 Crear producto

La pantalla de Crear producto permite registrar un nuevo artículo.

El usuario puede ingresar la información correspondiente al producto y utilizar la cámara del dispositivo para registrar una fotografía.

La fotografía tomada se muestra como vista previa dentro de la misma pantalla antes de guardar el producto.

### 2.6 Inventario

La pantalla de Inventario permite visualizar información relacionada con las existencias y disponibilidad de los productos.

### 2.7 Ventas

La pantalla de Ventas permite consultar información relacionada con las transacciones realizadas en el negocio.

### 2.8 Clientes

La pantalla de Clientes permite visualizar información relacionada con los clientes registrados en el sistema.

### 2.9 Reportes

La pantalla de Reportes permite consultar información relacionada con la operación del negocio.

### 2.10 Usuarios

La pantalla de Usuarios permite visualizar información relacionada con los usuarios y roles disponibles dentro de la aplicación.

### 2.11 Servicios

La pantalla de Servicios presenta los servicios y funcionalidades disponibles dentro de Bizly.

### 2.12 Contacto

La pantalla de Contacto presenta la información de contacto asociada al proyecto.

## 3. Navegación implementada

La aplicación utiliza React Navigation para realizar la navegación entre las diferentes pantallas.

Se implementó navegación mediante Native Stack Navigator y Bottom Tab Navigator.

El flujo principal permite acceder desde el inicio de sesión al registro y posteriormente a las diferentes secciones de la aplicación.

Entre las secciones desarrolladas se encuentran:

- Inicio
- Productos
- Inventario
- Ventas
- Clientes
- Reportes
- Usuarios
- Servicios
- Contacto

Dentro del módulo de Productos también se puede acceder a la pantalla de Crear Producto.

## 4. Integración de la cámara

La cámara fue integrada en el módulo de Crear Producto.

Esta funcionalidad permite tomar una fotografía del producto utilizando la cámara del dispositivo.

La fotografía capturada se almacena en el estado local de la pantalla y posteriormente se muestra como vista previa.

El flujo de esta funcionalidad es:

Crear producto → Abrir cámara → Tomar fotografía → Vista previa → Guardar producto

Para implementar esta funcionalidad se utiliza la librería expo-camera.

## 5. Giroscopio

Durante el desarrollo actual de Bizly no se implementó el giroscopio.

Las funcionalidades desarrolladas actualmente no requieren detectar la rotación o inclinación del dispositivo.

## 6. Tecnologías utilizadas

- React Native
- Expo
- React Navigation
- React Native Paper
- Expo Camera
- React Native Screens
- React Native Safe Area Context

## 7. Estructura general

El proyecto contiene las pantallas, componentes, contextos y recursos utilizados para desarrollar la aplicación Bizly.

Las pantallas principales desarrolladas corresponden a:

- Inicio de sesión
- Registro
- Inicio
- Productos
- Crear Producto
- Inventario
- Ventas
- Clientes
- Reportes
- Usuarios
- Servicios
- Contacto

## 8. Conclusión

Durante el desarrollo del proyecto productivo Bizly se construyeron las diferentes pantallas necesarias para el funcionamiento básico de la aplicación.

Se implementó la navegación entre las pantallas y se integró la cámara en el módulo de creación de productos para registrar evidencia fotográfica.

De esta manera se completó el flujo básico de navegación y las funcionalidades desarrolladas durante los talleres.