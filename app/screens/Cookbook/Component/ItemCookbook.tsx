/* eslint-disable */
import React, { memo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import FONTS from 'app/ultis/fonts';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';


interface PropsItem {
    svgName?: any;
    name?: string;
    img?: any;
}

const ItemCookbook = memo((props: PropsItem) => {
    let svgName = props.svgName;
    let img = props.img;
    const navigation = useNavigation();

    return (
    <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate(ROUTES.Restaurants)}>
      {svgName ? (
        svgName
      ) : (
        <Image source={img} style={{ width: 90, height: 70 }} />
      )}
      <Text style={styles.textItem}>{props.name}</Text>
    </TouchableOpacity>
  );
})
export default ItemCookbook;

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: '#fff',
        marginTop: 16,
        borderRadius: 8,
        height: 98,
        width: 99,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(141, 151, 158, 0.2)',
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.6,
        shadowRadius: 16
    },
    textItem: {
        fontFamily: FONTS.Montserrat.Regular,
        fontSize: 14,
        fontWeight: '600',
        paddingTop: 3
    }
})
