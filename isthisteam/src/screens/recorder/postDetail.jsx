import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostDetail = () => {
  const route = useRoute();
  const { postNo } = route.params;
  const [postDetail, setPostDetail] = useState(null);

  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        // AsyncStorage에서 jwtToken을 가져옵니다.
        const jwtToken = await AsyncStorage.getItem('jwtToken');

        if (!jwtToken) {
          throw new Error('JWT Token not found');
        }

        // 게시물 상세 정보를 가져오는 API 요청
        const response = await fetch(`http://10.0.2.2:8080/posts/${postNo}`, {
          method: 'GET',
          headers: {
            Authorization: `${jwtToken}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const responseData = await response.json();
        console.log(responseData.data);
        // 가져온 데이터를 상태에 저장
        setPostDetail(responseData.data);
      } catch (error) {
        console.error('Error fetching post detail:', error);
      }
    };

    fetchPostDetail();
  }, [postNo]);

  return (
    <View style={styles.container}>
      {postDetail ? (
        <>
          <Text style={styles.title}>title : {postDetail.title}</Text>
          <Text style={styles.title}>LikeCount : {postDetail.likeCnt}</Text>
          <Text style={styles.title}>like(내가 좋아요했는지 여부) : {postDetail.like ? 'true' : 'false'}</Text>
          <Text style={styles.title}>me(내 포스트인지 여부) : {postDetail.me ? 'true' : 'false'}</Text>
          <Text style={styles.title}>date : {formatDate(postDetail.date)}</Text>
          
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default PostDetail;
