import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function KaraokeList({navigation}) {
  const [songDataList, setSongDataList] = useState([]);
  const [songDataNo, setSongDataNo] = useState([]);

  const GetSongDataList = async () => {
    const apiUrl = 'http://10.0.2.2:8080/song-data';

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error('네트워크 오류');
      }

      const data = await response.json();

      setSongDataList(data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    GetSongDataList();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate('Karaoke', {songNo: item.songDataNo});
      }}>
      <Image style={styles.image} source={{uri: item.imgUrl}} />
      <Text style={styles.songName}>{item.songName}</Text>
      <Text style={styles.artistName}>{item.artistName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.sendtext1}>나만의 노래방</Text>
      </View>
      <FlatList
        data={songDataList}
        renderItem={renderItem}
        keyExtractor={item => item.songDataNo.toString()}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sendtext1: {
    marginTop: 30,
    marginLeft: 165,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '900',
    fontSize: 20,
  },
  container1: {
    marginTop: -20,
    backgroundColor: '#DCDDED',
    width: 500,
    marginLeft: -40,
    height: 90,
    marginBottom: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 205,
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#EAEAF4',
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  songName: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  artistName: {
    marginTop: 4,
    fontSize: 14,
  },
});
