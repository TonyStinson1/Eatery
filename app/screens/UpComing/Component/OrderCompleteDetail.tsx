import React, { memo, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SvgIconArrowRight from 'app/svgs/Login/SvgIconArrowRight';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FONTS from 'app/ultis/fonts';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

interface PropsOrderDetails {
  numberChoose?: string;
  time?: string;
  svgNameLeftTop: any;
  svgNameLeftBottom: any;
  svgNameRightTop: any;
  svgNameRightBottom: any;
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

const OrderCompleteDetail = memo((props: PropsOrderDetails) => {

  const navigation = useNavigation();

  const showOrderDetail = useCallback(() => {
    navigation.navigate(ROUTES.OrderDetail, {
      itemOrderDetail: itemOrderDetail,
    });
  }, []);
  return (
    <TouchableOpacity style={styles.container} onPress={showOrderDetail}>
      <View style={styles.viewHeader}>
        <View style={styles.flexDirection}>
          <View style={styles.paddingRight}>
            {props.svgNameLeftTop ? (
              props.svgNameLeftTop
            ) : (
              <View style={styles.dashBorder} />
            )}
          </View>
          {props.svgNameLeftBottom ? (
            props.svgNameLeftBottom
          ) : (
            <View style={styles.dashBorder} />
          )}
        </View>
        <View style={styles.flexDirection}>
          <View style={styles.paddingRight}>
            {props.svgNameRightTop ? (
              props.svgNameRightTop
            ) : (
              <View style={styles.dashBorder} />
            )}
          </View>
          {props.svgNameRightBottom ? (
            props.svgNameRightBottom
          ) : (
            <View style={styles.dashBorder} />
          )}
        </View>
      </View>
      <View>
        <Text style={styles.textHeader}>{props.time}</Text>
        <Text style={styles.textContent}> {props.numberChoose}</Text>
        <View style={[styles.flexDirection, { paddingTop: 9 }]}>
          <Text style={styles.textFooter}>Order Again</Text>
          <SvgIconArrowRight />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default OrderCompleteDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 17,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 12,
    height: 100,
    shadowColor: 'rgba(141, 151, 158, 0.8)',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  viewHeader: {
    width: '30%',
    padding: 16,
  },
  flexDirection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
  },
  flexAndPadding: {
    flexDirection: 'row',
    paddingTop: 4,
  },
  paddingRight: {
    paddingRight: 4,
  },
  textHeader: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 14,
    paddingTop: 16,
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
    color: '#FE9870',
  },
  dashBorder: {
    height: 32,
    width: 32,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderStyle: 'dashed',
    borderRadius: 8,
  },
});
