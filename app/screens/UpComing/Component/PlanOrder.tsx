/* eslint-disable */
import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from 'app/ultis/fonts';
import ROUTES from 'app/ultis/routes';
import { useNavigation } from '@react-navigation/native';
import InactiveRate from 'app/components/InactiveRate';

interface PropsOrderDetails {
  numberChoose?: number;
  time?: string;
  money?: string;
  svgNameLeftTop?: any;
  svgNameLeftBottom?: any;
  svgNameRightTop?: any;
  svgNameRightBottom?: any;
  fullOrder?: boolean;
  restaurant: any;
}

const itemOrderDetail = {
  boxSize: 'Classic Plan - For 2',
  deliveryDate: '8:00 AM - 7:00 PM Th',
  nameReceiver: 'Julia Andrews',
  address: '7100 Athens Place, Q',
  phoneNumber: '426-980-0043',
  instruction: 'Front Potch',
  recipesCost: 34.25,
  delivery: 'Free',
  discount: -4.25,
  walaPoint: -2.5,
  total: 27.5,
};

const PlanOrder: React.FC<PropsOrderDetails> = memo((props) => {
  // props = { ...props, fullOrder: true }
  // const navigation = useNavigation();

  const showOrderDetail = useCallback(() => {
    // navigation.navigate(ROUTES.OrderDetail, { itemOrderDetail: itemOrderDetail });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={showOrderDetail}>
      {props.fullOrder ?
        (
          <View style={styles.flexPadding}>
            <Image source={props.restaurant.img} style={styles.fullOrder} />
          </View>
        )
        : (<View style={styles.viewHeader}>
          <View style={styles.flexDirection}>
            <View style={styles.paddingRight}>
              {props.svgNameLeftTop ? (
                props.svgNameLeftTop
              ) : (
                <View style={styles.dashBorder}></View>
              )}
            </View>
            <View>
              {props.svgNameLeftBottom ? (
                props.svgNameLeftBottom
              ) : (
                <View style={styles.dashBorder}></View>
              )}
            </View>
          </View>
          <View style={styles.flexAndPadding}>
            <View style={styles.paddingRight}>
              {props.svgNameRightTop ? (
                props.svgNameRightTop
              ) : (
                <View style={styles.dashBorder}></View>
              )}
            </View>
            {props.svgNameRightBottom ? (
              props.svgNameRightBottom
            ) : (
              <View style={styles.dashBorder}></View>
            )}
          </View>
        </View>)}
      <View>
        {props.fullOrder ? (
          <View>
            <Text style={styles.textHeader_1}>{props.restaurant.name}</Text>
            <Text style={styles.textContent}>
              {props.restaurant.type}
            </Text>
            {/* <Text style={styles.textFooter}>{props.restaurant.rating}</Text>
             */}
            <View style={styles.rate}>
              <InactiveRate rate={props.restaurant.rating} />
              <Text style={styles.txtNumber}>
                {` ${props.restaurant.rating}`}
                <Text style={styles.txtUnit}>{' reviews'}</Text>
              </Text>
            </View>
          </View>
        )
          : <><Text style={styles.textHeader_0}>{props.time}</Text><Text style={styles.textContent}>
            {' '}
            {`${props.numberChoose} recipes chosen`}
          </Text><Text style={styles.textFooter}> {props.money}</Text></>
        }
      </View>
    </TouchableOpacity>
  );
});

export default PlanOrder;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 17,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.8)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  viewHeader: {
    padding: 16,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexAndPadding: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  paddingRight: {
    paddingRight: 4,
  },
  textHeader_0: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 16,
  },
  textHeader_1: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 16,
    paddingTop: 8,
  },
  textContent: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: '#7D8699',
    paddingTop: 9,
  },
  textFooter: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    fontWeight: '500',
    color: '#7D8699',
    paddingTop: 9,
  },
  dashBorder: {
    height: 32,
    width: 32,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
  fullOrder: {
    height: 90,
    width: 130,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    // borderStyle: 'dashed',
    borderRadius: 8,
  },
  flexPadding: {
    paddingTop: 8,
    marginLeft: 8,
    marginRight: 8,
    paddingBottom: 8
  },
  rate: {
    flexDirection: 'row',
    marginTop: 7,
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtNumber: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
});
