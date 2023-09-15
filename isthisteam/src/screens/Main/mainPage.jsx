import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function MainPage({navigation}) {
  return (
    <View style={styles1.container}>
      <Text style={styles1.title}> 커뮤니티 </Text>
      <Text style={styles1.title}> 마이페이지 </Text>
      <Text style={styles1.title}> 녹음하기 </Text>
    </View>
  );
}

const styles1 = StyleSheet.create({
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

export default MainPage;
