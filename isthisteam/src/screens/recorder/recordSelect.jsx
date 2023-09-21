import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

function RecordSelect({navigation}) {
  const onPress1 = () => {
    navigation.navigate('AiCover');
  };
  const onPress2 = () => {
    navigation.navigate('PerfectScore');
  };

  return (
    <View style={styles.container}>
      {/* <Image
        source={require('../../../android/app/assets/images/select.png')}
        style={styles.image}
      /> */}
      {/* <Text style={styles.title}>{`      어떤 기능을
선택하시겠습니까?`}</Text> */}

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress1}>
        <Text style={styles.text}>{`      Ai 커버 
생성하러 가기`}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPress2}>
        <Text style={styles.text}>퍼펙트 스코어</Text>
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
    backgroundColor: '#F7F5EB',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -1,
    marginTop: -200,
    marginLeft: 100,
    // marginBottom: 10,
    lineHeight: 22,
    color: 'black',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: -30,
    marginRight: 100,
    padding: 0,
    width: 100,
    height: 80,
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'black',
    marginTop: 2.5,
    fontSize: 16,
    letterSpacing: -1,
    fontWeight: '600',
  },
});

export default RecordSelect;
