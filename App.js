import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home'


export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
