import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OpenUserPage = () => {
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('라구');
  const [userIntroduction, setUserIntroduction] = useState(
    '안녕하세요! 저는 누구누구입니다. \n 취미는 하비 특기는 잠자기',
  ); // 자기소개를 마이페이지에서 할 필요가 있는가? 노출이 안 되는데
  const [voiceHighRange, setVoiceHighRange] = useState('3옥타브 라');
  const [voiceRowRange, setVoiceRowRange] = useState('2옥타브 미');
  const navigation = useNavigation();
  //   <TouchableOpacity onPress={MoreButtonPress}>
  //     <Text style={styles.moreButton}>더보기</Text>
  //   </TouchableOpacity>;

  function openUserPage() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../../android/app/assets/images/user.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.int}>{name}님의 자기소개</Text>
        <View style={styles.userIntroductionContainer}>
          <Text style={styles.userIntroduction}>{userIntroduction}</Text>
        </View>
        <Text style={styles.int}>{name}님의 음역대</Text>
        <View style={styles.textContainer}>
          <Text style={styles.voiceRange}>{voiceHighRange}</Text>
          <Text style={styles.voiceRange}>{voiceRowRange}</Text>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F5EB',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    marginBottom: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  int: {
    marginTop: 20,
    fontWeight: 'bold',
    marginBottom: -20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 75,
    marginBottom: 10,
    marginTop: 30,
  },
  userIntroductionContainer: {
    backgroundColor: 'lightgray',
    marginTop: 30,
    marginBottom: 30,
    width: 400,
    height: 100,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderRadius: 5,
  },
  userIntroduction: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    margin: 10,
    letterSpacing: -1,
  },
  textContainer: {
    backgroundColor: 'lightgray',
    marginTop: 30,
    marginBottom: 30,
    width: 400,
    height: 60,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderRadius: 5,
    flexDirection: 'row',
  },
  voiceRange: {
    marginRight: 100,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 45,
  },
  additionalText: {
    marginRight: 230,
    marginTop: 20,
    letterSpacing: -1,
    color: 'black',
    fontWeight: '800',
  },
});

export default OpenUserPage;
