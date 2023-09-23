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
import Swiper from 'react-native-swiper';
import BottomTab from '../../components/bottomTab';
import Banner from '../../components/banner';

const Stack = createStackNavigator();

function MainPage({navigation}) {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('수이');

  // const handleMoreButtonPress = () => {
  //   navigation.navigate('songList');
  // };

  const MoreButtonPress = () => {
    navigation.navigate('recSongList');
  };

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
    <View style={styles.container}>
      <View style={styles.bannercontainer}>
        <Swiper style={styles.bannerSwiper} autoplay={true}>
          <Image
            source={{
              uri: 'https://postfiles.pstatic.net/MjAyMzA5MjNfMTcy/MDAxNjk1NDQ5NjU2NjA0.agiD4NTam8EMOIdnMaBFWmWpGp6kfSzoU-Tdzl_Qgc4g.VBbqckblmfyoA-ADie8hre4Hma1lvxAnBBBSKQGyspwg.JPEG.rachaz/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-001_(2).jpg?type=w966',
            }}
            style={styles.bannerImage}
          />
          <Image
            source={{
              uri: 'https://postfiles.pstatic.net/MjAyMzA5MjNfMTI3/MDAxNjk1NDQ5OTExNTYz.EsFnnMm_bBfaHKIBmUPrB4uV_DZQUlLFM0h1F3U3h4wg.roGf3E0KrtbdMD9CbqviF2MMdEN9L9odDTk398VeiRcg.JPEG.rachaz/%EC%A0%9C%EB%AA%A9%EC%9D%84_%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-002_(6).jpg?type=w966',
            }}
            style={styles.bannerImage}
          />
          <Image
            source={{
              uri: 'https://postfiles.pstatic.net/MjAyMzA5MjNfMjg3/MDAxNjk1NDUwNDE4MDEz.erIMyWDYYjfaP-fDrY-JEhe8CWQTIYvcggxvgsRqiTcg.Pbr6TPnKFyz3AlqmnN0P1ZLub6s9SBCHjZRMbm7By7Mg.PNG.rachaz/%EC%A0%9C%EB%AA%A9%EC%9D%84-%EC%9E%85%EB%A0%A5%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94_-003_(1).png?type=w966',
            }}
            style={styles.bannerImage}
          />
        </Swiper>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <Text style={styles.open}>환영합니다, {name}님</Text> */}
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>Ai 맞춤 추천곡</Text>
          <TouchableOpacity onPress={MoreButtonPress}>
            <Text style={styles.moreButton}>더보기</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PostItem post={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />

        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>퍼펙트 스코어</Text>
          {/* <TouchableOpacity onPress={handleMoreButtonPress}>
            <Text style={styles.moreButton}>더보기</Text>
          </TouchableOpacity> */}
        </View>

        <FlatList
          data={posts1}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PostItem post={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </ScrollView>
      <BottomTab navigation={navigation} />
    </View>
  );
}

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
        horizontal={true}
      />
      <Text style={styles.titleofpost}>{post.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bannercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  // open: {
  //   fontSize: 22,
  //   letterSpacing: -1.5,
  //   marginLeft: 90,
  //   marginTop: 10,
  //   marginBottom: 20,
  //   color: 'black',
  //   // fontWeight: '100',
  // },
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
    borderRadius: 5,
    marginLeft: -15,
  },
  titleofpost: {
    marginTop: 10,
    marginRight: 18,
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: -1,
  },
  // additionalText: {
  //   color: 'black',
  //   fontSize: 16,
  //   width: 150,
  //   fontWeight: '900',
  //   marginRight: 185,
  //   marginTop: 40,
  //   marginBottom: 10,
  //   letterSpacing: -1.5,
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#EAEAF4',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginBottom: 20,
    marginTop: 20,
  },
  text00: {
    color: 'white',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -1,
  },
  // text01: {
  //   color: 'white',
  //   fontSize: 16,
  //   fontWeight: '900',
  //   textAlign: 'center',
  //   letterSpacing: -1,
  //   // backgroundColor: '#4F709C',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 5,
  //   padding: 1,
  // },
  additionalTextContainer: {
    // width: 1000,
    flexDirection: 'row', // 가로로 정렬
    alignItems: 'center', // 수직 가운데 정렬
  },
  additionalText: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 15,
    marginRight: 215, // 텍스트 사이 간격 조절
    color: 'black',
    letterSpacing: -1,
    fontWeight: '800',
  },
  moreButton: {
    letterSpacing: -1,
  },
  // moreButton: {
  //   marginLeft: 270,
  //   color: 'black',
  //   fontWeight: '800',
  //   letterSpacing: -1,
  // },
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
  bannerSwiper: {
    height: 400,
    width: 1920,
    borderRadius: 5,
  },
  bannerImage: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
});

export default MainPage;
