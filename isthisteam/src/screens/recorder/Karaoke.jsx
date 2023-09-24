import React, {useState, useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import AsyncStorage from '@react-native-async-storage/async-storage';

const audioRecorderPlayer = new AudioRecorderPlayer();

function Karaoke({route, navigation}) {
  const [isPlaying, setIsPlaying] = useState(false);
  // const [recordedFilePath, setRecordedFilePath] = useState('');
  const [artworkUrl, setArtworkUrl] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [title, setTitle] = useState('');
  const [mrUrl, setMrUrl] = useState('');

  const recordedFilePathRef = useRef('');

  const {songNo} = route.params;

  useEffect(() => {
    const fetchSongData = async () => {
      const apiUrl = `http://10.0.2.2:8080/song-data/${songNo}`;
      // const apiUrl = `http://10.0.2.2:8080/song-data/20`;

      console.log(apiUrl);

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const songData = data.data;
        setTitle(songData.songName);
        setArtworkUrl(songData.imgUrl);
        setMrUrl(songData.mrUrl);

        const lyricsResponse = await fetch(songData.lyricUrl);
        if (lyricsResponse.ok) {
          const lyricsText = await lyricsResponse.text();
          setLyrics(lyricsText);
        } else {
          console.error('Error fetching lyrics:', lyricsResponse.status);
        }
      } catch (error) {
        console.error('Error fetching song data:', error);
      }
    };

    fetchSongData();

    TrackPlayer.setupPlayer().then(() => {
      TrackPlayer.add({
        id: 'musicTrack',
        url: mrUrl,
        title: 'Music Track',
        artist: 'Artist',
      });
    });

    return () => {};
  }, [mrUrl]);

  const startRecording = async () => {
    try {
      await audioRecorderPlayer.startRecorder();
    } catch (error) {
      console.error(error);
    }
  };

  const stopRecording = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      recordedFilePathRef.current = result;
      console.log('파일경로:', result);
    } catch (error) {
      console.error(error);
    }
  };

  const playMusic = async () => {
    await startRecording();
    TrackPlayer.play();
    setIsPlaying(true);
  };

  const stopMusic = async () => {
    TrackPlayer.pause();
    await stopRecording();
    sendFileToServer();
    setIsPlaying(false);
  };

  const sendFileToServer = async () => {
    const recordedFilePath = recordedFilePathRef.current;

    if (recordedFilePath) {
      try {
        const apiUrl = 'http://10.0.2.2:8080/perfect-scores';

        const jwtToken = await AsyncStorage.getItem('jwtToken');

        if (!jwtToken) {
          throw new Error('JWT Token not found');
        }

        const formData = new FormData();
        formData.append('file', {
          uri: 'file://' + recordedFilePath,
          name: 'test.wav',
          type: 'audio/wav',
        });

        formData.append('songName', title);

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `${jwtToken}`,
          },
          body: formData,
        });

        if (response.ok) {
          console.log('성공!');
          const responseData = await response.json();
          alert('당신의 점수는  ' + responseData.data.score + '점 입니다!');
          navigation.navigate('MyPage');
        } else {
          console.error('실패');
          alert('파일 업로드를 실패했습니다');
        }
      } catch (error) {
        console.error('에러: ', error);
        alert('파일 업로드 중 오류가 발생했습니다');
      }
    } else {
      console.log('음원 파일 없음');
      alert('음원 파일이 존재하지 않습니다');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        <Image source={{uri: artworkUrl}} style={styles.artworkImage} />
        {/* <Button
              title={isPlaying ? 'Stop Music' : 'Play Music'}
              onPress={isPlaying ? stopMusic : playMusic}
              style={styles.button}
            /> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={isPlaying ? stopMusic : playMusic}
            style={styles.button}>
            <Text style={styles.buttonText}>{isPlaying ? '완료' : '시작'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.lyricsContainer}>
        <Text style={styles.lyrics}>{lyrics}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAEAF4',
  },
  centeredContent: {
    alignItems: 'center',
  },
  artworkImage: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 10,
    marginTop: 60,
    marginBottom: -30,
  },
  buttonContainer: {
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 30,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#202B8F',
    padding: 7,
    width: 150,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    letterSpacing: -1,
    lineHeight: 22,
    marginTop: 1,
    textAlign: 'center', // Center the text horizontally
  },
  lyricsContainer: {
    maxHeight: 500,
  },
  lyrics: {
    fontSize: 15,
    color: 'black',
    letterSpacing: 0,
    lineHeight: 40,
    marginTop: 2,
    textAlign: 'center',
  },
});

export default Karaoke;
