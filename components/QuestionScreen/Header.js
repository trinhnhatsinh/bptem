import React from 'react';
import { Image, Text, StyleSheet, View, Dimensions } from 'react-native';
import Time from './Time';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Câu đố 3</Text>
      <Time />
      <Image style={styles.actionButton} source={require('../../assets/pause.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 12,
    position: 'relative'
  },
  title: {
    fontSize: 24,
    color: '#FF7F09',
    marginBottom: 12,
    marginTop: 12
  },
  actionButton: {
    width: 42,
    height: 42,
    position: 'absolute',
    top: 12,
    left: 12
  }
})



export default Header;
