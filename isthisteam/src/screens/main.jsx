import React, { useEffect } from "react";
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Config from "react-native-config";

function Main() {
  const navigation = useNavigation();
  const isFocused = useIsFocused(); // 이 화면이 현재 활성화된 화면인지 여부

  useEffect(() => {
    if (isFocused) {
      // 화면이 활성화될 때 jwt 토큰 확인
      const fetchJwtToken = async () => {
        try {
          const jwtToken = await AsyncStorage.getItem('jwtToken');
          
          if (jwtToken) {
            const loginUrl = Config.REACT_APP_LOGIN_URL;
            console.log(jwtToken);
            // JWT 토큰을 백엔드로 전송하여 유효성 확인
            const response = await fetch(`${loginUrl}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `${jwtToken}`,
              },
            });

            if (response.status === 200) {
              // 유효한 토큰이면 Main 화면 유지
            } else {
              // 유효하지 않은 토큰이면 KakaoLogin 화면으로 이동
              navigation.navigate('KakaoLogin');
            }
          } else {
            // JWT 토큰이 없으면 KakaoLogin 화면으로 이동
            navigation.navigate('KakaoLogin');
          }
        } catch (error) {
          console.error('JWT 토큰 가져오기 오류:', error);
        }
      };

      fetchJwtToken();
    }
  }, [isFocused]);

  return (
    <View>
      <Button
        title="높낮이 측정하러 가기"
        onPress={() => navigation.navigate('VoiceRange')}
      />
      <Button
        title="카카오 로그인"
        onPress={() => navigation.navigate('KakaoLogin')}
      />
      <Button
        title="카카오 로그아웃"
        onPress={() => navigation.navigate('KakaoLogout')}
      />
      <Button
        title="마이 페이지"
        onPress={() => navigation.navigate('MyPage')}
      />
    </View>
  );
}

export default Main;
