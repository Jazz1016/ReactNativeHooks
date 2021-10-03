import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import FirstComponent from './src/FirstComponent'
import SecondComponent from './src/SecondComponent'
import ThirdComponent from './src/ThirdComponent'

const AppStack = createStackNavigator({
  FirstComponent: {
    navigationOptions: () => ({
      title: 'First Component'
    })
  },
  SecondComponent: {
    navigationOptions: () => ({
      title: 'Second Component'
    })
  },
  ThirdComponent : {
    navigationOptions: () => ({
      title: 'Third Component'
    })
  }



})

const AppContainer = createAppContainer(AppStack)

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;
