import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AudioPlayer} from 'react-native-simple-audio-player';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostDetail = ({route, navigation}) => {
  // route.params에서 postNo를 추출하고, 기본값으로 빈 문자열("")을 설정합니다.
  const {postNo} = route.params;
  const {nickname} = route.params;
  const [like, setLike] = useState('');
  const [data, setData] = useState('');
  const [likeCnt, setLikeCnt] = useState('');
  const [likeEmoji, setLikeEmoji] = useState('');

  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    };
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', options);
  };

  useEffect(() => {
    // postNo가 빈 문자열인 경우 처리
    if (!postNo) {
      console.error('postNo not defined');
      return;
    }

    // AsyncStorage에서 JWT 토큰을 가져오는 함수
    AsyncStorage.getItem('jwtToken')
      .then(jwtToken => {
        if (!jwtToken) {
          throw new Error('JWT Token not found');
        }
        return fetch(`http://10.0.2.2:8080/posts/${postNo}`, {
          method: 'GET',
          headers: {
            Authorization: `${jwtToken}`,
          },
        });
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network request was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log(responseData);
        setData(responseData.data);
        setLike(responseData.data.like);
        setLikeEmoji(responseData.data.like ? '💖' : '🤍');
        setLikeCnt(responseData.data.likeCnt);
      })
      .catch(error => {
        console.error('Error fetching message content:', error);
      });
  }, [postNo]);

  const toggleLike = async () => {
    // Toggle the like state
    console.log(like);
    const newLike = !like;
    setLike(newLike);
    setLikeEmoji(newLike ? '💖' : '🤍');
    setLikeCnt(newLike ? likeCnt + 1 : likeCnt - 1);
  
    // Await the JWT token retrieval
    const jwtToken = await AsyncStorage.getItem('jwtToken');
    const method = newLike ? 'POST' : 'DELETE';
  
    fetch(`http://10.0.2.2:8080/posts/${postNo}/like`, {
        method: method,
        headers: {
          Authorization: `${jwtToken}`,
        },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network request was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        console.log('Like status updated:', responseData);
      })
      .catch((error) => {
        console.error('Error updating like status:', error);
      });
  };
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        {/* <Image
          source={require('../../../android/app/assets/images/miccc.png')}
          style={styles.header}
        /> */}
        <Text style={styles.headerText}>
          {nickname}님의 {data.title}
        </Text>
      </View>
      <View style={styles.header00}>
        <Image
          style={styles.albumCover}
          source={{
            uri: data.imgFile,
          }} // 이미지 파일을 가져오도록 수정
        />
        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>{data.title}</Text>
          <Text style={styles.artistName}>Artist | {nickname}</Text>
          <Text style={styles.artistName}>💖 {likeCnt}</Text>
          <TouchableOpacity onPress={toggleLike}>
            <Text style={styles.artistName}>좋아요 {likeEmoji}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#7077B7',
          justifyContent: 'center',
          padding: 20,
        }}>
        <AudioPlayer
          url={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        />
      </View>
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7077B7',
    // padding: 16,
  },
  sendtext1: {
    marginLeft: 205,
    marginBottom: 10,
    color: 'black',
    fontWeight: '800',
  },
  container1: {
    backgroundColor: '#EAEAF4',
    width: '100%',
    height: 100,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    height: 50,
  },
  headerText: {
    flex: 1,
    color: '#7077B7',
    fontWeight: '900',
    lineHeight: 18,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
  },
  header00: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  albumCover: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
    marginTop: 50,
    marginLeft: 30,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 40,
    color: '#EAEAF4',
  },
  artistName: {
    fontSize: 18,
    marginBottom: 8,
    color: '#EAEAF4',
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default PostDetail;
