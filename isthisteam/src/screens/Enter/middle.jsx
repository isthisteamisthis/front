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
    <Text style={styles.skip}>Skip</Text>
  </TouchableOpacity>
);
const Next = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 20}}>
    <Text style={{fontSize: 16}}>Next</Text>
  </TouchableOpacity>
);
const Done = ({navigation}) => (
  <TouchableOpacity
    style={{marginHorizontal: 50}}
    onPress={() => navigation.navigate('Select')}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const Middle = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={() => <Skip navigation={navigation} />}
      NextButtonComponent={Next}
      DoneButtonComponent={() => <Done navigation={navigation} />}
      onSkip={() => navigation.replace('Select')}
      onDone={() => navigation.navigate('Select')}
      pages={[
        {
          backgroundColor: '#EAE0DA',
          image: (
            <Image
              source={require('../../../android/app/assets/images/middle001.png')}
              style={styles.imageStyle}
            />
          ),
          title: '어서오세요',
          subtitle:
            '랄라리아는 커뮤니티 기반의  \n 커버 노래 공유 & 작곡가-가수 매칭 플랫폼입니다.',
        },
        {
          backgroundColor: '#F3D2C1',
          image: (
            <Image
              source={require('../../../android/app/assets/images/middle02.png')}
              style={styles.imageStyle}
            />
          ),
          title: '랄라리아는',
          subtitle:
            '사용자가 작곡가 혹은 가수의 포지션을 직접 정하여 \n 본인이 작곡한 곡을 AI 커버를 통해 제공받을 수 있으며, \n 본인의 목소리를 녹음해 다양한 노래를 \n 본인의 목소리로 들을 수 있는 기능을 제공합니다.',
        },
        {
          backgroundColor: '#F7F5EB',
          image: (
            <Image
              source={require('../../../android/app/assets/images/middle003.png')}
              style={styles.imageStyle}
            />
          ),
          title: '작곡가 | 가수',
          subtitle:
            '본인의 포지션을 미리 결정해주시면, \n더 나은 서비스를 제공받으실 수 있습니다.',
        },
        {
          backgroundColor: '#EAC7C7',
          image: (
            <Image
              source={require('../../../android/app/assets/images/middle04.png')}
              style={styles.imageStyle}
            />
          ),
          title: '시작해볼까요?',
          subtitle:
            '랄라리아는 당신이 어떤 모습을 꿈꾸든 \n 당신이 상상한 모습을 그대로 실현시켜드립니다.',
        },
      ]}
      titleStyles={{
        marginTop: -50,
        fontSize: 24,
        fontWeight: '900',
        color: 'black',
        letterSpacing: -1,
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
  skip: {
    fontWeight: '800',
    marginLeft: 20,
    marginBottom: 10,
  },
  next: {},
  imageStyle: {
    width: 200,
    height: 200,
    marginTop: -100,
  },
});

export default Middle;
