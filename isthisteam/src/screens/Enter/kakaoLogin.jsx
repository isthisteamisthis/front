import React, {useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  BackHandler,
  Alert,
  Image,
  StyleSheet,
  ImageBackground,
  Text,
} from 'react-native';
import * as KakaoLogins from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';

export default function KakaoLogin() {
  const navigation = useNavigation();
  console.log("카카오 로그인 진입");
  // 하드웨어 뒤로가기 버튼 클릭 시 동작
  // Alert 창 : 앱을 종료할건지 묻고, 확인을 선택하면 앱 종료

  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인
      const result = await KakaoLogins.login();
      const kakaoLoginUrl = Config.REACT_APP_KAKAO_LOGIN_URL;
      console.log(kakaoLoginUrl);
      
      // 카카오 로그인 성공 시, result.accessToken을 서버로 전송
      const response = await fetch(`${kakaoLoginUrl}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({accessToken: result.accessToken}),
      });

      if (response.status === 200) {
        // 서버에서 받은 JWT 토큰을 AsyncStorage에 저장
        const jwtToken = response.headers.get('Authorization');
        await AsyncStorage.setItem('jwtToken', jwtToken);
        console.log(jwtToken);

        // 화면 전환 : 메인 화면으로 이동
        navigation.navigate('Mainpage');
      } else {
        console.error('서버에서 토큰을 받지 못했습니다.');
      }
    } catch (error) {
      console.error('카카오 로그인 오류:', error);
    }
  };

  // 안드로이드 화면 상단의 뒤로가기 버튼 없애기
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => null, // 뒤로가기 버튼 없애기
    });
  }, [navigation]);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#EAEAF4',
        }}>
        <Image
          source={require('../../../android/app/assets/images/key.png')}
          style={{width: 150, height: 150, marginBottom: 40, marginTop: -50}}
        />
        <Text style={styles.text01}>{`먼저, 하단의 버튼을 눌러 
  로그인을 진행해주세요 
        `}</Text>
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image
            source={require('../../../android/app/assets/images/kakao_login_large_narrow.png')}
            style={{
              width: 200,
              height: 50,
              marginTop: -40,
              marginBottom: 0,
              marginLeft: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  text01: {
    marginTop: -50,
    marginBottom: 100,
    fontWeight: '400',
    marginLeft: 10,
    fontSize: 18,
    color: 'gray',
    letterSpacing: -1.5,
  },
});
