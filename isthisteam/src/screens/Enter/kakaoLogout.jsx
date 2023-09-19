import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Button} from 'react-native';
import * as KakaoLogins from '@react-native-seoul/kakao-login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function KakaoLogout() {
  const navigation = useNavigation();

  const handleKakaoLogout = async () => {
    try {
      // 카카오 로그아웃
      const result = await KakaoLogins.logout();

      // AsyncStorage에서 jwt 토큰 삭제
      await AsyncStorage.removeItem('jwtToken');

      // 화면 전환 : 메인 화면으로 이동
      navigation.navigate('Mainpage');
    } catch (error) {
      console.error('로그아웃 오류:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={handleKakaoLogout}>
        <Text>Kakao Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
