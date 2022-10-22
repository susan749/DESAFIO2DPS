import React,{useState, useEffect} from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';
const Cita = ({ item, eliminarPaciente }) => {
    const total = item.propietario*item.sintomas
    const [porcentaje, setPorcentaje] = useState(0)
    const dialogoEliminar = id => {
        console.log('eliminando....', id);
        eliminarPaciente(id);
    }

    useEffect(() => {
        if(item.propietario>=15 && item.propietario<=49){
            setPorcentaje(0.05)
        }
        else if(item.propietario>=50 && item.propietario<=79){
            setPorcentaje(0.13)
        }
        else if(item.propietario>=80){
            setPorcentaje(0.25)
        }
    },[item.propietario])
    const totald = porcentaje*total
    const rtotal = total - totald

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
                <Text style={styles.label}>Total: </Text>
                <Text style={styles.texto}>{total}</Text>
            </View>
            <View>
                <Text style={styles.label}>Descuento aplicado: </Text>
                <Text style={styles.texto}>{porcentaje}</Text>
            </View>
            <View>
                <Text style={styles.label}>Total de Descuento: </Text>
                <Text style={styles.texto}>{totald}</Text>
            </View>
            <View>
                <Text style={styles.label}>Total Final: </Text>
                <Text style={styles.texto}>{rtotal}</Text>
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
