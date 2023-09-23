import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const MessageDetail = ({route, navigation}) => {
  const {message} = route.params;

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
          source={require('../../../android/app/assets/images/paper1.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>받은 쪽지 상세보기</Text>
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subject}>{message.subject}</Text>
      </View>
      <View style={styles.messageContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.senderName}>{message.sender}</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{message.date}</Text>
      </View>
      <View style={styles.detailContainer}>
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
        onPress={handleViewSentMessages}>
        <Text style={styles.viewSentMessagesButtonText}>
          내가 보낸 쪽지 목록
        </Text>
      </TouchableOpacity>
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
    marginLeft: 165,
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
    // backgroundColor: '#0067FF',
    borderWidth: 1,
    borderColor: '#F7A642',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    padding: 8,
    borderRadius: 8,
    marginTop: -15,
    marginLeft: 230,
    width: 130,
    height: 40,
  },
  replyButtonText: {
    color: '#F7A642',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
  viewSentMessagesButton: {
    borderWidth: 1,
    borderColor: '#F7A642',
    backgroundColor: '#F7A642',
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
  // message: {
  //   marginTop: 20,
  //   color: 'black',
  // },
  messageContainer: {
    paddingLeft: 15,
    paddingTop: 15,
    marginLeft: -5,
    // backgroundColor: '#FFEFE8',
    // borderWidth: 1,
    // borderColor: '#FF874E',
    // marginBottom: 30,
  },
  subContainer: {
    paddingLeft: 15,
    paddingTop: 15,
    marginTop: 20,
    marginLeft: -10,
    marginBottom: -15,
    // backgroundColor: '#ff5403',
    // borderWidth: 1,
    // borderColor: '#FF874E',
    // marginBottom: 30,
  },
  detailContainer: {
    paddingTop: 15,
    padding: 25,
    marginTop: 10,
    backgroundColor: '#FDE4C6',
    marginBottom: 50,
    borderRadius: 5,
    // marginBottom: 30,
  },
  senderName: {
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
