import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
export default function Ejercicio02() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [dato, setDato] = useState(0);
    const [respuesta, SetRespuesta] = useState(0);
    const [dato2, setDato2] = useState(0);
    const [respuesta2, SetRespuesta2] = useState(0);
    const [dato3, setDato3] = useState(0);
    const [respuesta3, SetRespuesta3] = useState(0);
    const [dato4, setDato4] = useState(0);
    const [respuesta4, SetRespuesta4] = useState(0);
    const [dato5, setDato5] = useState(0);
    const [respuesta5, SetRespuesta5] = useState(0);

    const colon = () => {

        return (dato)*8.75
    }
    useEffect(() => {
        SetRespuesta(colon())
    }, [dato, respuesta]);
    const pesos = () => {

        return (dato2)*21.46
    }
    useEffect(() => {
        SetRespuesta2(pesos())
    }, [dato2, respuesta2]);
    const Euros = () => {

        return (dato3)*0.86
    }
    useEffect(() => {
        SetRespuesta3(Euros())
    }, [dato3, respuesta3]);
    const libras = () => {

        return (dato4)*0.78
    }
    useEffect(() => {
        SetRespuesta4(libras())
    }, [dato4, respuesta4]);
    const francos = () => {

        return (dato5)*0.92
    }
    useEffect(() => {
        SetRespuesta5(francos())
    }, [dato5, respuesta5]);

    return (
        <ScrollView>
        <View style={styles.contenedor1}>
            <Text style={styles.label}>conversiones</Text>
            <Text style={styles.label}>Dolares</Text>
            <TextInput
                style={styles.input}
                //value={dato}
                onChange={(e) => setDato(e.nativeEvent.text)}
            />
            <Text style={styles.label}>Colones: {respuesta}</Text>
            <Text style={styles.label}>Dolares</Text>
            <TextInput
                style={styles.input}
                //value={dato}
                onChange={(e) => setDato2(e.nativeEvent.text)}
            />
            <Text style={styles.label}>Pesos: {respuesta2}</Text>
            <Text style={styles.label}>Dolares</Text>
            <TextInput
                style={styles.input}
                //value={dato}
                onChange={(e) => setDato3(e.nativeEvent.text)}
            />
            <Text style={styles.label}>Euros: {respuesta3}</Text>
            <Text style={styles.label}>Dolares</Text>
            <TextInput
                style={styles.input}
                //value={dato}
                onChange={(e) => setDato4(e.nativeEvent.text)}
            />
            <Text style={styles.label}>libras: {respuesta4}</Text>
            <Text style={styles.label}>Dolares</Text>
            <TextInput
                style={styles.input}
                //value={dato}
                onChange={(e) => setDato5(e.nativeEvent.text)}
            />
            <Text style={styles.label}>francos: {respuesta5}</Text>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    contenedor1: {
        backgroundColor: '#F7F09B',
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
        borderColor: '#FF5200',
        borderWidth: 1,
        borderStyle: 'solid'
    },
});
