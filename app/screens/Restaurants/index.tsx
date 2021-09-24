/* eslint-disable */
import React, {memo, useCallback, useState} from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import colors from 'app/ultis/colors';
import PlanOrder from '../UpComing/Component/PlanOrder';
import keyExtractor from 'app/ultis/KeyExtractor';

const RestaurantDetails = [
  {
    name: 'Geeta Refreshment',
    type: 'Punjabi',
    rating: 5.0,
    img: require('../../assets/Restaurants/Geetha.jpeg')
  },
  {
    name: 'Amritsar Haveli',
    type: 'Punjabi',
    rating: 3.5,
    img: require('../../assets/Restaurants/amritsar-haveli.jpeg')
  },
  {
    name: 'Melano Italiano',
    type: 'Italian & Continental',
    rating: 4.5,
    img: require('../../../images/scrutllino.jpeg')
  },
  {
    name: 'La Tango Mierre',
    type: 'Spanish',
    rating: 4.3,
    img: require('../../../images/la-tango.png')
  },
  {
    name: 'Outsiders',
    type: 'Continental & Punjabi',
    rating: 4.5,
    img: require('../../assets/Restaurants/Outsiders.jpeg')
  },
  {
    name: 'Punjabi Grill',
    type: 'Punjabi',
    rating: 4.0,
    img: require('../../assets/Restaurants/Punjabi-Grill.jpeg')
  },
  {
    name: 'Rasoi Ghar',
    type: 'Italian & Continental',
    rating: 4.0,
    img: require('../../assets/Restaurants/Rasoi-Ghar.jpeg')
  },
]

const Restaurants = memo(() => {

  const _renderItemPlanOrder = useCallback(({ index }) => {
    return (
      <PlanOrder
        fullOrder={true}
        restaurant={RestaurantDetails[index]}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
      <FlatList
        data={RestaurantDetails}
        renderItem={_renderItemPlanOrder}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        contentContainerStyle={{
          paddingTop: 10,
          backgroundColor: '#F7F7FB',
        }}
        bounces={false}
      />
    </View>
    </View>
  );
});
export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.while,
  },
  flex: {
    flex: 1,
  },
});
