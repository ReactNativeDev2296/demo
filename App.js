/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Navigations } from './src/routes/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './src/redux/reducer/rootReducer'

const ReduxStore = createStore(rootReducer, applyMiddleware(thunk))
const App = () => {

  return (
    <>
      <Provider store={ReduxStore}>
        {/* <View style={{ flexGrow: 1, backgroundColor: 'red' }}> */}
          <Navigations />
        {/* </View> */}
      </Provider>
    </>


  );
};

export default App;
