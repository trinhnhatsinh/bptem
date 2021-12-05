import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const Question = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sắp xếp các từ sau</Text>
      <Text style={styles.question}>L/C/D/G/S/D</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    fontSize: 18,
    marginBottom: 12
  },
  question: {
    width: Dimensions.get('window').width - 36,
    fontSize: 18,
    padding: 12,
    borderRadius: 12,
    backgroundColor: '#00DDEB',
    color: '#000000',
    textAlign: 'center'
  }
})



export default Question;
