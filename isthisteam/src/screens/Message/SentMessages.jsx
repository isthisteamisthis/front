import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const fakeMessages = [
  {
    id: '1',
    sender: 'sui',
    subject: '안녕하다!',
    date: '2023-09-25',
    message: '안녕하세요! 절 집에 보내주시겠어요?',
  },
  {
    id: '2',
    sender: 'Dylan',
    subject: '중요한 일정 안내',
    date: '2023-09-24',
    message: '오늘 진심 점심 뭐먹냐',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
  {
    id: '3',
    sender: 'Rachaz',
    subject: '주말 계획',
    date: '2023-09-23',
    message: '끝장나게 누워있기',
  },
];

const SentMessageDetail = ({navigation}) => {
  const [messages] = useState(fakeMessages);

  const onPress = () => {
    navigation.navigate('Mainpage');
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() =>
          navigation.navigate('sentMessageDetail', {message: item})
        }>
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
        <TouchableOpacity>
          <Image
            source={require('../../../android/app/assets/images/paper1.png')} // 이미지 경로를 설정합니다.
            style={styles.header}
            onPress={() => navigation.navigate('Mainpage')}
          />
        </TouchableOpacity>
        <Text style={styles.sendtext1}>내가 보낸 쪽지함</Text>
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
    backgroundColor: '#Fff',
    flex: 1,
    padding: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 175,
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

export default SentMessageDetail;
