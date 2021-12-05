import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

const CharButton = (props) => {
  return (
    <View style={{ ...styles.container, backgroundColor: !props.selected ? '#BCF0F3' : '#F1F1F1' }}>
      <Text style={styles.char}>{props.char}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    margin: 4
  },
  char: {
    fontSize: 18,
  }
})



export default CharButton;
