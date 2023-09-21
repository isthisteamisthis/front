import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function Select({navigation}) {
  const onPress = () => {
    navigation.navigate('VoiceRange');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../android/app/assets/images/select.png')}
        style={styles.image}
      /> */}
      <Text style={styles.title}>{`당신의 유형을 
선택해주세요`}</Text>
      <Text
        style={styles.title01}>{`정확한 기능 제공을 위해 필요합니다.`}</Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button00}
        onPress={onPress}>
        <Text style={styles.text00}>작곡가</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>가수</Text>
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
    fontWeight: '500',
    letterSpacing: -1,
    marginTop: -10,
    marginBottom: 10,
    lineHeight: 22,
    color: 'black',
  },
  title01: {
    fontSize: 12,
    fontWeight: '100',
    letterSpacing: -1,
    marginTop: -10,
    marginBottom: 30,
    lineHeight: 22,
    color: 'gray',
  },
  button00: {
    marginTop: 5,
    paddingTop: -7,
    width: 180,
    height: 40,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#ff5403',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#ff5403',
    marginHorizontal: 'auto',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    width: 180,
    height: 40,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#ff5403',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 'auto',
  },
  text00: {
    color: 'white',
    marginTop: 2.5,
    fontSize: 22,
    letterSpacing: -1,
    fontWeight: '600',
  },
  text: {
    color: '#ff5403',
    marginTop: 2.5,
    fontSize: 22,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default Select;
