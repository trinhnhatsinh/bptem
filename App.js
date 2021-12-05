import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuestionScreen from './screens/Question';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Question"
          component={QuestionScreen}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const customHeader = {
  headerStyle: {},
  // headerBackImage: require('./assets/icons_profile/back.png'),
  headerTitleAlign: 'center',
  headerTintColor: '#595959',
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: 'Quicksand-Bold',
  },
};

export default App;
