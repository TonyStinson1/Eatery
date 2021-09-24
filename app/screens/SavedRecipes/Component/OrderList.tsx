/* eslint-disable */
import React, { memo, useCallback, useState } from 'react';
import { FlatList, StyleSheet, View, LayoutAnimation } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import ModalChoose from 'app/components/ModalChoose'
import SvgOrderList1 from 'app/svgs/Explorer/SvgOrderList1';
import SvgOrderList2 from 'app/svgs/Explorer/SvgOrderList2';
import SvgOrderList3 from 'app/svgs/Explorer/SvgOrderList3';
import ItemListSaved from 'app/screens/SavedRecipes/Component/ItemListSaved'
import SvgFilterSmall from 'app/svgs/Explorer/SvgFilterSmall';
import SvgCard from 'app/svgs/Explorer/SvgCard'
import keyExtractor from 'app/ultis/KeyExtractor';
import Nodata from 'app/components/NoData'
import SvgNodata from 'app/svgs/SvgNodata'

const dataListOrder = [
    {
        id: 0,
        name: 'Chicken Fajitas With Seeded Tortilla Wraps & Salsa',
        rate: 4.5,
        svgName: <SvgOrderList1 />,
        img: require('app/assets/UpComing/img_recipe.png'),
    },
    {
        id: 1,
        name: 'Purani Dilli ki Mutton Seekh Kebab',
        rate: 4.5,
        svgName: <SvgOrderList2 />,
        img: require('../../../../images/kebab.jpeg'),
    },
    {
        id: 2,
        name: 'Afghani Murgh Seekh Kebab',
        rate: 4.5,
        svgName: <SvgOrderList3 />,
        img: require('../../../../images/afghani-murgh.jpeg'),
    },
]

interface PropsOrderList {
    onShowCard: () => void
    onShowFilter: () => void
}
const OrderList = memo((props: PropsOrderList) => {
    const [newData, setNewData] = useState(dataListOrder)
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
            setNewData(list)
        },
        [newData]
    );
    const renderItem = useCallback(({ item }) => {
        return (
            <ItemListSaved
                id={item.id}
                svgName={item.svgName}
                rate={item.rate}
                name={item.name}
                onDelete={onDelete}
                img={item.img}
                item={item}
            />
        )
    }, [onDelete])

    return (
        <View style={styles.containerOrderList}>
            <FlatList
                data={newData}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <Nodata svgName={<SvgNodata />} title={"No cooking yet! "} nameButton={"get cooking"} content={" Explorer menu and get a first cook."} />
                }
            />
            {
                newData.length !== 0 ?
                    <ModalChoose
                        svgLeft={<SvgFilterSmall />}
                        svgRight={<SvgCard />}
                        nameLeft={"Filter"}
                        nameRight={"Card"}
                        onPressLeft={props.onShowFilter}
                        onPressRight={props.onShowCard} />
                    : null
            }
        </View>
    )
})

export default OrderList

const styles = StyleSheet.create({
    list: {
        paddingBottom: getBottomSpace() + 100
    },
    containerOrderList: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    }
})
