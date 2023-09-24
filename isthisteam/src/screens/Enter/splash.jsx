import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
  Alert,
  Image,
} from 'react-native';
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
        source={require('../../../android/app/assets/images/splash003.png')}
        style={styles.image}
      />
      <Text style={styles.text01}>ISTHISTEAM</Text>
      <Text style={styles.text02}>AI | 여형구 이소영 차민수</Text>
      <Text style={styles.text02}>Server | 강수의 라현지 손정인</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202B8F',
  },
  image: {
    marginTop: 150,
    width: 350,
    height: 350,
  },
  text: {
    fontSize: 12,
    marginTop: 1,
    color: 'white',
    fontWeight: '800',
  },
  text01: {
    fontSize: 16,
    marginTop: 100,
    marginBottom: 5,
    color: 'white',
    fontWeight: '900',
  },
  text02: {
    fontSize: 12,
    marginTop: 1,
    color: 'white',
    lineHeight: 15,
    letterSpacing: -0.5,
  },
});

export default Splash;
