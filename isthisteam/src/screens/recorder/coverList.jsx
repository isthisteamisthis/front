import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function CoverList({navigation}) {
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
        navigation.navigate('CoverDetail', {songNo: item.songDataNo});
      }}>
      <Image style={styles.image} source={{uri: item.imgUrl}} />
      <Text style={styles.songName}>{item.songName}</Text>
      <Text style={styles.artistName}>{item.artistName}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.sendtext1}>{`커버곡
리스트`}</Text>
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
const CoverLists = ({navigation}) => {
  const renderGalleryItems = () => {
    // 3개씩 열로 나누기 위한 배열 생성
    const galleryRows = [];
    for (let i = 0; i < CoverList.length; i += 3) {
      const rowItems = CoverList.slice(i, i + 3);
      galleryRows.push(
        <View key={i} style={styles.galleryRow}>
          {rowItems.map(item => (
            <View key={item.id} style={styles.galleryItem}>
              {renderItem(item)}
            </View>
          ))}
        </View>,
      );
    }
    return galleryRows;
  };
};

const renderItem = item => (
  <TouchableOpacity
    style={styles.messageItem}
    onPress={() => navigation.navigate('coverDetail')}>
    <Image source={{uri: item.image}} style={styles.itemImage} />
    <Text style={styles.subject}>{item.subject}</Text>
    <Text style={styles.date}>{item.date}</Text>
  </TouchableOpacity>
);

//   return (
//     <View style={styles.container}>
//       <View style={styles.container1}>
//         {/* <Image
//           source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
//           style={styles.header}
//         /> */}
//         <Text style={styles.sendtext1}>{`Ai 커버곡
//    리스트`}</Text>
//       </View>
//       <ScrollView style={styles.galleryContainer}>
//         {renderGalleryItems()}
//       </ScrollView>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9F1',
    flex: 1,
    padding: 16,
  },
  sendtext1: {
    marginTop: 22,
    marginLeft: 200,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '900',
    lineHeight: 18,
  },
  container1: {
    marginTop: -20,
    backgroundColor: '#FDE4C6',
    width: 500,
    marginLeft: -40,
    height: 80,
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 205,
    width: 27,
    height: 27,
  },
  galleryContainer: {
    marginTop: 20,
  },
  galleryRow: {
    flexDirection: 'row',
    marginBottom: 10, // 각 행 사이의 간격 조절
  },
  galleryItem: {
    flex: 1, // 각 항목이 동일한 너비를 가지도록 함
    marginHorizontal: -10, // 각 항목 사이의 간격 조절
  },
  messageItem: {
    padding: 20,
    marginTop: 5,
    letterSpacing: -1,
  },
  subject: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 1,
    letterSpacing: -1,
    marginTop: 10,
    color: 'black',
  },
  date: {
    fontSize: 14,
    color: 'gray',
  },
  itemImage: {
    width: 10,
    height: 100, // 이미지를 항목의 가로 너비에 맞게 표시
    aspectRatio: 1, // 이미지 비율 유지
    borderRadius: 5,
  },
});
