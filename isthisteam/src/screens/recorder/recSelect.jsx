import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function RecSelect({navigation}) {
  const onPress = () => {
    navigation.navigate('AiCover');
  };
  const onPress1 = () => {
    navigation.navigate('PerfectScore');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title0}>{`RECORD`}</Text>
      <Text style={styles.title}>{`원하는 기능을 선택해주세요`}</Text>
      {/* <Image
        source={require('../../../android/app/assets/images/playy.png')}
        style={styles.image}
      /> */}
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}>
          <Text style={styles.text}>Ai 커버곡 생성</Text>
          <Text style={styles.text0}>{`            학습된 모델의 
          목소리를 가지고
              본인이 원하는 
      노래를 들을 수 있어요`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button1}
          onPress={onPress1}>
          <Text style={styles.text00}>나만의 노래방</Text>
          <Text style={styles.text01}>{`    직접 노래하고
점수를 받아보세요!`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row', // 가로로 정렬
    alignItems: 'center', // 수직 가운데 정렬
    marginBottom: 16,
  },
  title0: {
    marginBottom: 40,
    marginLeft: -0,
    fontSize: 36,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '600',
  },
  image: {
    width: 170,
    height: 170,
    marginBottom: 20,
    marginTop: -20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAF4',
    marginTop: -30,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1.5,
    marginTop: -45,
    marginBottom: 30,
    marginLeft: -5,
    // lineHeight: 22,
    color: 'gray',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 150,
    textAlign: 'center',
    // borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#202B8F',
    backgroundColor: '#202B8F',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'white',
    marginTop: 8,
    fontSize: 22,
    letterSpacing: -1.5,
    fontWeight: '600',
  },
  text00: {
    color: '#202B8F',
    marginTop: 8,
    fontSize: 22,
    letterSpacing: -1.5,
    fontWeight: '600',
  },
  text0: {
    marginTop: 12,
    color: 'white',
    letterSpacing: -1,
    // fontWeight: '100',
  },
  text01: {
    color: '#202B8F',
    letterSpacing: -1,
    fontWeight: '100',
    margin: 30,
  },
  button1: {
    marginTop: 5,
    paddingTop: -7,
    width: 200,
    height: 150,
    textAlign: 'center',
    // borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#202B8F',
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
  },
  text1: {
    color: '#202B8F',
    marginTop: 4,
    fontSize: 22,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default RecSelect;
