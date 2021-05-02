import React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/index.js';
//import DestinationSearch from './src/screens/DestinationSearch/index';
//import SearchResults from './src/screens/SearchResults/index';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </>
  );
};

export default App;