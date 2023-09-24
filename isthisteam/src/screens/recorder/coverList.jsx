import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CoverList = ({navigation}) => {
  const [posts, setPosts] = useState([]);

  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: '2-digit', // Use '2-digit' to display the month as two digits (e.g., '02')
      day: '2-digit', // Use '2-digit' to display the day as two digits (e.g., '01')
    };
    const date = new Date(dateString);
    return date
      .toLocaleDateString('ko-KR', options)
      .replace(/\. /g, '/')
      .replace('.', ' ');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // AsyncStorage에서 jwtToken을 가져옵니다.
        const jwtToken = await AsyncStorage.getItem('jwtToken');

        if (!jwtToken) {
          throw new Error('JWT Token not found');
        }

        // JWT 토큰이 설정되면 데이터를 가져옵니다.
        const response = await fetch('http://10.0.2.2:8080/posts', {
          method: 'GET',
          headers: {
            Authorization: `${jwtToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Network request was not ok');
        }

        const responseData = await response.json();
        console.log(responseData);

        setPosts(responseData.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.messageItem}
      onPress={() => navigation.navigate('SongDetail')}>
      <Image source={{uri: item.imgFile}} style={styles.imageofpost} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>{formatDate(item.date)}</Text>
      <Text style={styles.subject}>💖 {item.likeCnt}</Text>
    </TouchableOpacity>
  );

  // Helper function to chunk the posts into rows with 3 items per row
  const toArray = (myArray, size) => {
    const results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, size));
    }
    return results;
  };

  const renderGalleryItems = () => {
    // Chunk the posts into rows with 3 items per row
    const chunkedPosts = toArray(posts, 3);

    return (
      <View style={styles.galleryContainer}>
        {chunkedPosts.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.galleryRow}>
            {row.map((item, index) => (
              <View key={index} style={styles.galleryItem}>
                {renderItem({item})}
              </View>
            ))}
          </View>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.sendtext1}>{`Ai 커버곡 리스트`}</Text>
      </View>
      {renderGalleryItems()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF9F1',
    flex: 1,
    // padding: 16,
    marginTop: -20,
  },
  sendtext1: {
    flex: 1,
    marginBottom: 10,
    letterSpacing: -1.5,
    color: 'black',
<<<<<<< HEAD
    fontWeight: '900',
    fontSize: 18,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 50,
=======
    fontWeight: '800',
    lineHeight: 18,
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 30,
>>>>>>> 1d43768fd3c52db73347642e73db5b79272cff90
  },
  container1: {
    marginTop: -20,
    backgroundColor: '#FBD3A1',
    width: '100%',
<<<<<<< HEAD
    height: 120,
=======
    height: 100,
>>>>>>> 1d43768fd3c52db73347642e73db5b79272cff90
    align: 'center',
  },
  header: {
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 205,
    width: 27,
    height: 27,
  },
  galleryContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  galleryRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  galleryItem: {
    flex: 1,
    marginRight: 5,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageItem: {
    padding: 10,
    flex: 1,
    marginTop: 5,
    letterSpacing: -1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subject: {
    fontSize: 13,
    fontWeight: '500',
  },
  title: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
    alignItems: 'center',
  },
  date: {
    fontSize: 12,
    color: 'gray',
    flex: 1,
    alignItems: 'center',
  },
  imageofpost: {
    width: 100,
    height: 100,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
});

export default CoverList;
