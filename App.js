import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import ProductsScreen from './src/modules/ProductsScreen';
import RNBootSplash from 'react-native-bootsplash';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
        <ProductsScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
