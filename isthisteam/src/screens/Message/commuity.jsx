import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Community = ({navigation}) => {
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

  useEffect(() => {
    // AsyncStorage에서 jwtToken을 가져옵니다.
    AsyncStorage.getItem('jwtToken').then(jwtToken => {
      if (!jwtToken) {
        throw new Error('JWT Token not found');
      }

      // API를 호출하여 메시지 목록을 가져옵니다.
      return fetch('http://10.0.2.2:8080/messages/received', {
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
        onPress={() => navigation.navigate('messageDetail', {message: item})}>
        <Text style={styles.senderName}>{item.sender}</Text>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>쪽지 목록</Text> */}
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper1.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>나의 쪽지함</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9F1',
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
    backgroundColor: '#FBD3A1',
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

export default Community;
