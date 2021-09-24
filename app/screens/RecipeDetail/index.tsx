/* eslint-disable */
import React, { memo, useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import RecipeHeaderInfo from 'app/screens/RecipeDetail/components/RecipeHeaderInfo';
import InactiveRate from 'app/components/InactiveRate';
import ButtonColor from 'app/components/ButtonColor';
import Step from './components/Step';
import BottomBtnView from 'app/components/BottomBtnView';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import FONTS from 'app/ultis/fonts';
import { data } from 'app/screens/OnTheMenu/OnTheMenu';
import Material from './components/Material';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import RecipeProps from './components/RecipeProps';
import ButtonLinear from 'app/components/ButtonLinear';
import { widthScreen } from 'app/ultis/layout';
import SvgSub from 'app/svgs/SignUp/SvgSub';
import SvgAdd from 'app/svgs/SvgAdd';

interface Props {
  data: any;
  navigation: any;
  route: any;
}

const RecipeDetail: React.FC<Props> = memo((props) => {
  const { dataOD } = props.route.params;
  const item = data[0];
  const navigation = useNavigation();
  const onSeeAllTips = useCallback(() => {
    navigation.navigate(ROUTES.SeeAllTips);
  }, [navigation]);

  const [numAdded, setNum] = useState(0);


  const onAdd = useCallback(() => {
    setNum(numAdded + 1);
    // props.onAdd(props.item);
  }, [numAdded, /*props.onAdd*/]);
  const onSub = useCallback(() => {
    if (numAdded > 0) {
      setNum(numAdded - 1);
      // props.onSub(props.item);
    } else {
      return;
    }
  }, [numAdded, /*props.onSub*/]);

  const onAddToBox = useCallback(() => {
    setNum(numAdded + 1);
    // props.onAdd(props.item);
  }, [numAdded, /*props.onAdd*/]);

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}>
        <RecipeHeaderInfo foodData={dataOD} />
        {/* <View style={styles.introduction}>
          <Text style={styles.txtTitle}>Instant Food</Text>
          <Text style={styles.txtContent}>
            {dataOD.foodDetail}{' '}
            <Text style={styles.txtMore} onPress={() => { }}>
              {' More...'}
            </Text>
          </Text>
          <View style={styles.line} />
        </View> */}
        <View style={styles.ingredients}>
          {/* <Text style={styles.txtTitle}>Ingredients</Text>
          <Text style={styles.txtProps}>In the box</Text>
          <Text style={[styles.txtContent, { marginTop: 7 }]}>
            Ingredients for 2 people (double for 4)
          </Text>
          <View style={styles.list}>{material.map(_renderItem)}</View>
          <Text style={styles.txtProps}>From your pantry</Text>
          <View style={styles.list}>{materialPantry.map(_renderItem)}</View> */}
          {/* <View style={[styles.line, { marginTop: 12 }]} /> */}
          {/* <Text style={styles.txtTitle}>Allergens</Text>
          <Text style={styles.txtProps}>Gluten, Sesame, Soya, Sulphites</Text>
          <Text style={[styles.txtContent, { color: '#7D8699' }]}>
            Produced in a facility that processes milk, eggs, fish, shellfish,
            tree nuts, peanuts, wheat, and soybean.
          </Text> */}
          {/* <View style={[styles.line, { marginTop: 12 }]} /> */}
          <Text style={styles.txtTitle}>Ratings from Users</Text>
          <View style={styles.rate}>
            <InactiveRate rate={4.5} />
            <Text style={styles.txtNumber}>
              {` ${item.numOfReviews}`}
              <Text style={styles.txtUnit}>{' reviews'}</Text>
            </Text>
          </View>
          <Text style={styles.txtContent}>
            Read helpful reviews from other customers .
          </Text>

          <ButtonColor title={'see all reviews'} onPress={onSeeAllTips} />
          <View style={styles.line} />
        </View>
      </ScrollView>
      <BottomBtnView IsExplorer={false} />
    </View>
  );
});

export default RecipeDetail;

const styles = StyleSheet.create({
  container: {
    paddingBottom: getBottomSpace() + 120,
    backgroundColor: '#fff',
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  txtContent: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtMore: {
    marginTop: 16,
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#FE9870',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F7F7FB',
    marginTop: 24,
    marginBottom: 40,
  },
  txtProps: {
    color: '#1D1E2C',
    fontSize: 16,
    lineHeight: 20,
    fontFamily: FONTS.Montserrat.Medium,
    marginTop: 16,
  },
  txtUnit: {
    fontSize: 14,
    lineHeight: 28,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  txtName: {
    fontSize: 28,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
    lineHeight: 36,
  },
  txtNumber: {
    marginLeft: 8,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: FONTS.Montserrat.Medium,
    color: '#1D1E2C',
  },
  introduction: {
    paddingTop: 40,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  ingredients: {
    paddingHorizontal: 24,
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rate: {
    flexDirection: 'row',
    marginTop: 12,
  },
  addedView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  btnAdd: {
    width: widthScreen / 4.5,
  },
  txtAddedUnit: {
    fontSize: 12,
    marginTop: -6,
    fontFamily: FONTS.Montserrat.Regular,
    color: '#1D1E2C',
  },
  addedInfo: {
    flex: 1,
    alignItems: 'center',
  },
  addedNumber: {
    fontSize: 32,
    fontFamily: FONTS.Montserrat.Bold,
    color: '#1D1E2C',
  },
  btnAddToBox: {
    marginTop: 5,
  },
});
