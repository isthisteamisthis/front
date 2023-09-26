import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SendMessage = ({route, navigation}) => {
  const [message, setMessage] = useState('');
  const {userNo} = route.params;

  const handleSendMsg = async () => {
    try {
      // AsyncStorage에서 jwtToken을 가져옵니다.
      const jwtToken = await AsyncStorage.getItem('jwtToken');

      if (!jwtToken) {
        throw new Error('JWT Token not found');
      }

      const apiUrl = `http://10.0.2.2:8080/${userNo}/message`;

      // 메시지를 요청 body에 담습니다.
      const requestBody = {
        content: message,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${jwtToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // 성공적으로 메시지가 전송되었을 때 알림을 표시합니다.
      Alert.alert(
        '전송 완료',
        '메시지가 성공적으로 전송되었습니다.',
        [
          {
            text: '확인',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>쪽지보내기</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="메시지를 작성하세요..."
        multiline={true}
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendMsg}>
        <Text style={styles.sendButtonText}>전송</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#Fff',
    flex: 1,
    padding: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 189,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '800',
  },
  container1: {
    marginTop: -20,
    backgroundColor: '#EAEAF4',
    width: 500,
    marginLeft: -40,
    height: 100,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 205,
    width: 25,
    height: 25,
  },
  input: {
    marginTop: 50,
    fontSize: 16,
    letterSpacing: -1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 15,
    marginVertical: 16,
    backgroundColor: 'white',
    minHeight: 10,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: '#202B8F',
    backgroundColor: '#202B8F',
    borderRadius: 6,
    padding: 6,
    marginTop: 10,
    marginLeft: 310,
    width: 50,
    height: 38,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
});

export default SendMessage;
