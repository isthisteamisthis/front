import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function RecSelect({navigation}) {
  const onPress = () => {
    navigation.navigate('AiCover');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../android/app/assets/images/select.png')}
        style={styles.image}
      /> */}
      <Text style={styles.title}>{`당신의 유형을 
선택해주세요`}</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>Ai 커버곡 생성</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button1}
        onPress={onPress}>
        <Text style={styles.text1}>퍼펙트 스코어</Text>
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
    // backgroundColor: '#F7F5EB',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1,
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 22,
    color: 'black',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 45,
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff5403',
    backgroundColor: '#ff5403',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'white',
    marginTop: 4,
    fontSize: 22,
    letterSpacing: -1,
    fontWeight: '600',
  },
  button1: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 45,
    textAlign: 'center',
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ff5403',
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
  },
  text1: {
    color: '#ff5403',
    marginTop: 4,
    fontSize: 22,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default RecSelect;
