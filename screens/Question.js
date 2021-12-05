import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

import Header from '../components/QuestionScreen/Header';
import Footer from '../components/QuestionScreen/Footer';
import Content from '../components/QuestionScreen/Content';

const QuestionScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 24,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})



export default QuestionScreen;
