import React, { memo, useCallback } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { widthScreen } from 'app/ultis/layout';
import colors from 'app/ultis/colors';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import FONTS from 'app/ultis/fonts';
import SvgNotification from 'app/svgs/Profile/SvgNotification';
import SvgRightArrow from 'app/svgs/Profile/SvgRightArrow';
import PrimaryItem from 'app/screens/Profile/components/PrimaryItem';
import SvgOrderHistory from 'app/svgs/Profile/SvgOrderHistory';
import SvgPaymentMethod from 'app/svgs/Profile/SvgPaymentMethod';
import SvgDeliveryAddress from 'app/svgs/Profile/SvgDeliveryAddress';
import SecondMenuItem from 'app/screens/Profile/components/SecondMenuItem';
import { useNavigation } from '@react-navigation/native';
import ROUTES from 'app/ultis/routes';
import SvgProfile from 'app/svgs/Profile/SvgProfile';
import SvgSavedArticle from 'app/svgs/Profile/SvgSavedArticle';
import SvgSettings from 'app/svgs/Profile/SvgSettings';
import SvgInvite from 'app/svgs/Profile/SvgInvite';

const data = {
  avatar: require('app/assets/Profile/avatar.png'),
  userName: 'Julia Andrews',
  gmail: 'julian@gmail.com',
  numberNotification: '3',
  walaPoint: '2,500',
  orderHistory: true,
};

const Profile = memo(() => {
  const navigation = useNavigation();

  const onOrderHistory = useCallback(() => {
    navigation.navigate('ProfileOrderHistory');
  }, [navigation]);

  const onPaymentMethod = useCallback(() => {
    navigation.navigate(ROUTES.ProfilePaymentMethod);
  }, [navigation]);

  const onProfileMyAddress = useCallback(() => {
    navigation.navigate(ROUTES.ProfileMyAddress);
  }, [navigation]);

  const onMyProfile = useCallback(() => {
    navigation.navigate(ROUTES.MyProfile);
  }, [navigation]);

  // const onSavedArticle = useCallback(() => {
  //   navigation.navigate(ROUTES.ProfileSaveArticle);
  // }, [navigation]);

  const onSettings = useCallback(() => {
    navigation.navigate(ROUTES.ProfileSettings);
  }, [navigation]);

  const onProfileInvite = useCallback(() => {
    navigation.navigate(ROUTES.ProfileInvite);
  }, [navigation]);

  const onLogOut = useCallback(() => {
    navigation.navigate(ROUTES.Login);
  }, [navigation]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      bounces={false}
      contentContainerStyle={styles.contentContainerStyle}>
      <ImageBackground
        style={styles.imgBackGround}
        source={require('app/assets/Profile/bgCard.png')}>
        <View style={styles.avatarView}>
          <Image source={data.avatar} />
          <View style={styles.information}>
            <Text style={styles.txtUserName}>{data.userName}</Text>
            <Text style={styles.txtGmail}>{data.gmail}</Text>
          </View>
        </View>
      </ImageBackground>
      <TouchableOpacity style={styles.notificationView}>
        <SvgNotification />
        <View style={styles.numberNotificationView}>
          <Text style={styles.numberNotification}>
            {data.numberNotification}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.primaryMenu}>
        <View style={styles.walaPointView}>
          <Text style={styles.txtPoint}>
            <Text style={styles.txtWalaPoint}>Wala Point: </Text>
            {data.walaPoint}
          </Text>
          {/* <TouchableOpacity style={styles.getMoreView}>
            <Text style={styles.txtGetMore}>Get more</Text>
            <View style={styles.svg}>
              <SvgRightArrow />
            </View>
          </TouchableOpacity> */}
        </View>
        <View style={styles.primaryItemView}>
          <PrimaryItem
            onPress={onOrderHistory}
            svg={<SvgOrderHistory />}
            title={'Order\nHistory'}
          />
          <PrimaryItem
            onPress={onPaymentMethod}
            svg={<SvgPaymentMethod />}
            title={'Payment\nMethod'}
          />
          <PrimaryItem
            onPress={onProfileMyAddress}
            svg={<SvgDeliveryAddress />}
            title={'Delivery\nAddress'}
          />
        </View>
      </View>
      <View style={styles.secondMenu}>
        <SecondMenuItem
          onPress={onMyProfile}
          svg={<SvgProfile />}
          title={'My Profile'}
        />
        <SecondMenuItem
          onPress={onSettings}
          svg={<SvgSettings />}
          title={'Settings'}
        />
        <SecondMenuItem
          onPress={onProfileInvite}
          svg={<SvgInvite />}
          title={'Invite Friend and Family'}
        />
        <SecondMenuItem
          onPress={onLogOut}
          svg={<SvgSavedArticle />}
          title={'Log Out'}
        />
      </View>
    </ScrollView>
  );
});

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7FB',
  },
  imgBackGround: {
    width: widthScreen,
    height: 270,
  },
  avatarView: {
    top: getStatusBarHeight() + 44,
    left: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  information: {
    marginLeft: 20,
  },
  txtUserName: {
    fontFamily: FONTS.Montserrat.Bold,
    fontWeight: '500',
    fontSize: 20,
    color: colors.while,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
  },
  txtGmail: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: colors.while,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 0,
  },
  notificationView: {
    position: 'absolute',
    right: 0,
    top: 54,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberNotificationView: {
    position: 'absolute',
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    top: 5,
  },
  primaryMenu: {
    marginHorizontal: 24,
    backgroundColor: colors.while,
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.4)',
    shadowRadius: 30,
    marginTop: -80,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
  },
  walaPointView: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 15,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 13,
  },
  txtPoint: {
    fontFamily: FONTS.Montserrat.Bold,
    fontWeight: '600',
    fontSize: 14,
    color: colors.title,
  },
  txtWalaPoint: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 12,
    color: colors.title,
    fontWeight: 'normal',
  },
  getMoreView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtGetMore: {
    fontFamily: FONTS.Montserrat.Regular,
    fontSize: 14,
    color: colors.orangeLight,
    fontWeight: 'normal',
  },
  svg: {
    marginTop: 2,
  },
  primaryItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 45,
    marginTop: 24,
    marginBottom: 16,
  },
  secondMenu: {
    marginHorizontal: 24,
    backgroundColor: colors.while,
    borderRadius: 12,
    shadowColor: 'rgba(141, 151, 158, 0.4)',
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    marginTop: 16,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 56,
  },
  numberNotification: {
    fontFamily: FONTS.Montserrat.Regular,
    fontWeight: '500',
    fontSize: 12,
    color: colors.while,
  },
});
