import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AudioPlayer} from 'react-native-simple-audio-player';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
      .then(response => {
        if (!response.ok) {
          throw new Error('Network request was not ok');
        }
        return response.json();
      })
      .then(responseData => {
        console.log('Like status updated:', responseData);
      })
      .catch(error => {
        console.error('Error updating like status:', error);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.albumTitle}>{data.title}</Text>
        <Text style={styles.artistName}>{nickname}</Text>
      </View>

      <View style={styles.albumCoverup}>
        <View style={styles.header00}>
          <Image
            style={styles.albumCover}
            source={{
              uri: data.imgFile,
            }} // 이미지 파일을 가져오도록 수정
          />
        </View>

        <View style={styles.albumInfo}>
          <View style={styles.like}>
            <TouchableOpacity onPress={toggleLike}>
              {/* <Text style={styles.likebtn}>좋아요 {likeEmoji}</Text> */}
              <Text style={styles.likecount}>
                {likeEmoji} {likeCnt}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1.5,
          backgroundColor: '#000',
          justifyContent: 'center',
          marginTop: 10,
          padding: 10,
        }}>
        <AudioPlayer url={data.aiSongFile} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 155,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '800',
  },
  header: {
    marginBottom: -10,
    marginTop: 50,
    marginLeft: 185,
    width: 40,
    height: 40,
  },
  container1: {
    marginTop: 70,
  },
  headerText: {
    flex: 1,
    color: 'black',
    fontWeight: '900',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    letterSpacing: -1,
  },
  header00: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 50,
  },
  albumCover: {
    width: 250,
    height: 250,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
    marginLeft: 80,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginLeft: 150,
    color: '#C2C2C2',
    letterSpacing: -1,
  },
  artistName: {
    fontSize: 18,
    marginBottom: -20,
    marginTop: 3,
    color: '#fff',
    fontWeight: '800',
    letterSpacing: -1,
    marginLeft: 175,
  },
  like: {
    flexDirection: 'row', // 요소들을 가로로 배치
    alignItems: 'center', // 요소들을 수직 가운데 정렬
    marginLeft: 175, // 좋아요 버튼의 왼쪽 여백 조절
    marginTop: 10, // 좋아요 버튼의 상단 여백 조절
  },
  likebtn: {
    fontSize: 18,
    color: '#000',
    fontWeight: '100',
    letterSpacing: -1,
    marginRight: 5, // 아이콘과 텍스트 사이의 간격 조절
  },
  likecount: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '400',
    letterSpacing: -1,
    marginLeft: 5,
    marginTop: -20,
    marginBottom: 10,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default PostDetail;
