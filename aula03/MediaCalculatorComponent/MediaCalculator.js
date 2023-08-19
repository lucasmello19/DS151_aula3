import React, { useState } from 'react';
import styles from './MediaCalculatorStyles';

export const MediaCalculator = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [result, setResult] = useState('');

    function calcularMedia() {
        const nota1 = parseFloat(input1);
        const nota2 = parseFloat(input2);
        const resultado = (nota1 + nota2) / 2;
    }
}

