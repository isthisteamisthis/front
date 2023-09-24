import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SentMessageDetail = ({route, navigation}) => {
  // navigation prop 제거
  const {messageNo} = route.params;
  console.log(`${messageNo}`);
  const [message, setMessage] = useState(null);

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
    console.log(`${messageNo}`);
    // AsyncStorage에서 JWT 토큰을 가져오는 함수
    AsyncStorage.getItem('jwtToken').then(jwtToken => {
      if (!jwtToken) {
        throw new Error('JWT Token not found');
      }
      return fetch(`http://10.0.2.2:8080/messages/${messageNo}`, {
        method: 'GET',
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
          setMessage(responseData.data);
        })
        .catch(error => {
          console.error('Error fetching message content:', error);
        });
    });
  }, [messageNo]);

  const handleReplyPress = () => {
    navigation.navigate('ReplyMessage', {originalMessage: message});
  };

  const handleViewSentMessages = () => {
    navigation.navigate('SentMessages');
  };

  const handlePress = () => {
    navigation.navigate('openUserPage');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper1.png')}
          style={styles.header}
        />
        <Text style={styles.sendtext1}>보낸 쪽지 상세보기</Text>
      </View>
      {message ? (
        <>
          <View style={styles.subContainer}>
            <Text style={styles.subject}>
              {message.content.length > 20
                ? message.content.substring(0, 20) + '...'
                : message.content}
            </Text>
          </View>
          <View style={styles.messageContainer}>
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.receiverName}>
                받은 사람 : {message.getUserNickname}
              </Text>
            </TouchableOpacity>
            <Text style={styles.date}>{formatDate(message.date)}</Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={styles.messageText}>{message.content}</Text>
          </View>
          <TouchableOpacity
            style={styles.viewSentMessagesButton}
            onPress={handleViewSentMessages}>
            <Text style={styles.viewSentMessagesButtonText}>
              내가 보낸 쪽지 목록
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
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
    marginLeft: 165,
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
  sendtext: {
    color: 'black',
  },
  detail: {
    marginTop: 10,
    marginLeft: -20,
    width: 400,
    height: 600,
  },
  replyButton: {
    borderWidth: 1,
    borderColor: '#4D55A5',
    padding: 8,
    borderRadius: 8,
    marginTop: -15,
    marginLeft: 230,
    width: 130,
    height: 40,
  },
  replyButtonText: {
    color: '#4D55A5',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
  viewSentMessagesButton: {
    borderWidth: 1,
    borderColor: '#4D55A5',
    backgroundColor: '#4D55A5',
    borderRadius: 8,
    padding: 8,
    marginTop: 10,
    marginLeft: 230,
    width: 130,
    height: 40,
  },
  viewSentMessagesButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
  messageContainer: {
    paddingLeft: 15,
    paddingTop: 15,
    marginLeft: -5,
  },
  subContainer: {
    paddingLeft: 15,
    paddingTop: 15,
    marginTop: 20,
    marginLeft: -10,
    marginBottom: -15,
  },
  detailContainer: {
    paddingTop: 15,
    padding: 25,
    marginTop: 10,
    backgroundColor: '#EAEAF4',
    marginBottom: 50,
    borderRadius: 5,
  },
  receiverName: {
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -1,
  },
  subject: {
    fontSize: 20,
    marginLeft: 5,
    fontWeight: '900',
    marginBottom: 20,
    letterSpacing: -1.5,
    color: 'black',
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
    marginTop: -10,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    fontWeight: '100',
    color: 'black',
    letterSpacing: -1,
  },
});

export default SentMessageDetail;
