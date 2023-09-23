import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const fakeMessages = [
  {
    id: '1',
    writer: 'sui',
    subject: '좋은날',
    date: '2023-09-25',
    image:
      'https://firebasestorage.googleapis.com/v0/b/is-this-team-lalalia.appspot.com/o/d9122cf2-7fc7-4c41-b3b3-dc85482afe9a?alt=media&token=c3ba68c3-6107-4a60-ae46-c502957c6c54', // 이미지 URL
  },
  {
    id: '2',
    writer: 'Dylan',
    subject: '거북이',
    date: '2023-09-24',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ikNfnzciX871NVgJrpveFprpi5wLJMYoQ&usqp=CAU', // 이미지 URL
  },
  {
    id: '3',
    writer: 'Rachaz',
    subject: '물론',
    date: '2023-09-23',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEX1FVDqI78cpHEAXcweDUrBLKLBd_LNRtg&usqp=CAU', // 이미지 URL
  },
  {
    id: '1',
    writer: 'sui',
    subject: '좋은날',
    date: '2023-09-25',
    image:
      'https://firebasestorage.googleapis.com/v0/b/is-this-team-lalalia.appspot.com/o/d9122cf2-7fc7-4c41-b3b3-dc85482afe9a?alt=media&token=c3ba68c3-6107-4a60-ae46-c502957c6c54', // 이미지 URL
  },
  {
    id: '2',
    writer: 'Dylan',
    subject: '거북이',
    date: '2023-09-24',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ikNfnzciX871NVgJrpveFprpi5wLJMYoQ&usqp=CAU', // 이미지 URL
  },
  {
    id: '3',
    writer: 'Rachaz',
    subject: '물론',
    date: '2023-09-23',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEX1FVDqI78cpHEAXcweDUrBLKLBd_LNRtg&usqp=CAU', // 이미지 URL
  },
  {
    id: '1',
    writer: 'sui',
    subject: '좋은날',
    date: '2023-09-25',
    image:
      'https://firebasestorage.googleapis.com/v0/b/is-this-team-lalalia.appspot.com/o/d9122cf2-7fc7-4c41-b3b3-dc85482afe9a?alt=media&token=c3ba68c3-6107-4a60-ae46-c502957c6c54', // 이미지 URL
  },
  {
    id: '2',
    writer: 'Dylan',
    subject: '거북이',
    date: '2023-09-24',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ikNfnzciX871NVgJrpveFprpi5wLJMYoQ&usqp=CAU', // 이미지 URL
  },
  {
    id: '3',
    writer: 'Rachaz',
    subject: '물론',
    date: '2023-09-23',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEX1FVDqI78cpHEAXcweDUrBLKLBd_LNRtg&usqp=CAU', // 이미지 URL
  },
  {
    id: '1',
    writer: 'sui',
    subject: '좋은날',
    date: '2023-09-25',
    image:
      'https://firebasestorage.googleapis.com/v0/b/is-this-team-lalalia.appspot.com/o/d9122cf2-7fc7-4c41-b3b3-dc85482afe9a?alt=media&token=c3ba68c3-6107-4a60-ae46-c502957c6c54', // 이미지 URL
  },
  {
    id: '2',
    writer: 'Dylan',
    subject: '거북이',
    date: '2023-09-24',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ikNfnzciX871NVgJrpveFprpi5wLJMYoQ&usqp=CAU', // 이미지 URL
  },
  {
    id: '3',
    writer: 'Rachaz',
    subject: '물론',
    date: '2023-09-23',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEX1FVDqI78cpHEAXcweDUrBLKLBd_LNRtg&usqp=CAU', // 이미지 URL
  },
];

const CoverList = ({navigation}) => {
  const renderGalleryItems = () => {
    // 3개씩 열로 나누기 위한 배열 생성
    const galleryRows = [];
    for (let i = 0; i < fakeMessages.length; i += 3) {
      const rowItems = fakeMessages.slice(i, i + 3);
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

  const renderItem = item => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => navigation.navigate('coverDetail')}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Image
          source={require('../../../android/app/assets/images/paper.png')} // 이미지 경로를 설정합니다.
          style={styles.header}
        />
        <Text style={styles.sendtext1}>Ai 커버곡 리스트</Text>
      </View>
      <ScrollView style={styles.galleryContainer}>
        {renderGalleryItems()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9F1',
    flex: 1,
    padding: 16,
  },
  sendtext1: {
    marginTop: -25,
    marginLeft: 175,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
    fontWeight: '800',
  },
  container1: {
    marginTop: -20,
    backgroundColor: '#FDE4C6',
    width: 500,
    marginLeft: -40,
    height: 100,
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

export default CoverList;
