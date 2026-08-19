import React, {
  useRef,
  useState,
} from 'react';

import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import {
  Appbar,
  Avatar,
  Button,
  Card,
  Text,
  TextInput,
} from 'react-native-paper';

import {
  SafeAreaView,
} from 'react-native-safe-area-context';

import {
  CameraView,
  useCameraPermissions,
} from 'expo-camera';

import {
  useProductos,
} from '../contextos/ProductosContext';

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

export default function CrearProductoScreen({
  navigation,
}) {

  const { agregarProducto } =
    useProductos();

  const [nombre, setNombre] =
    useState('');

  const [precio, setPrecio] =
    useState('');

  const [stock, setStock] =
    useState('');

  const [
    categoria,
    setCategoria,
  ] = useState('');

  // FOTOGRAFÍA
  const [fotoUri, setFotoUri] =
    useState(null);

  const [
    mostrarCamara,
    setMostrarCamara,
  ] = useState(false);

  const [
    camaraLista,
    setCamaraLista,
  ] = useState(false);

  const [
    guardandoFoto,
    setGuardandoFoto,
  ] = useState(false);

  const [
    permission,
    requestPermission,
  ] = useCameraPermissions();

  const cameraRef =
    useRef(null);

  const abrirCamara = async () => {

    if (!permission) {

      Alert.alert(
        'Cámara',
        'Los permisos todavía se están cargando.'
      );

      return;
    }

    if (!permission.granted) {

      const respuesta =
        await requestPermission();

      if (!respuesta.granted) {

        Alert.alert(
          'Permiso requerido',
          'Bizly necesita acceso a la cámara para registrar la fotografía del producto.'
        );

        return;
      }
    }

    setCamaraLista(false);
    setMostrarCamara(true);
  };

  const tomarFoto = async () => {

    if (
      !cameraRef.current ||
      !camaraLista ||
      guardandoFoto
    ) {
      return;
    }

    try {

      setGuardandoFoto(true);

      const foto =
        await cameraRef.current
          .takePictureAsync({
            quality: 0.7,
          });

      // GUARDAMOS LA FOTO EN useState
      setFotoUri(foto.uri);

      setMostrarCamara(false);

    } catch (error) {

      Alert.alert(
        'Error',
        'No fue posible tomar la fotografía.'
      );

    } finally {

      setGuardandoFoto(false);

    }
  };

  const guardarProducto = () => {

    if (
      !nombre.trim() ||
      !precio.trim() ||
      !stock.trim() ||
      !categoria.trim()
    ) {

      Alert.alert(
        'Datos incompletos',
        'Completa nombre, precio, stock y categoría.'
      );

      return;
    }

    agregarProducto({
      nombre: nombre.trim(),
      precio: precio.trim(),
      stock: stock.trim(),
      categoria:
        categoria.trim(),
      fotoUri,
    });

    Alert.alert(
      'Producto registrado',
      'El producto fue agregado correctamente.',
      [
        {
          text: 'Aceptar',

          onPress: () =>
            navigation.goBack(),
        },
      ]
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

        <Appbar.BackAction
          color={COLORS.white}
          onPress={() =>
            navigation.goBack()
          }
        />

        <Appbar.Content
          title="Nuevo producto"
          subtitle="Registro con evidencia fotográfica"
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
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={
          false
        }
      >

        <Card style={styles.card}>

          <Card.Title
            title="Datos del producto"
            subtitle="Información básica del artículo"
            titleStyle={
              styles.cardTitle
            }
            left={(props) => (

              <Avatar.Icon
                {...props}
                icon="package-variant"
                color={COLORS.primary}
                style={styles.avatar}
              />

            )}
          />

          <Card.Content>

            <TextInput
              mode="outlined"
              label="Nombre"
              value={nombre}
              onChangeText={
                setNombre
              }
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <TextInput
              mode="outlined"
              label="Precio"
              value={precio}
              onChangeText={
                setPrecio
              }
              keyboardType="numeric"
              left={
                <TextInput.Affix
                  text="$"
                />
              }
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <TextInput
              mode="outlined"
              label="Stock inicial"
              value={stock}
              onChangeText={
                setStock
              }
              keyboardType="numeric"
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

            <TextInput
              mode="outlined"
              label="Categoría"
              value={categoria}
              onChangeText={
                setCategoria
              }
              outlineColor={
                COLORS.border
              }
              activeOutlineColor={
                COLORS.primary
              }
              style={styles.input}
            />

          </Card.Content>

        </Card>

        <Card style={styles.card}>

          <Card.Title
            title="Fotografía del producto"
            subtitle="Toma una foto como evidencia visual"
            titleStyle={
              styles.cardTitle
            }
            left={(props) => (

              <Avatar.Icon
                {...props}
                icon="camera"
                color={COLORS.primary}
                style={styles.avatar}
              />

            )}
          />

          <Card.Content>

            {mostrarCamara ? (

              <View>

                <View
                  style={
                    styles.cameraFrame
                  }
                >

                  <CameraView
                    ref={cameraRef}
                    style={
                      styles.camera
                    }
                    facing="back"
                    onCameraReady={() =>
                      setCamaraLista(
                        true
                      )
                    }
                  />

                </View>

                <View
                  style={
                    styles.cameraActions
                  }
                >

                  <Button
                    mode="contained"
                    icon="camera"
                    buttonColor={
                      COLORS.primary
                    }
                    textColor={
                      COLORS.white
                    }
                    loading={
                      guardandoFoto
                    }
                    disabled={
                      !camaraLista ||
                      guardandoFoto
                    }
                    onPress={
                      tomarFoto
                    }
                  >
                    Tomar fotografía
                  </Button>

                  <Button
                    mode="outlined"
                    textColor={
                      COLORS.primaryDark
                    }
                    onPress={() =>
                      setMostrarCamara(
                        false
                      )
                    }
                  >
                    Cancelar cámara
                  </Button>

                </View>

              </View>

            ) : fotoUri ? (

              <View>

                <Card.Cover
                  source={{
                    uri: fotoUri,
                  }}
                  style={
                    styles.preview
                  }
                />

                <Text
                  style={
                    styles.previewText
                  }
                >
                  Vista previa de la
                  fotografía registrada.
                </Text>

                <Button
                  mode="outlined"
                  icon="camera-retake"
                  textColor={
                    COLORS.primary
                  }
                  onPress={
                    abrirCamara
                  }
                >
                  Tomar otra foto
                </Button>

              </View>

            ) : (

              <View
                style={
                  styles.emptyPhoto
                }
              >

                <Avatar.Icon
                  size={74}
                  icon="camera-outline"
                  color={
                    COLORS.primary
                  }
                  style={
                    styles.emptyAvatar
                  }
                />

                <Text
                  variant="titleMedium"
                  style={
                    styles.emptyTitle
                  }
                >
                  Sin fotografía
                </Text>

                <Text
                  style={
                    styles.emptyText
                  }
                >
                  Usa la cámara del
                  dispositivo para registrar
                  una imagen del producto.
                </Text>

                <Button
                  mode="contained"
                  icon="camera"
                  buttonColor={
                    COLORS.primary
                  }
                  textColor={
                    COLORS.white
                  }
                  onPress={
                    abrirCamara
                  }
                  style={
                    styles.openCameraButton
                  }
                >
                  Abrir cámara
                </Button>

              </View>

            )}

          </Card.Content>

        </Card>

        <Button
          mode="contained"
          icon="content-save"
          buttonColor={
            COLORS.secondary
          }
          textColor={
            COLORS.textPrimary
          }
          contentStyle={
            styles.saveContent
          }
          labelStyle={
            styles.saveLabel
          }
          onPress={
            guardarProducto
          }
        >
          Guardar producto
        </Button>

      </ScrollView>

    </SafeAreaView>
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
      paddingBottom: 35,
      backgroundColor:
        COLORS.background,
    },

    card: {
      marginBottom: 18,
      backgroundColor:
        COLORS.card,
      borderWidth: 1,
      borderColor:
        COLORS.border,
    },

    cardTitle: {
      color:
        COLORS.primaryDark,
      fontWeight: 'bold',
    },

    avatar: {
      backgroundColor: '#E5F3FB',
    },

    input: {
      marginBottom: 12,
      backgroundColor:
        COLORS.white,
    },

    cameraFrame: {
      height: 390,
      overflow: 'hidden',
      borderRadius: 16,
      backgroundColor: '#000',
    },

    camera: {
      flex: 1,
    },

    cameraActions: {
      marginTop: 14,
      gap: 10,
    },

    preview: {
      height: 280,
      borderRadius: 14,
    },

    previewText: {
      marginVertical: 12,
      color:
        COLORS.textSecondary,
      textAlign: 'center',
    },

    emptyPhoto: {
      alignItems: 'center',
      paddingVertical: 24,
      paddingHorizontal: 14,
      borderRadius: 16,
      backgroundColor:
        COLORS.secondaryLight,
    },

    emptyAvatar: {
      backgroundColor:
        COLORS.white,
    },

    emptyTitle: {
      marginTop: 12,
      color:
        COLORS.textPrimary,
      fontWeight: 'bold',
    },

    emptyText: {
      marginTop: 6,
      color:
        COLORS.textSecondary,
      textAlign: 'center',
      lineHeight: 20,
    },

    openCameraButton: {
      marginTop: 18,
    },

    saveContent: {
      height: 52,
    },

    saveLabel: {
      fontSize: 16,
      fontWeight: 'bold',
    },

  });