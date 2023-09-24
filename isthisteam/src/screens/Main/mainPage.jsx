/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
  Alert,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModalDropdown from 'react-native-modal-dropdown';
import Swiper from 'react-native-swiper';
import BottomTab from '../../components/bottomTab';

import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 추가

const Stack = createStackNavigator();

function MainPage({navigation}) {
  const [recommendSongs, setRecommendSongs] = useState([]);
  const [songDataList, setSongDataList] = useState([]);

  const MoreButtonPress = () => {
    navigation.navigate('recSongList');
  };

  const GetRecommendSong = async () => {
    const apiUrl = 'http://10.0.2.2:8080/song-recommend';

    try {
      // AsyncStorage에서 jwtToken을 가져옵니다.
      const jwtToken = await AsyncStorage.getItem('jwtToken');

      if (!jwtToken) {
        throw new Error('JWT Token not found');
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // AsyncStorage에서 가져온 토큰을 사용합니다.
          Authorization: `${jwtToken}`,
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

      setRecommendSongs(postsData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const GetSongDataList = async () => {
    const apiUrl = 'http://10.0.2.2:8080/song-data';

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();

      setSongDataList(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    GetRecommendSong();
    GetSongDataList();
  }, []); // useEffect 두 번째 인수를 빈 배열로 설정하여 한 번만 실행

  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert(
  //       '앱 종료',
  //       '앱을 종료하시겠습니까?',
  //       [
  //         {
  //           text: '취소',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {
  //           text: '확인',
  //           onPress: () => {
  //             BackHandler.exitApp();
  //           },
  //         },
  //       ],
  //       {cancelable: false},
  //     );

  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => {
  //     backHandler.remove();
  //   };
  // }, []);

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
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>Ai 맞춤 추천곡</Text>
          {/* <TouchableOpacity onPress={MoreButtonPress}>
            <Text style={styles.moreButton}>더보기</Text>
          </TouchableOpacity> */}
        </View>

        <FlatList
          data={recommendSongs}
          keyExtractor={item => item.id}
          renderItem={({item}) => <PostItem post={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />

        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>100점 도전! 노래방</Text>
        </View>

        <FlatList
          data={songDataList}
          keyExtractor={item => item.songDataNo.toString()}
          renderItem={({item}) => (
            <PostItem post={{imageUrl: item.imgUrl, title: item.songName}} />
          )}
          // renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        />
      </ScrollView>
      <BottomTab navigation={navigation} />
    </View>
  );
}

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
  bannercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
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
