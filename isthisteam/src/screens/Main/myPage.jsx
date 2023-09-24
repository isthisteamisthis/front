import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
  BackHandler,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditProfileModal from './editProfileModal';

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

  const goToSongDetails = composeSongNo => {
    navigation.navigate('SongDetail', {composeSongNo});
  };

  useEffect(() => {
    try {
      // AsyncStorage에서 jwtToken을 가져옵니다.
      AsyncStorage.getItem('jwtToken')
        .then(jwtToken => {
          if (!jwtToken) {
            throw new Error('JWT Token not found');
          }
          console.log(jwtToken);
          return fetch('http://10.0.2.2:8080/my-page', {
            method: 'GET',
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMDE2OTM2MDEwIiwiaWF0IjoxNjk1MjUzMjg4LCJleHAiOjE2OTYxMTcyODh9.FYifxFUMtp7FY2NN1EIAyqbrP4tEIQ-hnPHuTQQBRfM`,
            },
          })
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then(responseData => {
              setData(responseData.data);
              console.log(responseData.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        })
        .catch(error => {
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
      <Text style={styles.int}>{data?.nickname}님의 자기소개</Text>
      <View style={styles.userIntroductionContainer}>
        <Text style={styles.userIntroduction}>{data?.userInfo}</Text>
      </View>
      <Text style={styles.int}>{data?.nickname}님의 음역대</Text>
      <View style={styles.textContainer}>
        <Text style={styles.voiceRange}>
          {data?.maxOctave} {data?.maxNote}
        </Text>
        <Text style={styles.voiceRange}>
          {data?.minOctave} {data?.minNote}
        </Text>
      </View>
      <View style={styles.additionalTextContaineravg}>
        <Text style={styles.int}>{data?.nickname}의 평균 점수</Text>
        <Text style={styles.score}>{data?.avgScore}</Text>
        <FlatList
          data={data?.composeSongList}
          keyExtractor={item => item.composeSongNo.toString()}
          renderItem={({item}) => <SongItem song={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <View style={styles.additionalTextContainer}>
          <Text style={styles.int}>{data?.nickname}님의 데모</Text>
        </View>
        <FlatList
          data={data?.composeSongList}
          keyExtractor={item => item.composeSongNo.toString()}
          renderItem={({item}) => <SongItem song={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
        <View style={styles.additionalTextContainer}>
          <Text style={styles.int}>{data?.nickname}의 평균 점수</Text>
          <Text style={styles.score}>{data?.avgScore}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

function SongItem({song}) {
  const navigation = useNavigation();

  const goToSongDetails = composeSongNo => {
    navigation.navigate('MyAiCoverDetail', {songNo: composeSongNo});
  };

  return (
    <View style={styles.containerofpost}>
      <Image
        source={{uri: song.imgFile}}
        style={styles.imageofpost}
        showsHorizontalScrollIndicator={false}
        onPress={() => goToSongDetails(song.composeSongNo)}
      />
      <Text
        style={styles.additionalText}
        onPress={() => goToSongDetails(song.composeSongNo)}>
        {song.title}
      </Text>
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
    marginTop: 20,
  },
  userIntroductionContainer: {
    backgroundColor: '#DCDDED',
    marginTop: 30,
    marginBottom: 10,
    width: 350,
    height: 50,
    borderRadius: 5,
  },
  score: {
    marginTop: 20,
    marginLeft: 23,
    fontWeight: '800',
    fontStyle: 'italic',
    color: '#464646',
    fontSize: 25,
    marginBottom: 30,
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
    marginBottom: 20,
    width: '100%',
    height: 50,
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
    textAlign: 'center',
    marginTop: 5,
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
    margin: 5,
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  modifyinfobtn: {
    borderWidth: 1,
    borderColor: '#202B8F',
    backgroundColor: '#DCDDED',
    borderRadius: 5,
    padding: 1,
    marginTop: 40,
    marginLeft: -10,
    width: 70,
    height: 24,
  },
  modifyinfoText: {
    color: '#202B8F',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: -1,
  },
});

export default MyPage;
