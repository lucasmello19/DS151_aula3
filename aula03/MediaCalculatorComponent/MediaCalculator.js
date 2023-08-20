import React, { useState } from 'react';
import styles from './MediaCalculatorStyles';
import { StyleSheet, View, TextInput } from 'react-native';


const MediaCalculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    function calcularMedia() {
        const nota1 = parseFloat(input1);
        const nota2 = parseFloat(input2);
        const resultado = (nota1 + nota2) / 2;
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite o primeiro número"
                keyboardType="numeric"
                value={input1}
                onChangeText={text => setInput1(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite o segundo número"
                keyboardType="numeric"
                value={input2}
                onChangeText={text => setInput1(text)}
            />
        </View>
    )
}

export default MediaCalculator
