import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Config from "react-native-config";

export default function MyPage() {
  const navigation = useNavigation();
  const myPageUrl = Config.REACT_APP_MYPAGE_URL;
  const [myPageData, setMyPageData] = useState(null);

  const fetchMyPageData = async () => {
    try {
      const jwtToken = await AsyncStorage.getItem('jwtToken');

      const response = await fetch(`${myPageUrl}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${jwtToken}`,
        },
      });

      if (response.ok) {

        const responseData = await response.json();
        setMyPageData(responseData.data);
        console.log(responseData);

      } else {
        console.error('My Page 데이터 가져오기 실패');
      }
    } catch (error) {
      console.error('데이터 가져오기 오류:', error);
    }
  }

  useEffect(() => {
    fetchMyPageData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {myPageData ? (
        <View>
          <Text>My Page 데이터 가져옴</Text>
          <Text>사용자 이름: {myPageData.nickname}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
