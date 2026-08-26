# Reporte de Pantallas Desarrolladas - Bizly

## Proyecto Productivo

Bizly es una aplicación móvil orientada a la gestión de las operaciones básicas de un negocio.

Durante el proceso de desarrollo se construyeron y organizaron las pantallas necesarias para permitir la navegación entre los diferentes módulos de la aplicación.

## Pantallas desarrolladas

### 1. Inicio de sesión

La pantalla de inicio de sesión permite ingresar un correo y una contraseña para acceder al sistema.

También permite dirigirse a la pantalla de registro para crear una cuenta.

### 2. Registro

La pantalla de registro permite ingresar el nombre, correo y contraseña de un nuevo usuario.

### 3. Inicio

La pantalla de inicio funciona como panel principal de Bizly.

Desde esta pantalla el usuario puede acceder a:

- Productos
- Inventario
- Ventas
- Clientes
- Reportes
- Usuarios

### 4. Productos

La pantalla Productos permite visualizar los productos registrados en la aplicación.

También permite acceder a la creación de un nuevo producto.

### 5. Crear Producto

Permite registrar la información de un producto.

Esta pantalla utiliza la cámara del dispositivo para tomar una fotografía del producto y mostrar una vista previa antes de registrarlo.

### 6. Inventario

Permite visualizar información relacionada con las existencias de los productos y su disponibilidad.

### 7. Ventas

Permite consultar información relacionada con las ventas realizadas en el negocio.

### 8. Clientes

Permite visualizar los clientes registrados en el sistema.

### 9. Reportes

Permite consultar indicadores relacionados con la operación del negocio.

### 10. Usuarios

Permite visualizar los usuarios y roles disponibles dentro de la aplicación.

Desde esta pantalla se puede acceder al registro de un nuevo usuario.

### 11. Servicios

Presenta los servicios y funcionalidades disponibles dentro de Bizly.

### 12. Contacto

Presenta la información de contacto asociada al proyecto.

## Navegación

La aplicación utiliza React Navigation.

Se implementó Native Stack Navigator para navegar entre las pantallas internas y Bottom Tab Navigator para las secciones principales.

El flujo principal es:

Inicio de sesión → Inicio

Inicio de sesión → Registro

Inicio → Productos → Crear Producto

Inicio → Inventario

Inicio → Ventas

Inicio → Clientes

Inicio → Reportes

Inicio → Usuarios → Registro

También se puede acceder desde la navegación inferior a:

- Inicio
- Servicios
- Contacto

## Uso de la cámara

La cámara se implementó dentro del módulo de creación de productos.

El usuario puede abrir la cámara del dispositivo, tomar una fotografía y visualizar la imagen capturada antes de registrar el producto.

## Uso del giroscopio

No se implementó el giroscopio debido a que las funcionalidades actuales de Bizly no requieren detectar la rotación, inclinación o velocidad angular del dispositivo.