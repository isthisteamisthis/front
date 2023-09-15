import React from 'react';
import {Image, View, Text, Button, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Onboarding from 'react-native-onboarding-swiper';

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
const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 8}}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

const Middle = ({navigation}) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('loginpage')}
      onDone={() => navigation.navigate('loginpage')}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../android/app/assets/images/mic.png')}
            />
          ),
          title: 'onboarding',
          subtitle: '룰루랄라',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={require('../../../android/app/assets/images/mic.png')}
            />
          ),
          title: 'onboarding2',
          subtitle: '룰루라랄라',
        },
      ]}
    />
  );
};

export default Middle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
