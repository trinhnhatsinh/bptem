import React from 'react';
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';
import AnswerButton from './AnswerButton';

import CharButton from './CharButton';
import CharInput from './CharInput';

import Question from './Question';

const Content = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Question />
      <View style={styles.wrapInput}>
        <CharInput char='' selected={true} />
        <CharInput char='' selected={false} />
        <CharInput char='' selected={false} />
        <CharInput char='' selected={false} />
        <CharInput char='' selected={false} />
        <CharInput char='' selected={false} />
        <CharInput char='' selected={false} />
      </View>
      <View style={styles.wrapChar}>
        <CharButton char='L' selected={true} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
        <CharButton char='L' selected={false} />
      </View>

      <View style={styles.wrapChar}>
        <AnswerButton title='Ablac ksjs' />
        <AnswerButton title='Ablac ksjs' />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 18,
  },
  wrapChar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    flexWrap: 'wrap'
  },
  wrapInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 48,
    flexWrap: 'wrap'
  }
})



export default Content;
