import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Enter({navigation}) {
  const onPress00 = () => {
    navigation.navigate('Aicover');
  };
  const onPress01 = () => {
    navigation.navigate('PerfectScore');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/select.png')}
        style={styles.image}
      />
      <Text style={styles.title}></Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress00}>
        <Text style={styles.text}>AI 커버곡 생성하러 가기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPress01}>
        <Text style={styles.text}>퍼펙트 스코어 갱신하러 가기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    marginBottom: 550,
    marginTop: -30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1,
    marginTop: -530,
    marginBottom: 10,
    lineHeight: 22,
    color: 'black',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 52,
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'black',
    marginTop: 2.5,
    fontSize: 28,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default Enter;
