import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Button style={styles.title}> 커뮤니티 </Button>
      <Button style={styles.title}> 마이페이지 </Button>
      <Button style={styles.title}> 녹음하기 </Button>
      <Button
        title="작곡가"
        onPress={() => navigation.navigate('VoiceRange')}
      />
      <Button title="가수" onPress={() => navigation.navigate('VoiceRange')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Main;
