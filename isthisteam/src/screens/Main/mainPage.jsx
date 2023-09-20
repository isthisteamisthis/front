import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Flatlist,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModalDropdown from 'react-native-modal-dropdown';
import BottomTab from '../../components/bottomTab';
import Banner from '../../components/banner';

const Stack = createStackNavigator();

function MainPage({navigation}) {
  const [posts, setPosts] = useState([]);

  const GetRecommendSong = async () => {
    const apiUrl = 'http://192.168.0.42:8080/song-recommend';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //토큰 받아서 넣는 로직 추가
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMDI2MDc5NjcyIiwiaWF0IjoxNjk1MTEyMjU3LCJleHAiOjE2OTUxOTg2NTd9.hiQteBEnvqnCY70fUdm_Qu-ZyN-8kERKx2FNpUYBpI0`,
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
  }, []);

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button01}
          onPress={onPress1}>
          <Text style={styles.text00}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button01}
          onPress={onPress2}>
          <Text style={styles.text00}>마이페이지</Text>
        </TouchableOpacity>
        <ModalDropdown
          options={['AI 커버 생성', '퍼펙트 스코어']}
          dropdownTextStyle={styles.dropdownText}
          dropdownStyle={styles.dropdownContainer}
          initialScrollIndex={null}
          onSelect={(index, value) => {
            if (value === 'AI 커버 생성') {
              navigation.navigate('AiCover');
            } else if (value === '퍼펙트 스코어') {
              navigation.navigate('PerfectScore');
            }
          }}>
          <Text style={styles.text01}>녹음하기</Text>
        </ModalDropdown>
      </View> */}
      <Banner
        title="Welcome to Our App"
        imageUrl="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTNfMTMz/MDAxNTk0NjMxNDM1MTg2.A5UfpkxCdV3CiPF8K6eR0QEc0U6vLSBsi0G-o13Ir8Eg.zbAD2wJV9NahMIKnk70Fln3z_SR7cVQfX01qG0S8jtMg.JPEG.ejunglestory/%EA%B9%80%EC%83%81%EC%9C%A4_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_Page_03.jpg?type=w800"
      />

      <Text style={styles.additionalText}>나의 곡 추천</Text>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />

      <Text style={styles.additionalText1}>퍼펙트 스코어</Text>

      <FlatList
        data={posts1}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostItem post={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
      <BottomTab navigation={navigation} />
    </View>
  );
}

// const posts = [
//   {
//     id: '1',
//     imageUrl:
//       'https://image.bugsm.co.kr/album/images/200/40713/4071363.jpg?version=20220330120007.0',
//     title: '사랑인가봐',
//   },
//   {
//     id: '2',
//     imageUrl:
//       'https://image.bugsm.co.kr/album/images/200/201547/20154722.jpg?version=20230601001519.0',
//     title: '모든 날 모든 순간',
//   },
//   {
//     id: '3',
//     imageUrl:
//       'https://image.bugsm.co.kr/album/images/200/4132/413209.jpg?version=20210203135508.0',
//     title: '너의 모든 순간',
//   },
//   {
//     id: '4',
//     imageUrl: 'https://image.bugsm.co.kr/album/images/1000/352/35269.jpg',
//     title: '사랑의 바보',
//   },
// ];

const posts1 = [
  {
    id: '1',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lgDdFxuBbDfgby2OiMBDvCLPSffJYmJvrA&usqp=CAU',
    title: 'NEVERMIND',
  },
  {
    id: '2',
    imageUrl:
      'https://image.newsis.com/2021/05/17/NISI20210517_0000747908_web.jpg',
    title: '해픈',
  },
  {
    id: '3',
    imageUrl:
      'https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900',
    title: 'THE BEATLES',
  },
  {
    id: '4',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLWgfdEEvzkbjn-aHGNi_q0ry7Hkbm-FXKjznlZhBag&s',
    title: '밤공기',
  },
];

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
  containerofpost: {
    flex: 1,
    margin: 15,
    marginTop: 5,
    alignItems: 'center',
  },
  image: {
    marginTop: -30,
    width: 400,
    height: 65,
  },
  imageofpost: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  titleofpost: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  additionalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginRight: 240,
    marginTop: 30,
    marginBottom: 10,
    letterSpacing: -1.5,
  },
  additionalText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginRight: 240,
    marginBottom: 10,
    marginLeft: 30,
    width: 100,
    marginTop: -60,
    letterSpacing: -1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F7F5EB',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 20,
    marginTop: 20,
  },
  button01: {
    backgroundColor: '#4F709C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  text00: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -1,
  },
  text01: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -1,
    backgroundColor: '#4F709C',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    padding: 1,
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -1,
  },
  dropdownContainer: {
    height: 80,
  },
});

export default MainPage;
