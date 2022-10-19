// import React, { useState, useEffect } from 'react';
// import { Text, StyleSheet, View, FlatList, TouchableHighlight, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
// import Tienda from '../componentes/Tienda';
// import Formulario from '../componentes/Formulario';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import colors from '../src/utils/colors';
// export default function Ejercicio03() {
//     const App = () => {
//         // definir el state de citas
//         const [Tienda, setTienda] = useState([]);
//         const [mostrarform, guardarMostrarForm] = useState(false);
//         useEffect(() => {
//             const obtenerTiendaStorage = async () => {
//                 try {
//                     const TeindaStorage = await AsyncStorage.getItem('Tienda');
//                     if (TiendaStorage) {
//                         setTienda(JSON.parse(TiendaStorage))
//                     }
//                 } catch (error) {
//                     console.log(error);
//                 }
//             }
//             obtenerTiendaStorage();
//         }, []);
//         // Elimina los pacientes del state
//         const eliminarClientes = id => {
//             const TiendaFiltradas = Tienda.filter(Tienda => Tienda.id !== id);
//             setTienda(TiendaFiltradas);
//             guardarTiendaStorage(JSON.stringify(TiendaFiltradas));
//         }
//         // Muestra u oculta el Formulario
//         const mostrarFormulario = () => {
//             guardarMostrarForm(!mostrarform);
//         }
//         // Ocultar el teclado
//         const cerrarTeclado = () => {
//             Keyboard.dismiss();
//         }
//         // Almacenar las citas en storage
//         const guardarTiendaStorage = async (TiendaJSON) => {
//             try {
//                 await AsyncStorage.setItem('Tienda', TiendaJSON);
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         return (
//             <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
//                 <View style={styles.contenedor}>
//                     <Text style={styles.titulo}>Reservaciones</Text>
//                     <View>
//                         <TouchableHighlight onPress={() => mostrarFormulario()}
//                             style={styles.btnMostrarForm}>
//                             <Text style={styles.textoMostrarForm}> {mostrarform ? 'Cancelar Reservacion' : 'Crear Nueva Reservacion'} </Text>
//                         </TouchableHighlight>
//                     </View>
//                     <View style={styles.contenido}>
//                         {mostrarform ? (
//                             <>
//                                 <Text style={styles.titulo}>Reservacion</Text>
//                                 <Formulario
//                                     Tienda={Tienda}
//                                     setTienda={setTienda}
//                                     guardarMostrarForm={guardarMostrarForm}
//                                     guardarTiendaStorage={guardarTiendaStorage}
//                                 />
//                             </>
//                         ) : (
//                             <>
//                                 <Text style={styles.titulo}> {Tienda.length > 0 ? 'Administra tus Reservaciones' :
//                                     'No hay reservaciones, agrega una'} </Text>
//                                 <FlatList
//                                     style={styles.listado}
//                                     data={Tienda}
//                                     renderItem={({ item }) => <Tienda item={item}
//                                         eliminarClientes={eliminarClientes} />}
//                                     keyExtractor={Tienda => Tienda.id}
//                                 />
//                             </>
//                         )}

//                     </View>
//                 </View>
//             </TouchableWithoutFeedback>
//         );
//     };
// }
// const styles = StyleSheet.create({
//     contenedor: {
//         backgroundColor: colors.PRIMARY_COLOR,
//         flex: 1
//     },
//     titulo: {
//         color: '#FFF',
//         marginTop: Platform.OS === 'ios' ? 40 : 20,
//         marginBottom: 20,
//         fontSize: 24,
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     contenido: {
//         flex: 1,
//         marginHorizontal: '2.5%',
//     },
//     listado: {
//         flex: 1,
//     },
//     btnMostrarForm: {
//         padding: 10,
//         backgroundColor: colors.BUTTON_COLOR,
//         marginVertical: 10
//     },
//     textoMostrarForm: {
//         color: '#FFF',
//         fontWeight: 'bold',
//         textAlign: 'center'
//     }
// });

import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
//import Cita from './componentes/Cita';
//import Formulario from './componentes/Formulario';
//import Cita from "./src/utils/components/Cita";
//import Formulario from "./src/utils/components/Formulario";
import Formulario from "../componentes/Formulario";
import Cita from "../componentes/Cita";
//import colors from "./src/utils/colors";
import colors from "../src/utils/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Ejercicio03 = () => {
  // definir el state de citas
  const [citas, setCitas] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);
  useEffect(() => {
    const obtenerCitasStorage = async () => {
      try {
        const citasStorage = await AsyncStorage.getItem("citas");
        if (citasStorage) {
          setCitas(JSON.parse(citasStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCitasStorage();
  }, []);
  // Elimina los pacientes del state
  const eliminarPaciente = (id) => {
    const citasFiltradas = citas.filter((cita) => cita.id !== id);
    setCitas(citasFiltradas);
    guardarCitasStorage(JSON.stringify(citasFiltradas));
  };
  // Muestra u oculta el Formulario
  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  };
  // Ocultar el teclado
  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };
  // Almacenar las citas en storage
  const guardarCitasStorage = async (citasJSON) => {
    try {
      await AsyncStorage.setItem("citas", citasJSON);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado()}>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Administrador de Citas</Text>
        <View>
          <TouchableHighlight
            onPress={() => mostrarFormulario()}
            style={styles.btnMostrarForm}
          >
            <Text style={styles.textoMostrarForm}>
              {" "}
              {mostrarform ? "Cancelar CrearCita" : "Crear Nueva Cita"}{" "}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.contenido}>
          {mostrarform ? (
            <>
              <Text style={styles.titulo}>Crear Nueva Cita</Text>
              <Formulario
                citas={citas}
                setCitas={setCitas}
                guardarMostrarForm={guardarMostrarForm}
                guardarCitasStorage={guardarCitasStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.titulo}>
                {" "}
                {citas.length > 0
                  ? "Administra tus citas"
                  : "No hay citas, agrega una"}{" "}
              </Text>
              <FlatList
                style={styles.listado}
                data={citas}
                renderItem={({ item }) => (
                  <Cita item={item} eliminarPaciente={eliminarPaciente} />
                )}
                keyExtractor={(cita) => cita.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1,
  },
  titulo: {
    color: "#FFF",
    marginTop: Platform.OS === "ios" ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  contenido: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  listado: {
    flex: 1,
  },
  btnMostrarForm: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  textoMostrarForm: {
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Ejercicio03;
