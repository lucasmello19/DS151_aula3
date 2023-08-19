import React from 'react';
import { StyleSheet, View } from 'react-native';
import MediaCalculator from './MediaCalculatorComponent/MediaCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <MediaCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
