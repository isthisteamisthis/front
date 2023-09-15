// Splash.jsx

import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Select');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../android/app/src/main/res/drawable/logoofsepp.png')}
        style={styles.image}
      />
      <Text style={styles.text01}>ISTHISTEAM</Text>
      <Text style={styles.text02}>AI | 이소영 여형구 차민수</Text>
      <Text style={styles.text02}>Server | 강수의 라현지 손정인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 200,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 12,
    marginTop: 1,
    color: 'black',
    fontWeight: '800',
  },
  text01: {
    fontSize: 15,
    marginTop: 100,
    marginBottom: 30,
    color: 'black',
    fontWeight: '800',
  },
  text02: {
    fontSize: 12,
    marginTop: 1,
    color: 'black',
    fontWeight: '500',
  },
});

export default Splash;
