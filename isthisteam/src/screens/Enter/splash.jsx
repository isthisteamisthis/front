import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Middle');
    }, 3000);
  }, [navigation]);
  const Stack = createStackNavigator();

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
    marginTop: 150,
    width: 350,
    height: 350,
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
    marginBottom: 5,
    color: 'black',
    fontWeight: '800',
  },
  text02: {
    fontSize: 12,
    marginTop: 1,
    color: 'black',
  },
});

export default Splash;
