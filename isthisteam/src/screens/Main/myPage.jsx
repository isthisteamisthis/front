import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const MyPage = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('수이');
  const [userIntroduction, setUserIntroduction] = useState(
    '안녕하세요! 저는 누구누구입니다. \n 취미는 하비 특기는 잠자기',
  ); // 자기소개를 마이페이지에서 할 필요가 있는가? 노출이 안 되는데
  const [voiceHighRange, setVoiceHighRange] = useState('3옥타브 라');
  const [voiceRowRange, setVoiceRowRange] = useState('2옥타브 미');
  const navigation = useNavigation(); // 내비게이션 객체 가져오기

  useEffect(() => {
    // 사용자 정보를 가져오는 로직 (API 호출 또는 데이터베이스 쿼리)을 구현합니다.
    // 가져온 정보를 상태 변수에 설정합니다.
    // 예시:
    // fetchUserInfo().then(data => {
    //   setUserName(data.name);
    //   setUserIntroduction(data.introduction);
    //   setVocalRange(data.vocalRange);
    // });
  }, []);

  // 개인 정보 수정 페이지로 이동
  // const goToEditProfile = () => {
  //   navigation.navigate('EditProfileModal');
  // };

  const GetRecommendSong = async () => {
    const apiUrl = 'http://192.168.0.42:8080/song-recommend';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //토큰 받아서 넣는 로직 추가
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMDI6MDc5NjcyIiwiaWF0IjoxNjk1MTEyMjU3LCJleHAiOjE2OTUxOTg2NTd9.hiQteBEnvqnCY70fUdm_Qu-ZyN-8kERKx2FNpUYBpI0`,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const postsData = Object.keys(data.data.recommendSongs).map(key => ({
        imageUrl: data.data.recommendSongs[key],
        title: key,
      }));

      setPosts(postsData);
    } catch (error) {
      // console.error('Error:', error);
    }
  };

  useEffect(() => {
    GetRecommendSong();
  });
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../../android/app/assets/images/userrr.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.int}>{name}님의 자기소개</Text>
      <View style={styles.userIntroductionContainer}>
        <Text style={styles.userIntroduction}>{userIntroduction}</Text>
      </View>
      <Text style={styles.int}>{name}님의 음역대</Text>
      <View style={styles.textContainer}>
        <Text style={styles.voiceRange}>{voiceHighRange}</Text>
        <Text style={styles.voiceRange}>{voiceRowRange}</Text>
      </View>
      <View style={styles.additionalTextContainer}>
        <Text style={styles.int}>{name}님의 추천곡 몰아보기</Text>
        {/* <Text style={styles.additionalText}>내 추천 곡 몰아보기</Text> */}
      </View>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />

      {/* <Button
        title="프로필 수정"
        onPress={goToEditProfile} // 수정 버튼을 누를 때 개인 정보 수정 페이지로 이동
      /> */}
    </ScrollView>
  );
};

function PostItem({post}) {
  return (
    <View style={styles.containerofpost}>
      <Image
        source={{uri: post.imageUrl}}
        style={styles.imageofpost}
        showsHorizontalScrollIndicator={false}
      />
      <Text style={styles.titleofpost}>{post.title}</Text>
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
    // borderWidth: 1,
    alignItems: 'center',
    // borderColor: 'lightgray',
    borderRadius: 5,
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

export default MyPage;
