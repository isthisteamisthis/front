import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
  BackHandler,
} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function VoiceRange({navigation}) {
  const [recordTime, setRecordTime] = useState('00:00');
  const [recordedFilePath, setRecordedFilePath] = useState(null);

  const onPress03 = () => {
    navigation.navigate('Mainpage');
  };
  const onPress00 = () => {
    onStartRecord();
  };
  const onPress01 = () => {
    onStopRecord();
  };
  const onPress02 = () => {
    sendFileToServer();
  };

  const onStartRecord = async () => {
    try {
      await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener(e => {
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        );
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onStopRecord = async () => {
    try {
      const result = await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();
      setRecordedFilePath(result);
      console.log('파일경로:', result);
    } catch (error) {
      console.error(error);
    }
  };

  const sendFileToServer = async () => {
    if (recordedFilePath) {
      try {
        // const apiUrl = 'http://10.0.2.2:8080/api/perfect-scores';
        const apiUrl = 'http://10.0.2.2:8080/api/max-voice-range';

        const formData = new FormData();
        formData.append('voice-range', {
          uri: 'file://' + recordedFilePath,
          name: 'test.wav',
          type: 'audio/wav',
        });

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          body: formData,
        });

        if (response.ok) {
          console.log('성공!');
          alert('파일 업로드를 성공했습니다');
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
    <View style={styles.pageContainer}>
      <Text style={styles.title}>{`높은 음의
음역대 측정을
진행하겠습니다`}</Text>
      <Text style={styles.title01}>{recordTime}</Text>
      <Text
        style={
          styles.title00
        }>{`본인이 낼 수 있는 가장 높은 음을 내주세요`}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button02}
        onPress={onPress00}>
        <Text style={styles.text01}>녹음 시작</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button02}
        onPress={onPress01}>
        <Text style={styles.text01}>녹음 중지</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button02}
        onPress={onPress02}>
        <Text style={styles.text01}>전송</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button03}
        onPress={onPress03}>
        <Text style={styles.text02}>입장하기</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#EAEAF4',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginTop: -20,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '100',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 26,
    alignContent: 'center',
  },
  title00: {
    fontSize: 14,
    letterSpacing: -0.9,
    textAlign: 'center',
    marginBottom: 40,
  },
  title01: {
    fontSize: 30,
    letterSpacing: -0.5,
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 16,
  },
  recordTime: {
    fontSize: 18,
    marginBottom: 16,
  },
  button02: {
    backgroundColor: '#202B8F',
    // paddingTop: -5,
    width: 130,
    height: 30,
    padding: 1,
    textAlign: 'center',
    marginLeft: 3,
    borderRadius: 7,
    margin: 2,
    alignItems: 'center',
    // borderWidth: 1,
  },
  button03: {
    marginTop: 40,
    paddingTop: -7,
    width: 100,
    height: 30,
    textAlign: 'center',
    marginLeft: 3,
    borderRadius: 7,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#202B8F',
    backgroundColor: '#Fff',
  },
  text01: {
    marginTop: 2,
    color: 'white',
    fontWeight: '800',
    letterSpacing: -1,
  },
  text02: {
    marginTop: 2,
    color: '#202B8F',
    fontWeight: '800',
    letterSpacing: -1,
  },
});
