import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
export default function Ejercicio02() {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.contenedor1}>
            <Text style={styles.label}>contenedor1:</Text>
            <TextInput
                style={styles.input}
                onChangeText={texto => guardar(texto)}
            />
            <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        </View>
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
