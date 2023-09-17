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

const data = [
  {
    id: 'rachaz',
    title: '안녕이라고 말하지마',
    date: '2023-09-23',
    thumbnail: '../../../android/app/assets/images/exam',
  },
  {
    id: 'dylan',
    title: 'smoke',
    date: '2023-02-01',
    thumbnail: 'url_to_thumbnail_image_2.jpg',
  },
];

function Community({navigation}) {
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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginRight: 16,
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
    letterSpacing: -1,
  },
});

export default Community;
