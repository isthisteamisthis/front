import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // useNavigation 추가
import AsyncStorage from '@react-native-async-storage/async-storage';

const SentMessages = () => {
  const [messages, setMessages] = useState([]);
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

  const navigation = useNavigation(); // useNavigation을 사용하여 navigation 객체 가져오기

  useEffect(() => {
    // AsyncStorage에서 jwtToken을 가져옵니다.
    AsyncStorage.getItem('jwtToken').then(jwtToken => {
      if (!jwtToken) {
        throw new Error('JWT Token not found');
      }

      console.log(`${jwtToken}`);
      // API를 호출하여 메시지 목록을 가져옵니다.
      return fetch('http://10.0.2.2:8080/messages/sent', {
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
          setMessages(responseData.data);
        })
        .catch(error => {
          console.error('Error fetching message list:', error);
        });
    });
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() =>
          navigation.navigate('sentMessageDetail', {messageNo: item.messageNo})
        }>
        <Text style={styles.receiverName}>
          받은 사람 : {item.getUserNickname}
        </Text>
        <Text style={styles.subject}>
          {item.content.length > 20
            ? item.content.substring(0, 20) + '...'
            : item.content}
        </Text>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper1.png')}
          style={styles.header}
        />
        <Text style={styles.sendtext1}>내가 보낸 쪽지함</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.messageNo.toString()}
      />
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
    marginLeft: 185,
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
  messageItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    letterSpacing: -1,
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: -1,
    color: 'black',
  },
  subject: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    letterSpacing: -1,
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  sendtext: {
    marginTop: -5,
    marginLeft: 142,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '600',
  },
});

export default SentMessages;
