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
        backgroundColor,
      }}
    />
  );
};

const Skip = ({...props}) => <Button title="Skip" color="#000000" {...props} />;
const Next = ({...props}) => <Button title="Next" color="#000000" {...props} />;
const Done = ({navigation}) => (
  <TouchableOpacity
    style={{marginHorizontal: 8}}
    onPress={() => navigation.navigate('Select')}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const Middle = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={() => <Done navigation={navigation} />}
      onSkip={() => navigation.replace('loginpage')}
      onDone={() => navigation.navigate('select')}
      pages={[
        {
          backgroundColor: '#F8F6F4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/karaoke1.png')}
              style={styles.imageStyle}
            />
          ),
          title: '어서오세요',
          subtitle: '랄라리아는 ',
        },
        {
          backgroundColor: '#E3F4F4',
          image: (
            <Image
              source={require('../../../android/app/assets/images/relax4.png')}
              style={styles.imageStyle}
            />
          ),
          title: 'onboarding2',
          subtitle: '룰루라랄라',
        },
        {
          backgroundColor: '#D2E9E9',
          image: (
            <Image
              source={require('../../../android/app/assets/images/relax4.png')}
              style={styles.imageStyle}
            />
          ),
          title: 'onboarding3',
          subtitle: '뭐 써야하지 ㅋㅋ',
        },
        {
          backgroundColor: '#C4DFDF',
          image: (
            <Image
              source={require('../../../android/app/assets/images/woman.png')}
              style={styles.imageStyle}
            />
          ),
          title: '시작해볼까요?',
          subtitle:
            '랄라리아는 당신이 꿈꾸는 어떤 모습이든\n당신이 상상한 모습을 그대로 실현시켜드립니다.',
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
  imageStyle: {
    width: 170,
    height: 170,
    marginTop: -200,
  },
});

export default Middle;
