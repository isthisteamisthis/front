import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// 가짜 데이터
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

const Community = ({navigation}) => {
  const [messages] = useState(fakeMessages);

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
      <Image
        source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
        style={styles.header}
      />
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
  header: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 170,
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
});

export default Community;
