import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const MessageDetail = ({route, navigation}) => {
  const {message} = route.params;

  const handleReplyPress = () => {
    navigation.navigate('ReplyMessage', {originalMessage: message});
  };

  const handleViewSentMessages = () => {
    navigation.navigate('SentMessages'); // 내가 보낸 쪽지 목록으로 이동하는 내비게이션
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>쪽지 상세 내용</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.senderName}>보낸 사람: {message.sender}</Text>
        <Text style={styles.subject}>제목: {message.subject}</Text>
        <Text style={styles.date}>날짜: {message.date}</Text>
        <Text style={styles.messageText}>{message.message}</Text>
      </View>
      {/* <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>뒤로 가기</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.replyButton} onPress={handleReplyPress}>
        <Text style={styles.replyButtonText}>답장하기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewSentMessagesButton}
        onPress={handleViewSentMessages} // 내가 보낸 쪽지 목록으로 이동하는 버튼
      >
        <Text style={styles.viewSentMessagesButtonText}>
          내가 보낸 쪽지 목록
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F5EB',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    letterSpacing: -1,
  },
  replyButton: {
    backgroundColor: '#0067FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  replyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
  viewSentMessagesButton: {
    backgroundColor: '#0067FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  viewSentMessagesButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
  messageContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subject: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    letterSpacing: -1,
  },
  date: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 16,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 24,
  },
  // backButton: {
  //   marginTop: 16,
  //   alignSelf: 'flex-start',
  // },
  // backButtonText: {
  //   color: '#0067FF',
  //   fontSize: 16,
  //   fontWeight: 'bold',
  //   marginLeft: 5,
  // },
});

export default MessageDetail;
