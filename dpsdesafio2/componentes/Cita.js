import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
const Cita = ({ item, eliminarPaciente }) => {
    const dialogoEliminar = id => {
        console.log('eliminando....', id);
        eliminarPaciente(id);
    }
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.label}>Nombre producto: </Text>
                <Text style={styles.texto}>{item.paciente}</Text>
            </View>
            <View>
                <Text style={styles.label}> Cantidad de Producto: </Text>
                <Text style={styles.texto}>{item.propietario}</Text>
            </View>
           <View>
                <Text style={styles.label}>Precio Unitario: </Text>
                <Text style={styles.texto}>{item.sintomas}</Text>
            </View>
            <View>
                <TouchableHighlight onPress={() => dialogoEliminar(item.id)}
                    style={styles.btnEliminar}>
                    <Text style={styles.textoEliminar}> Eliminar &times; </Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    cita: {
        backgroundColor: '#FFF5A5',
        borderBottomColor: '#222831',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        paddingVertical: 20,
        paddingHorizontal: 10
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    texto: {
        fontSize: 18,
    },
    btnEliminar: {
        padding: 10,
        backgroundColor: 'red',
        marginVertical: 10
    },
    textoEliminar: {
        color: '#222831',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
export default Cita;
