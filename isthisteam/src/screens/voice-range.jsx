import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audioRecorderPlayer = new AudioRecorderPlayer();

export default function VoiceRange() {
  const [recordTime, setRecordTime] = useState('00:00');
  const [recordedFilePath, setRecordedFilePath] = useState(null);

  const onStartRecord = async () => {
    try {
      await audioRecorderPlayer.startRecorder();
      audioRecorderPlayer.addRecordBackListener((e) => {
        setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
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
        const apiUrl = 'http://10.0.2.2:8080/api/perfect-scores';
        // const apiUrl = 'http://10.0.2.2:8080/api/max-voice-range';

        const formData = new FormData();
        formData.append('perfect-score', {
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
        } else {
          console.error('실패');
        }
      } catch (error) {
        console.error('에러: ', error);
      }
    } else {
      console.log('음원 파일 없음');
    }
  };

  return (
    <View>
      <Text>음역대 측정!</Text>
      <Text>{recordTime}</Text>
      <Button title="시작" onPress={() => onStartRecord()}>가장 높은 음을 내주세요!</Button>
      <Button title="완료" onPress={() => onStopRecord()}>완료</Button>
      <Button title="전송" onPress={() => sendFileToServer()}>Send Recording to Server</Button>
    </View>
  );
}
