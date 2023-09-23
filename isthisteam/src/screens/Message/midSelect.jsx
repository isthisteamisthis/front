import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

function MidSelect({navigation}) {
  const onPress = () => {
    navigation.navigate('coverList');
  };
  const onPress1 = () => {
    navigation.navigate('Community');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/chat.png')}
        style={styles.image}
      />
      <Text style={styles.title0}>{`COMMUNITY`}</Text>
      <Text style={styles.title}>{`작곡가와 가수가 하나되는 커뮤니티`}</Text>

      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={onPress}>
          <Text style={styles.text}>커버곡 모음</Text>
          <Text style={styles.text0}>{`            랄라리아 유저들의 
        커버곡 혹은 데모곡을
             직접 들어보세요`}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.button1}
          onPress={onPress1}>
          <Text style={styles.text00}>쪽지함</Text>
          <Text style={styles.text01}>{`             원하는 상대와
        쪽지를 주고받으며
더 나은 영감을 나눠보세요`}</Text>
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
    marginTop: 5,
    marginBottom: 40,
    marginLeft: -0,
    fontSize: 30,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '600',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 0,
    marginTop: -20,
    marginLeft: -20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9F1',
    marginTop: -60,
  },
  title: {
    fontSize: 15,
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
    borderColor: '#F7A642',
    backgroundColor: '#F7A642',
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
    color: '#F7A642',
    marginTop: 8,
    fontSize: 22,
    letterSpacing: -1.5,
    fontWeight: '600',
  },
  text0: {
    marginLeft: -20,
    marginTop: 20,
    color: 'white',
    letterSpacing: -1,
    fontWeight: '400',
  },
  text01: {
    color: '#F7A642',
    letterSpacing: -1,
    fontWeight: '400',
    width: 200,
    marginLeft: 56,
    marginTop: 20,
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
    borderColor: '#F7A642',
    backgroundColor: '#fff',
    marginHorizontal: 'auto',
  },
  text1: {
    color: '#202B8F',
    marginTop: 4,
    fontSize: 22,
    letterSpacing: -1,
    // fontWeight: '00',
  },
});

export default MidSelect;
