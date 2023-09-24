import React from 'react';
import {Image, View, Text, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Dots = ({selected}) => {
  let backgroundColor;
  backgroundColor = selected ? 'rgba(0,0,0,0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
    <View
      style={{
        width: 5,
        height: 5,
        marginHorizontal: 3,
      }}
    />
  );
};

const Skip = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate('KakaoLogin')}>
    <Text style={styles.bottombtn}>Skip</Text>
  </TouchableOpacity>
);
const Done = ({navigation}) => (
  <TouchableOpacity
    style={{marginHorizontal: 20}}
    onPress={() => navigation.navigate('VoiceRange')}>
    <Text style={styles.bottombtn}>Done</Text>
  </TouchableOpacity>
);

const Middle = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={() => <Skip navigation={navigation} />}
      // NextButtonComponent={Next}
      DoneButtonComponent={() => <Done navigation={navigation} />}
      onSkip={() => navigation.replace('KakaoLogin')}
      onDone={() => navigation.navigate('KakaoLogin')}
      pages={[
        {
          backgroundColor: '#EAEAF4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/headphone.png')}
              style={styles.imageStyle}
            />
          ),
          title:
            '개인의 음역대를 측정하여 \n 본인과 잘 어울리는 노래를 추천받고, ',
          // subtitle: '사용자의 음역대를 ',
        },
        {
          backgroundColor: '#EAEAF4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/thumbsup.png')}
              style={styles.imageStyle}
            />
          ),
          title: '퍼펙트 스코어를 통해 \n 자신이 부른 노래를 평가받고,',
          subtitle: '',
        },
        {
          backgroundColor: '#EAEAF4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/miccc.png')}
              style={styles.imageStyle}
            />
          ),
          title:
            'Ai를 통해 본인 혹은 타인의 목소리로 \n 원하는 곡을 들을 수 있는 경험을 제공하며,',
          subtitle: '',
        },
        {
          backgroundColor: '#EAEAF4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/link.png')}
              style={styles.imageStyle}
            />
          ),
          title: '작곡가와 가수의 만남을 위한 \n커뮤니티 기능도 제공합니다',
          subtitle: '',
        },
        {
          backgroundColor: '#EAEAF4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/heart.png')}
              style={styles.imageStyle}
            />
          ),
          title:
            '여러분의 음악 상상력을 높여줄 \n 당신을 위한 음악 플랫폼, 랄라리아',
          subtitle: '',
        },
      ]}
      titleStyles={{
        marginTop: -20,
        fontSize: 18,
        fontWeight: '400',
        color: 'black',
        letterSpacing: -1.5,
      }}
      subTitleStyles={{
        marginTop: -10,
        fontSize: 15,
        fontWeight: '400',
        color: 'black',
        letterSpacing: -1,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottombtn: {
    fontWeight: '400',
    marginLeft: 20,
    fontSize: 18,
    letterSpacing: -1,
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginTop: -80,
  },
});

export default Middle;
