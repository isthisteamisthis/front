import React, {useEffect} from 'react';
import {View, TouchableOpacity, BackHandler, Alert, Image} from 'react-native';
import * as KakaoLogins from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Config from 'react-native-config';
// import Mainpage from '../Main/mainpage';

export default function KakaoLogin() {
  const navigation = useNavigation();

  // 하드웨어 뒤로가기 버튼 클릭 시 동작
  // Alert 창 : 앱을 종료할건지 묻고, 확인을 선택하면 앱 종료
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert(
  //       '앱 종료',
  //       '앱을 종료하시겠습니까?',
  //       [
  //         {
  //           text: '취소',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {
  //           text: '확인',
  //           onPress: () => {
  //             BackHandler.exitApp(); // 앱 종료
  //           },
  //         },
  //       ],
  //       {cancelable: false},
  //     );

  //   return true; // 기본적인 하드웨어 뒤로가기 동작 방지
  // };

  // const backHandler = BackHandler.addEventListener(
  //   'hardwareBackPress',
  //   backAction,
  // );

  //   return () => {
  //     backHandler.remove(); // 컴포넌트가 언마운트 될 때 이벤트 리스너 해제
  //   };
  // }, []);

  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인
      const result = await KakaoLogins.login();
      const kakaoLoginUrl = Config.REACT_APP_KAKAO_LOGIN_URL;

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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../../../android/app/assets/images/lalalia_large_logo.png')}
          style={{width: 210, height: 85, marginTop: 250, marginBottom: 50}}
        />
        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image
            source={require('../../../android/app/assets/images/kakao_login_large_narrow.png')}
            style={{width: 200, height: 50, marginTop: 150, marginBottom: 50}}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
