import React, { useState } from 'react';
import {
    Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
//import colors from '../colors';
import colors from '../src/utils/colors';
const Formulario = ({ citas, setCitas, guardarMostrarForm, guardarCitasStorage }) => {
    //variables para el formulario
    const [paciente, guardarPaciente] = useState('');
    const [propietario, guardarPropietario] = useState('');
    const [telefono, guardarTelefono] = useState('');
    //const [fecha, guardarFecha] = useState('');
   // const [hora, guardarHora] = useState('');
    const [sintomas, guardarSintomas] = useState('');

   // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   // const [isTimePickerVisible, setTimePickerVisibility] = useState(false);


    // Crear nueva cita
    const crearNuevaCita = () => {
        // Validar
        if (paciente.trim() === '' ||
            propietario.trim() === '' ||
            //telefono.trim() === '' ||
           // fecha.trim() === '' ||
          //  hora.trim() === '' ||
            sintomas.trim() === '') {
            // Falla la validación
            mostrarAlerta();
            return;
        }
        // Crear una nueva cita
        const cita = { paciente, propietario,sintomas };
        cita.id = shortid.generate();
        // console.log(cita);
        // Agregar al state
        const citasNuevo = [...citas, cita];
        setCitas(citasNuevo);
        // Pasar las nuevas citas a storage
        guardarCitasStorage(JSON.stringify(citasNuevo));
        // Ocultar el formulario
        guardarMostrarForm(false);
        // Resetear el formulario
        guardarSintomas('');
        guardarPropietario('');
        guardarPaciente('');
       // guardarHora('');
       // guardarFecha('');
       // guardarTelefono('');
    }
    // Muestra la alerta si falla la validación
    const mostrarAlerta = () => {
        Alert.alert(
            'Error', // Titulo
            'Todos los campos son obligatorios', // mensaje
            [{
                text: 'OK' // Arreglo de botones
            }]
        )
    }

    return (
        <>
            <ScrollView style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Nombre producto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Cantidad Producto:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarPropietario(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Precio Unitario:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto => guardarSintomas(texto)}
                        keyboardType='numeric'
                    />
                </View>

                <View>
                    <TouchableHighlight onPress={() => crearNuevaCita()}
                        style={styles.btnSubmit}>
                        <Text style={styles.textoSubmit}>Crear Nueva Factura</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </>
    );
}
const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#FFF5A5',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#222831',
        borderWidth: 1,
        borderStyle: 'solid'
    },
    btnSubmit: {
        padding: 10,
        backgroundColor: "#0DCEDA",
        marginVertical: 10
    },
    textoSubmit: {
        color: '#222831',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Formulario;
