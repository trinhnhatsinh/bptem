import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const Time = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.icon} source={require('../../assets/time.png')} />
      <Text style={styles.time}>:</Text>
      <Text style={styles.time}>12</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    width: 24,
    fontSize: 20,
    color: '#FF4004',
    textAlign: 'center'
  },
  icon: {
    width: 36,
    height: 36
  },
})



export default Time;
