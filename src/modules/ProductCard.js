import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {mobioLogo, placeholder} from '../utils/Icons';
import {Colors} from '../utils/Colors';

const ProductCard = ({data}) => {
  const [imageError, setImageError] = useState(false);
  // {
  // 	"_id": "60c30c3d54a6468980addbff",
  // 	"price": "$1,233.81",
  // 	"picture": "http://placehold.it/256x256",
  // 	"colors": [
  // 		"Red",
  // 		"Blue"
  // 	],
  // 	"productName": "COMTEST",
  // 	"brands": [
  // 		{
  // 			"id": 0,
  // 			"name": "Schroeder Valenzuela"
  // 		},
  // 		{
  // 			"id": 1,
  // 			"name": "Gamble Hendrix"
  // 		},
  // 		{
  // 			"id": 2,
  // 			"name": "Pat Gray"
  // 		}
  // 	]
  // }
  return (
    <View
      style={{
        padding: 10,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1,
        backgroundColor: '#fff',
      }}>
      <View style={{flexDirection: 'row', paddingBottom: 10}}>
        <View style={{flex: 1}}>
          <Image
            onError={() => {
              setImageError(true);
            }}
            source={imageError ? placeholder : {uri: data.picture}}
            defaultSource={placeholder}
            style={{
              width: 100,
              height: 100,
              aspectRatio: 1,
              marginHorizontal: 10,
              borderRadius: 999,
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.normalFont}>{data.productName}</Text>
          <Text style={styles.boldFont}>
            Price: <Text style={styles.normalFont}>{data.price}</Text>
          </Text>
          <Text style={styles.boldFont}>
            Brands:{' '}
            <Text style={styles.normalFont}>
              {data.brands?.map(item => item.name)?.join(', ') || ''}
            </Text>
          </Text>
        </View>
      </View>
      <Text style={{...styles.boldFont, marginLeft: 8}}>Colors</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            theme={{colors: {disabled: Colors.black}}}
            disabled
            value="red"
            status={data?.colors?.includes('Red') ? 'checked' : 'unchecked'}
          />
          <Text style={styles.boldFontBlack}>Red</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            theme={{colors: {disabled: Colors.black}}}
            disabled
            status={data?.colors?.includes('Blue') ? 'checked' : 'unchecked'}
            value="blue"
          />
          <Text style={styles.boldFontBlack}>Blue</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            theme={{colors: {disabled: Colors.black}}}
            disabled
            status={data?.colors?.includes('Green') ? 'checked' : 'unchecked'}
            value="green"
          />
          <Text style={styles.boldFontBlack}>Green</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  normalFont: {fontWeight: '500', color: Colors.blueGrey900},
  boldFont: {fontWeight: '900', color: Colors.blueGrey900},
  boldFontBlack: {fontWeight: 'bold', color: Colors.black},
});
