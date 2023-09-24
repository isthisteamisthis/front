import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AudioPlayer} from 'react-native-simple-audio-player';

const SongDetail = ({route, navigation}) => {
  // route.params에서 songNo를 추출하고, 기본값으로 빈 문자열("")을 설정합니다.
  const {songNo} = route.params;
  const [data, setData] = useState('');

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
    // songNo가 빈 문자열인 경우 처리
    if (!songNo) {
      console.error('songNo is not defined');
      return;
    }

    // AsyncStorage에서 JWT 토큰을 가져오는 함수
    AsyncStorage.getItem('jwtToken')
      .then(jwtToken => {
        console.log('페이지 진입~!');
        if (!jwtToken) {
          throw new Error('JWT Token not found');
        }
        return fetch(`http://10.0.2.2:8080/song-data/${songNo}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMDE2OTM2MDEwIiwiaWF0IjoxNjk1MjUzMjg4LCJleHAiOjE2OTYxMTcyODh9.FYifxFUMtp7FY2NN1EIAyqbrP4tEIQ-hnPHuTQQBRfM`,
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
      })
      .catch(error => {
        console.error('Error fetching message content:', error);
      });
  }, [songNo]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper1.png')}
          style={styles.header}
        />
        <Text style={styles.sendtext1}>나의 쪽지함</Text>
      </View>
      <View style={styles.header00}>
        <Image
          style={styles.albumCover}
          source={{
            uri: data.imgUrl,
          }} // 이미지 파일을 가져오도록 수정
        />
        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>{data.songName}</Text>
          <Text style={styles.artistName}>원곡자 | {data.artistName}</Text>
        </View>
      </View>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: '#313131',
          justifyContent: 'center',
        }}>
        <AudioPlayer
          url={'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        />
      </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 205,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '800',
  },
  container1: {
    marginTop: -10,
    backgroundColor: '#EAEAF4',
    width: 800,
    marginLeft: -40,
    height: 100,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 225,
    width: 25,
    height: 25,
  },
  header00: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  albumCover: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 16,
    marginTop: 50,
    marginLeft: 50,
  },
  albumInfo: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistName: {
    fontSize: 18,
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SongDetail;
