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

  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        '앱 종료',
        '앱을 종료하시겠습니까?',
        [
          {
            text: '취소',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: '확인',
            onPress: () => {
              BackHandler.exitApp(); // 앱 종료
            },
          },
        ],
        {cancelable: false},
      );

      return true; // 기본적인 하드웨어 뒤로가기 동작 방지
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      backHandler.remove(); // 컴포넌트가 언마운트 될 때 이벤트 리스너 해제
    };
  }, []);

  // state(상태)를 어디서 관리할 건지 확인!
  // 요청된 url 주소 출력해보기
  // 그 값을 state에 담아보기
  // 의도치 않게 돌아가면, 적절한 state위치를 찾기 (어디서 관리할 것인지!)

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../android/app/src/main/res/drawable/lastlogo01.png')}
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
    backgroundColor: '#EAC7C7',
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
