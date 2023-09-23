import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const ReplyMessage = ({route, navigation}) => {
  const {originalMessage} = route.params;
  const [replyMessage, setReplyMessage] = useState('');

  //   <TouchableOpacity onPress={MoreButtonPress}>
  //   <Text style={styles.moreButton}>더보기</Text>
  // </TouchableOpacity>

  const handleSendReply = () => {
    console.log('작성한 답장 내용:', replyMessage);
    navigation.navigate('SentMessages');
    const replyMessage = () => {
      setTimeout(() => {
        Alert.alert(
          '전송 완료',
          '답장 메시지가 성공적으로 전송되었습니다.',
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
      }, 2000);
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>답장하기</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.subject}>Re : {originalMessage.subject}</Text>
        <Text style={styles.senderName}>{originalMessage.sender}</Text>
        <Text style={styles.date}>{originalMessage.date}</Text>
        <Text style={styles.messageText}>{originalMessage.message}</Text>
      </View>
      <TextInput
        style={styles.replyInput}
        placeholder="답장을 작성하세요..."
        multiline={true}
        value={replyMessage}
        onChangeText={text => setReplyMessage(text)}
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSendReply}>
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
    marginLeft: 195,
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
  messageContainer: {
    marginTop: 30,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#FFF9F1',
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  sendtext: {
    marginTop: -5,
    marginLeft: 142,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '600',
  },
  subject: {
    fontSize: 20,
    marginLeft: 0,
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
  replyInput: {
    fontSize: 16,
    letterSpacing: -1,
    borderWidth: 1,
    borderColor: '#FBD3A1',
    padding: 15,
    marginVertical: 16,
    backgroundColor: 'white',
    minHeight: 10,
  },
  sendButton: {
    borderWidth: 1,
    borderColor: '#F7A642',
    backgroundColor: '#F7A642',
    borderRadius: 8,
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

export default ReplyMessage;
