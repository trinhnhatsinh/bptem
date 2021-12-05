import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const CharInput = (props) => {
  return (
    <View style={{ ...styles.container, borderColor: props.selected ? '#00DDEB' : '#8c8c8c' }}>
      <Text style={styles.char}>{props.char}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 42,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderWidth: 1,
    margin: 3,
    position: 'relative'
  },
  char: {
    fontSize: 18,
  },
  line: {
    width: 16,
    height: 2,
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 6,
    zIndex: 10
  }
})



export default CharInput;
