import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function recSongList({navigation}) {
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('SongDetail')}>
      <View style={styles.item}>
        <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
        <View style={styles.itemInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.id}>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  const data = [
    {
      id: 'rachaz',
      title: '안녕이라고 말하지마',
      date: '2023-09-23',
      thumbnail: '',
    },
    {
      id: 'dylan',
      title: 'smoke',
      date: '2023-02-01',
      // thumbnail: 'url',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/musics.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>추천 곡 리스트</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#EAEAF4',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    // borderColor: '#ccc',
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 7,
    marginRight: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 180,
    marginBottom: 10,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '600',
  },
  container1: {
    marginTop: -15,
    backgroundColor: '#EAEAF4',
    width: 500,
    marginLeft: -40,
    height: 90,
  },
  header: {
    marginBottom: 30,
    marginTop: 45,
    marginLeft: 205,
    width: 25,
    height: 25,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: -1,
  },
  date: {
    color: 'gray',
    letterSpacing: -1,
  },
  id: {
    marginRight: 24,
    color: 'black',
    letterSpacing: -1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: -1.5,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#EAEAF4',
  },
});

export default recSongList;
