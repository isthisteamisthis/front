import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Image, Flat} from 'react-native';

function Header({username}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}></Text>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
}

function Content({id, username, averageScore, introduction}) {
  // return (
  // <View style={styles.content}>
  //   <Text style={styles.contentText}></Text>
  //   <Text style={styles.label}>
  //     {username} 님의 평균 점수 | {averageScore}
  //   </Text>
  //   <Text style={styles.label}>
  //     자기소개
  //     {introduction}
  //   </Text>
  // </View>
  // );
}

function Footer({onLogoutPress}) {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}></Text>
      <Button title="로그아웃" onPress={onLogoutPress} />
    </View>
  );
}

export default function MyPage() {
  const [userInfo, setUserInfo, username] = useState({
    username: 'raxchaz',
    id: 'rachaz',
    averageScore: 100,
    introduction: '안녕하세요, 오늘은',
  });

  const handleLogout = () => {
    // 로그아웃 로직이 들어갈 공간!
  };

  return (
    <View style={styles.container}>
      <Header username={userInfo.id} />
      <Content
        id={userInfo.id}
        username={userInfo.username}
        averageScore={userInfo.averageScore}
        introduction={userInfo.introduction}
      />
      <Footer onLogoutPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 0,
  },
  header: {
    // backgroundColor: 'lightgray',
    padding: 16,
  },
  username: {
    fontSize: 30,
    letterSpacing: -1.5,
    fontWeight: '800',
    marginTop: -30,
  },
  content: {
    // backgroundColor: 'lightgray',
    padding: 16,
    marginTop: -330,
  },
  contentText: {
    marginTop: -70,
    fontSize: 24,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 20,
    marginTop: 10,
    letterSpacing: -2,
  },
  footer: {
    padding: 16,
  },
  footerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {},
});
