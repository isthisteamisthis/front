/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModalDropdown from 'react-native-modal-dropdown';
import Swiper from 'react-native-swiper';
import BottomTab from '../../components/bottomTab';

import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage 추가

const Stack = createStackNavigator();

function MainPage({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('수이');

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

      const postsData = Object.keys(data.data.recommendSongs).map((key) => ({
        imageUrl: data.data.recommendSongs[key],
        title: key,
      }));

      setPosts(postsData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    GetRecommendSong();
  }, []); // useEffect 두 번째 인수를 빈 배열로 설정하여 한 번만 실행

  return (
    <View style={styles.container}>
      <View style={styles.bannercontainer}>
        <Swiper style={styles.bannerSwiper} autoplay={true}>
          <Image
            source={{
              uri: 'https://postfiles.pstatic.net/MjAyMzA5MjJfNzIg/MDAxNjk1MzU4NDA0NTM1.VpBL4qtiJXRFib0rhyQf3O4VCxrt-pILCUX6qtOSKFUg.iULJo4v35-LderCm5vPYYipBP4Th0wuuc1rY-cTRrSgg.PNG.rachaz/banner01.png?type=w966',
            }}
            style={styles.bannerImage}
          />
          <Image
            source={{
              uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIRERgRERUREREYGBERERERERERDxERGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQhISE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAACAwQBAAUHBv/EADIQAAMAAgECBAUCBAcBAAAAAAABAgMREgQhBSIxQRNRYXGRMoEjQnKhFTNSYqKywQb/xAAaAQEBAQEBAQEAAAAAAAAAAAABAAIDBAUG/8QAKREBAQACAQMDAwQDAQAAAAAAAAECESEDEjFBUfAEYXGBkaHREyLxMv/aAAwDAQACEQMRAD8A+eJGpGpBpHifp2KQ1IUoNSRdMhTAcwNmCVDMDJgZMDJgdOey1ASgcoN4FpdxHA7iP4ncCXcn4hfDH8DlIHZHA7gUcTnINbT8AXBS0Y4FmkcDuA7gcoJQniY5KOBjky6SpnALgocguRFTuDHJQ5B4ixU7gxyUcQXJBM4FuCpwBUktpakCpKakXUk1tM5BaHOQGiOy2jNBtGNEQHBNAkD0hkoxIbKIumRsSZKHTJBsSOmTJQ2ZHTFrYkZMmzIyZFz1WKTeIxI7Rba7S+J3AepN4mbW5iRxO4jnJnANmwnRvEbxCUlsdpDkzgU8DuAbOk3E5QVcDuAbamKXiC0VuBdQRqapB0PcguBZpDkziO4ncB2NE8QKgo4g1JbGk7kXUlLgCpFlJUi6kqqRdSKSuRbkpqRVSDUpDkFodUgNEbSmgdDGgdEtqJQ2EBKGSTd4NlDYQEIdCJjYpQ+EBCGyh2O0cIakDKCQHTUgtHJBpBs9rpQak6UEZrpIzidwC0HMgiuJqka5NUEyVOM54yhQa4La0Q47A8R9SCoJbT8QXjKnBlQCSuBTxlvADiO1Yk4G8Chwc4LZkSuAKgpqQKkdrSWoAqSloVSGVjSWpFuSm5FUjTCepFVJTUi6kQmqQHJRUiqREikDobSF6BqHSNgUh0E1TZHyhMD8ZA5IdAuBsIiOUGkCkGkDWhJBqTEg5M2tSOmRkwdIxGTpkyMmTVIxQCpTn3DmRk4/YP4WuzTT+vZltjRakLgNUHaIbJcA8SipFFGbS2gakesbe+zfu9L0X1MrE9b09fPXb8keSFItyVcdIU5KHZNSBxHLF8zXBGI2gKRRUi6RpJ6kVSHsVQwEUhNFFIXUmo50ikLpD6QqkI0Q0LpD6QqjQT0hbHWLMtSigdAmRsE6WHwUQTwUYyZUQOgTA6CMpiDSBQxGa6QSQcgIOUZabLHQK0OgzUbKL/DPDq6i+Mr6tteWV83/AOL3IsS32XdvskvVs/XZMsdD0844r+PkTdLS/UklVb+S2kjfTwmVtviPL9V1r05McJvLLif3+n/eNvN63POCng6XytdsvUNTWR1/pj2X1ft6LvtpHiU1ymdZ+CiZmuo5vLkbbqq3Tb47aS+z9tF/RJdJE9Rkx87yOfhJ0lwh+tJNevHb/C7bGdB4dFS7z5LuMCyPIqT5XltRdKqb7vUxtL3prZ27csprxv09o8Hf0+lnM7vLVsuXvdc648TieZOfHrPGfT3xWThfD05ca4P9/Q2Omuk6iLpLs3MVSTfoto9DpFk6rlNy3upeS1VcMWCHNTixzrSbcrdPu9Pt6JVvq6ma6lJTjhPB0OCXSh5X2dtfzU/n30lX+7eJ0sbz3cfP4dcvq88dy4f7e2/fx+tvt+fHLw66e+/lvy/r8teT+r5fuXdH4ZEY31PVOowrSx41/mZqfop+79Pz2Xcd4H09ZKqMuSnhVPJnWo1mzKttVSW/1JtrelrRnjee+ryaxRVYce1j4z5d606+79F9PuWOEk7vP2GfWzyy/wAcsx8W2XxPz72+PmhjrsruZhrB3m5w4vLh6bC027yNa+LbjdarcpafFtoHB4/njJT5fExOq/h2k5UNvST1ue2l8voSury05xzx5NVfBVV5Na7Nv9ONaXlXyW20tG9N0N3lWLXF/wA3vxnSe/w1+UOXUyuu2/Pnz1uen9P0p3XqYyceLd3z587+0vn19dT1MvRdJnU55m8M71klaiat9lEb7cm9d00kt717R+JRELjmzYuKqanpejfOpiZtTCTSSbdbeS/Vr2XYPq885KjHCdYodThxrbeW53NWl7xva5e+3r17eXn6HJjTq1a83mqlpO6f490kl6ensbysxl1jz8+fdy6WF6mU3nqTxLrc5mtb9ffi6nG7dxPmaq+UzwWlKW96lfX3e2239ftpTQ1oCjy27fXwxmMkiSkKqSm0KtCdJqkVaH2JsRSKQFDbFUbYpVC2NoVQs0mhVDaFUaGiKFjLFGWpBQOgngdjJ0UQUSTyyiGTF4UQx0k8MfI0SnSNkTI6GYrtiYjUwUzEzLdpmxssSmMlgzt6vgEquphP026/ed0v7pFX/wBDbfVUn7Tjmftrm3+b/sjyOlz1jubns5apfLa+f0Pa63r+m6jz3OWMmkm44VNL92t/2OmNl6dx8Xbx9WXH6jDq6tkmuJvV551OfHsq8R8UwW5qFdXEtRNT/Chvi+6peZrivTt27jMXX4b6X4GSrm+TyOpTp5K5c+/t7+79UeCsuJPtGSv67iP+MKv+xTi8R4/ox4fpyx1b/NPZvvu92z5+P7eefTyYTHDHLi7ltk1r8/v/AOfPn0etg8TwrpcmCpueTtTEfrqGkvNka47env00npLstr8S67Fk4zj+J5Jcx2cY8bpJOpT7u0lrl7bentsJeNYni82KKv0c6SxtfPbT0voeX1GeL80w8T95Vc8b+qbSc/buvsOWdk/1sYw6EyztzwynPvLPbn119/Hp4ernlYehiJaj4ridrslNrk/t5JaJuo6yL4zjl1gw8cibSXx8qa1xT96rik3rve/TuEvEcV4JxZoytxrg8fDfZNS1ya09NruT4ushZI8jWObnI5bTyVS/mp+ja9l6L99jc5JOeNT8/PG2J0c7cu7G73b9vHF36657Z73d4XZMCw4p6VvdZJS6i59V6dv6PXe2u2/md8RYOneWPNWZzjwqpqVGOY4JtLTXlh1rt3aXb1I+u6+bqqxw45aVXdbutJLUym1M6S+r+nvRfikP4Hkqnj4KqppSp8vLjO/NXl7b0lvf0HvxlvM48fP5Z/w9S44243m8z1vr+k8Se3N43DMfSvDCiXrqsymXeknhxempS7SlppJdl316EvjSiFjw4+2LE6nXbzZ2m6b+dJctv52992iz/GsM5byrHbbiYl7l29N9tN6ld9+r33/fwMmTeuylJOZlN1pN7e6feqb7uvd/skdTLGY2S/Pnn9m/p+lnepjcsNa55n7Sfj0nvzfSBANqxbZ5dPrwFCaDyMRZpbBTEUMoVTFm0qxdB2xdGmC6FUMpiqYs0qmJtjLYm2aBVsUMtizLpGyOxsTIyWRVSx8Mlhj4ZKxVLHSyaKHTRLSiaDmieaGTQGHqg+QhUFyMuh3IZLJthTQBUqGJkc2MVkNqZoarI+Yc2TFVzYXMmmwuRCqFR3IQqM5EFPI12TczqstHZrsF0L5GOyRlUKqjHYt2TW3ZKE1RtULbEBpimw6YqmaGwWLphUxV0IoKYmmFTFWx052hpiKYymJtiYXTFbDtgbMukg5YyGJlhyyFqiGOmiaaGxQ6HcrhjZokmhs0R2qmg1RNNDFQNxQqCTEKwuRmuh2zZon5BTQBQqDVE6oNUA0omhk0SzQ1WI0pmjeQmLCmgWjeR2xWztizYbyMdC3RjohoboF2A6AbNMm1Yt0DszZETYtsx0C6I6bTFUzaoB0SBbEUxl0KpmoxaXTFWw7YqmI0XTE0xlMS2FakBTA2FTABqiTCli0w0xjNOlhyxEsbNCxpRNDJommhk0TSmaDVE80EqMtSqdm8ifkbyLTfcdzCmxCo1UGlMlSsKbJVQasNN7VzYaokmxisErmw1ZHNjFZDarmbzJlkNrIStNdg8xVWDzFi092C6FcwXQjR3IB0LdAuwaMqwOQDsB0INqhVUBVguhYta2LpnVQuqNM1jYmmHTE0wpgaYqmFTF0DQKYJtGE0xBJgGoWTUw0xKYSYsnqhk0TphzRDtUTQaoQqCVEfB3I1UJVGqiHJqoPkJ5HcgrUO2ErEcjuQNbUrIHOQkVhKy0u5ZNhrIRqxisNLalZDXZOrN5ktnOjlZPzM5Cyp5g1kEOwayE1s52A8gl2A7HTFyPeQHmJdmch0zvZ2zNiuQPMmtGugKoB0A6IabTFtmuhdMlIymBTOpgtg0FgmtmAXHI44k0JM44jIJMJM04loSYSo44YNCVG8jjiqkaqN5HHA27kdyOOJjJ3IJUccNA1QSs44GtC5HczjiDOZ3Iw4gx2c7OOIgdgOzjjTGUZzM5mnEpGczORxxltjoF0ccQC6AdHHDUFsFs44DQmGnEY//9k=',
            }}
            style={styles.bannerImage}
          />
        </Swiper>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <Text style={styles.open}>환영합니다, {name}님</Text> */}
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>회원님을 위한 맞춤 추천곡</Text>
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
      />
      <Text style={styles.titleofpost}>{post.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bannercontainer: {
    flex: 0.5,
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
    width: 600,
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
    marginLeft: -65,
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
  },
  bannerImage: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
});

export default MainPage;
