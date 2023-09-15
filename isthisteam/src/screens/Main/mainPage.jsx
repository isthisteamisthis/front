import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function MainPage({navigation}) {
  const onPress1 = () => {
    navigation.navigate('Community');
  };

  const onPress2 = () => {
    navigation.navigate('Mypage');
  };

  const onPress3 = () => {
    navigation.navigate('Aicover');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button01}
          onPress={onPress1}>
          <Text style={styles.text01}>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button01}
          onPress={onPress2}>
          <Text style={styles.text01}>마이페이지</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button01}
          onPress={onPress3}>
          <Text style={styles.text01}>녹음하기</Text>
        </TouchableOpacity>
      </View>

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
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
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
    marginBottom: 20, // 버튼과 게시글 간 간격 조절
  },
  button01: {
    backgroundColor: '#D9D7F1',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  text01: {
    color: 'black',
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: -1,
    marginTop: -3,
  },
});

export default MainPage;
