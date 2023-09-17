import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Flatlist,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ModalDropdown from 'react-native-modal-dropdown';

const Stack = createStackNavigator();

function MainPage({navigation}) {
  const onPress1 = () => {
    navigation.navigate('Community');
  };

  const onPress2 = () => {
    navigation.navigate('MyPage');
  };

  const onPress3 = () => {
    navigation.navigate('Aicover');
  };
  const onPress4 = () => {
    navigation.navigate('PerfectScore');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
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
      </View>

      <Text style={styles.additionalText}>나의 곡 추천</Text>

      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={({item}) => <PostItem post={item} />}
        horizontal={true}
      />
    </View>
  );
}

const posts = [
  {
    id: '1',
    imageUrl: 'https://example.com/image1.jpg',
    title: '나의 추천곡 01',
  },
  {
    id: '2',
    imageUrl: 'https://example.com/image2.jpg',
    title: '나의 추천곡 02',
  },
  {
    id: '3',
    imageUrl: 'https://example.com/image2.jpg',
    title: '나의 추천곡 03',
  },
  {
    id: '4',
    imageUrl: 'https://example.com/image2.jpg',
    title: '나의 추천곡 04',
  },
];

function PostItem({post}) {
  return (
    <View style={styles.containerofpost}>
      <Image source={{uri: post.imageUrl}} style={styles.imageofpost} />
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
  imageofpost: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  titleofpost: {
    marginTop: -30,
    fontSize: 16,
    fontWeight: 'bold',
  },
  additionalText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginRight: 240,
    marginTop: 30,
    letterSpacing: -1.5,
  },
  additionalText1: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    marginRight: 240,
    marginTop: 30,
    letterSpacing: -1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#FFF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  button01: {
    backgroundColor: '#D9D7F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text00: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -2.5,
  },
  text01: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: -1,
    marginTop: -2.5,
    backgroundColor: '#D9D7F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  dropdownText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -3,
  },
  dropdownContainer: {},
});

export default MainPage;
