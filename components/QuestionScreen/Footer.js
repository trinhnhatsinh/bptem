import React from 'react';
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.back} source={require('../../assets/back.png')} />
      <View style={styles.wrapSuggest}>
        <Image style={styles.suggest} source={require('../../assets/suggest.png')} />
        <Text style={styles.text}>x8</Text>
      </View>
      <View style={styles.wrapNext}>
        <Image style={styles.next} source={require('../../assets/back.png')} />
        <Image style={styles.ads} source={require('../../assets/ads.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12
  },
  back: {
    width: 42,
    height: 42
  },
  wrapNext: {
    position: 'relative',
  },
  next: {
    width: 42,
    height: 42
  },
  ads: {
    width: 18,
    height: 16,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  wrapSuggest: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 36
  },
  suggest: {
    width: 42,
    height: 48,
  },
  text: {
    fontSize: 18
  }
})



export default Footer;
