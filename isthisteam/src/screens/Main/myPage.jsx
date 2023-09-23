import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState(null);
  const [name, setName] = useState('Sui');
  const [userIntroduction, setUserIntroduction] = useState(
    'hello! I am so-and-so. \n My hobby is hobby and my specialty is sleeping',
  );
  const [voiceHighRange, setVoiceHighRange] = useState('3 octaves la');
  const [voiceRowRange, setVoiceRowRange] = useState('2 octaves me');
  const [score, setScore] = useState('83.9');
  const navigation = useNavigation();

  const goToPostDetails = (postNo) => {
    navigation.navigate('PostDetail', { postNo });
  };

  useEffect(() => {
    try {
      // AsyncStorage에서 jwtToken을 가져옵니다.
      AsyncStorage.getItem('jwtToken')
        .then((jwtToken) => {
          if (!jwtToken) {
            throw new Error('JWT Token not found');
          }
          console.log(jwtToken)
          return fetch('http://10.0.2.2:8080/my-page', {
            method: 'GET',
            headers: {
              Authorization: `${jwtToken}`,
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((responseData) => {
              setData(responseData.data);
              console.log(responseData.data);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        })
        .catch((error) => {
          console.error('Error fetching JWT token:', error);
        });
    } catch (error) {
      console.error('Error in useEffect:', error);
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/userrr.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>{data?.nickname}</Text>
      <Text style={styles.int}>{data?.nickname}의 자기소개</Text>
      <View style={styles.userIntroductionContainer}>
        <Text style={styles.userIntroduction}>{data?.userInfo}</Text>
      </View>
      <Text style={styles.int}>{data?.nickname}의 음역대</Text>
      <View style={styles.textContainer}>
        <Text style={styles.voiceRange}>{data?.maxOctave} {data?.maxNote}</Text>
        <Text style={styles.voiceRange}>{data?.minOctave} {data?.minNote}</Text>
      </View>
      <View style={styles.additionalTextContainer}>
        <Text style={styles.int}>{data?.nickname}의 게시글</Text>
      </View>
      <FlatList
        data={data?.postList}
        keyExtractor={(item) => item.postNo.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <View style={styles.additionalTextContainer}>
        <Text style={styles.int}>{data?.nickname}의 평균 점수</Text>
        <Text style={styles.score}>{data?.avgScore}</Text>
      </View>

      <FlatList
        data={data?.perfectSongList}
        keyExtractor={(item) => item.perfecSongNo.toString()}
        renderItem={({ item }) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </ScrollView>
  );
};

function PostItem({ post }) {
  const navigation = useNavigation();

  const goToPostDetails = (postNo) => {
    navigation.navigate('PostDetail', { postNo });
  };

  return (
    <View style={styles.containerofpost}>
      <Text style={styles.additionalText} onPress={() => goToPostDetails(post.postNo)}>
        {post.title}
      </Text>
    </View>
  );
}

function SongItem({ song }) {
  return (
    <View style={styles.containerofsong}>
      <Image
        source={{ uri: song.imagFile }}
        style={styles.imageofpost}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAEAF4',
    alignItems: 'center',
    padding: 20,
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
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  voiceRange: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
    marginLeft: 62,
    marginBottom: 5,
    letterSpacing: -1,
  },
  additionalText: {
    marginLeft: 10,
    marginRight: 200,
    marginTop: 20,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '800',
  },
  containerofpost: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  imageofpost: {
    width: 100,
    height: 100,
  },
});

export default MyPage;
