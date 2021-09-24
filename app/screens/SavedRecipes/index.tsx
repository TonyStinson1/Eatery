/* eslint-disable */
import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, LayoutAnimation, View} from 'react-native';
import FONTS from'app/ultis/fonts';
import {getBottomSpace} from 'react-native-iphone-x-helper';
import Nodata from'app/components/NoData';
import SvgNodata from 'app/svgs/SvgNodata';
import ItemSaved from'app/screens/SavedRecipes/Component/ItemSaved';
import OrderList from'app/screens/SavedRecipes/Component/OrderList';
import ModalChoose from'app/components/ModalChoose';
import SvgFilterSmall from 'app/svgs/Explorer/SvgFilterSmall';
import SvgList from 'app/svgs/Explorer/SvgList';
import {useNavigation} from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';

export const data = [
  {
    id: 1,
    img: require('app/assets/UpComing/img_recipe.png'),
    nameOrder: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
    foodDetail: `Strips of chicken breast fillet are marinated in soy sauce, fresh
    chilli and classic Chinese hoisin sauce and then quickly stir fried.`,
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
  {
    id: 2,
    img: require('../../../images/kebab.jpeg'),
    nameOrder: 'Purani Dilli ki Mutton Seekh Kebab',
    foodDetail: `The ready-to-cook Mutton Seekh Kebabs from Licious are a blend of the finest minced meat from the best cuts of a Lamb with fresh, authentic spices. These medium-spicy kebabs are made with a host of ingredients and spices such as onion, ginger, green chilli, mint leaves and cilantro. The Kebabs are ideal for pan-frying or grilling and are ready in just 8 minutes. Order Mutton Seekh Kebabs online from Licious and enjoy a juicy and succulent meat indulgence at home.`,
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
  {
    id: 3,
    img: require('../../../images/afghani-murgh.jpeg'),
    nameOrder: 'Afghani Murgh Seekh Kebab',
    foodDetail: ``,
    rate: 4.5,
    reviews: 4.5,
    time: 15,
    cal: 234,
  },
];

const SavedRecipes = () => {
  const navigation = useNavigation();
  const [showList, setShowList] = useState(false);

  const onShowFilter = useCallback(() => {
    navigation.navigate(ROUTES.Filter);
  }, []);
  const onShowCard = useCallback(() => {
    setShowList(false);
  }, []);
  const onShowList = useCallback(() => {
    setShowList(true);
  }, []);
  const [newData, setNewData] = useState(data);
  const onDelete = useCallback(
    (id) => {
      let list = newData.filter((item) => item.id !== id);
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          200,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.opacity,
        ),
      );
      setNewData(list);
    },
    [newData],
  );

  const _renderItem = useCallback(
    ({item}) => {
      return (
        <ItemSaved
          id={item.id}
          name={item.nameOrder}
          rate={item.rate}
          cal={item.cal}
          time={item.time}
          numOfAdded={item.numOfAdded}
          reviews={item.reviews}
          item={item}
          onDelete={onDelete}
          img={item.img}
        />
      );
    },
    [onDelete],
  );
  return (
    <View style={styles.container}>
      {showList ? (
        <OrderList onShowCard={onShowCard} onShowFilter={onShowFilter} />
      ) : (
        <>
          <View style={styles.content}>
            <FlatList
              data={newData}
              renderItem={_renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.list}
              ListEmptyComponent={
                <Nodata
                  svgName={<SvgNodata />}
                  title={'view all dishes '}
                  nameButton={'get browsing'}
                  content={' Explorer menu and get a first dish.'}
                />
              }
            />
          </View>
          {newData.length !== 0 ? (
            <ModalChoose
              svgLeft={<SvgFilterSmall />}
              nameLeft={'Filter'}
              svgRight={<SvgList />}
              nameRight={'List'}
              onPressRight={onShowList}
              onPressLeft={onShowFilter}
            />
          ) : null}
        </>
      )}
    </View>
  );
};

export default SavedRecipes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: getBottomSpace() + 70,
  },
});
