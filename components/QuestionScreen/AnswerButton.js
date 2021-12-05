import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const AnswerButton = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 4,
    backgroundColor: '#BCF0F3'
  },
  title: {
    fontSize: 18,
  }
})



export default AnswerButton;
