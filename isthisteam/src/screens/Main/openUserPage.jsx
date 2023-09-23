import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OpenUserPage = () => {
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  const route = useRoute();
  const { userNo } = route.params;

  useEffect(() => {
    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = async () => {
      try {
        // AsyncStorage에서 jwtToken을 가져옵니다.
        const jwtToken = await AsyncStorage.getItem('jwtToken');

        // 사용자 정보를 가져오는 API 요청
        const response = await fetch(`http://10.0.2.2:8080/my-page/${userNo}`, {
          headers: {
            Authorization: `${jwtToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const userData = await response.json();
        setUser(userData.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserInfo();
  }, [userNo]);

  const onPress = () => {
    navigation.navigate('SendMessage', { userNo });
  };

  const onPress1 = () => {
    navigation.navigate('Mainpage');
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/userrr.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>{user?.nickname}</Text>
      <Text style={styles.int}>{user?.nickname}님의 자기소개</Text>
      <View style={styles.userIntroductionContainer}>
        <Text style={styles.userIntroduction}>{user.userInfo}</Text>
      </View>
      <Text style={styles.int}>{user?.nickname}님의 음역대</Text>
      <View style={styles.textContainer}>
      <Text style={styles.voiceRange}>{user?.maxOctave} {user?.maxNote}</Text>
        <Text style={styles.voiceRange}>{user?.minOctave} {user?.minNote}</Text>
      </View>
      <View style={styles.additionalTextContainer}>
        <Text style={styles.int}>{user?.nickname}님의 평균 점수</Text>
        <Text style={styles.score}>{user.avgScore}</Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>쪽지 보내기</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button1}
        onPress={onPress1}>
        <Text style={styles.text2}>메인으로</Text>
      </TouchableOpacity>
      <FlatList
        data={user.recommendSongs}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF4',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    marginTop: 50,
    paddingTop: -7,
    width: 100,
    height: 30,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#000',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#EAEAF4',
    marginHorizontal: 'auto',
  },
  button1: {
    marginTop: 5,
    paddingTop: -7,
    width: 100,
    height: 30,
    textAlign: 'center',
    borderRadius: 5,
    borderColor: '#000',
    backgroundColor: '#000',
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 'auto',
  },
  text: {
    color: '#000',
    marginTop: 2.5,
    fontSize: 16,
    letterSpacing: -1,
    fontWeight: '900',
  },
  text2: {
    color: '#fff',
    marginTop: 1,
    fontSize: 16,
    letterSpacing: -1,
    fontWeight: '900',
  },
  name: {
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    marginTop: -10,
  },
  int: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -15,

    letterSpacing: -1,
    color: 'gray',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: 30,
  },
  userIntroductionContainer: {
    backgroundColor: '#DCDDED',
    marginTop: 30,
    marginBottom: 30,
    width: 350,
    height: 100,
    // borderWidth: 1,
    alignItems: 'center',
    // borderColor: 'lightgray',
    borderRadius: 5,
  },
  score: {
    marginTop: 20,
    marginLeft: 24,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#464646',
    fontSize: 25,
  },
  userIntroduction: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    margin: 10,
    letterSpacing: -1,
  },
  textContainer: {
    backgroundColor: '#DCDDED',
    marginTop: 30,
    marginBottom: 30,
    width: 350,
    height: 60,
    // borderWidth: 1,
    alignItems: 'center',
    // borderColor: 'lightgray',
    borderRadius: 5,
    flexDirection: 'row',
  },
  voiceRange: {
    // marginRight: 50,
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginLeft: 62,
    marginBottom: 5,
    letterSpacing: -1,
  },
  additionalText: {
    marginRight: 230,
    marginTop: 20,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '800',
  },
});

export default OpenUserPage;
