import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const ProductosContext =
  createContext(null);

const productosIniciales = [
  {
    id: 1,
    nombre: 'Camiseta básica',
    precio: '35000',
    stock: '18',
    categoria: 'Ropa',
    fotoUri: null,
  },

  {
    id: 2,
    nombre: 'Gorra urbana',
    precio: '25000',
    stock: '12',
    categoria: 'Accesorios',
    fotoUri: null,
  },

  {
    id: 3,
    nombre: 'Mochila clásica',
    precio: '60000',
    stock: '8',
    categoria: 'Accesorios',
    fotoUri: null,
  },
];

export function ProductosProvider({
  children,
}) {

  const [productos, setProductos] =
    useState(productosIniciales);

  const agregarProducto = (
    producto
  ) => {

    setProductos((actuales) => [
      {
        id: Date.now(),
        ...producto,
      },

      ...actuales,
    ]);
  };

  return (
    <ProductosContext.Provider
      value={{
        productos,
        agregarProducto,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
}

export function useProductos() {

  const contexto =
    useContext(ProductosContext);

  if (!contexto) {

    throw new Error(
      'useProductos debe utilizarse dentro de ProductosProvider'
    );
  }

  return contexto;
}