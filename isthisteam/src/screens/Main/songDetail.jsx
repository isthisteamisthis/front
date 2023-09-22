import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const SongDetail = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.albumCover}
          source={{uri: 'https://example.com/album-cover.jpg'}}
        />
        <View style={styles.albumInfo}>
          <Text style={styles.albumTitle}>앨범 제목</Text>
          <Text style={styles.artistName}>아티스트 이름</Text>
          <Text style={styles.releaseDate}>발매일: 2023-09-22</Text>
        </View>
      </View>
      <Text style={styles.description}>
        이 앨범은 아티스트의 최신 작품으로, 멋진 음악과 가사로 가득 차 있습니다.
        앨범에 대한 자세한 정보와 트랙 목록을 아래에서 확인하세요.
      </Text>

      {/* 트랙 목록 */}
      <Text style={styles.trackListTitle}>트랙 목록</Text>
      <View style={styles.trackList}>
        <Text style={styles.trackItem}>1. 노래 제목 1</Text>
        <Text style={styles.trackItem}>2. 노래 제목 2</Text>
        <Text style={styles.trackItem}>3. 노래 제목 3</Text>
        {/* 필요한 만큼 트랙을 추가하세요. */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row', // 가로로 정렬
    alignItems: 'center', // 수직 가운데 정렬
    marginBottom: 16,
  },
  albumCover: {
    width: 200,
    height: 200,
    marginRight: 16,
  },
  albumInfo: {
    flex: 1, // 남은 공간을 모두 차지하도록 설정
  },
  albumTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  artistName: {
    fontSize: 18,
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
  },
  trackListTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  trackList: {
    marginLeft: 16,
  },
  trackItem: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default SongDetail;
