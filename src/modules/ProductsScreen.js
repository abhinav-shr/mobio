import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Products from '../data/Products.json';
import ProductCard from './ProductCard';
import {Colors} from '../utils/Colors';
import RNBootSplash from 'react-native-bootsplash';

const ProductsScreen = () => {
  const renderItem = useCallback(
    ({item, index}) => <ProductCard data={item} />,
    [],
  );

  return (
    <View style={{flex: 1}}>
      <View style={{borderColor: Colors.border, borderWidth: 2}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '900',
            padding: 10,
            backgroundColor: '#fff',
            color: Colors.black,
          }}>
          Products
        </Text>
      </View>
      <FlatList
        onLayout={() => {
        //   RNBootSplash.hide();
        }}
        data={Products}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
