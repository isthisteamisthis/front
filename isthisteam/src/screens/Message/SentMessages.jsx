import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const SentMessages = ({navigation}) => {
  const [sentMessages, setSentMessages] = useState([]);

  // 내가 보낸 쪽지 목록을 가져오는 함수
  const fetchSentMessages = async () => {
    // 가짜 데이터를 생성하여 sentMessages 상태 변수에 설정합니다.
    const fakeSentMessages = [
      {id: 1, title: '안녕하세요', date: '2023-09-24'},
      {id: 2, title: '쪽지 테스트', date: '2023-09-23'},
      {id: 3, title: '더미 쪽지', date: '2023-09-22'},
    ];

    setSentMessages(fakeSentMessages);
  };

  useEffect(() => {
    // 화면이 로드될 때 내가 보낸 쪽지 목록을 가져옵니다.
    fetchSentMessages();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.messageItem}
        onPress={() =>
          navigation.navigate('SentMessageDetail', {message: item})
        }>
        <Text style={styles.messageTitle}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>내가 보낸 쪽지 목록</Text>
      <FlatList
        data={sentMessages}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F5EB',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: -1,
  },
  messageItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SentMessages;
