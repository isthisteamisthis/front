// TabBar.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

function BottomTab({navigation}) {
  return (
    <View style={styles.tabBar}>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('MyPage')}
        style={styles.tabItem}>
        <Text style={styles.tabText}>MyPage</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => navigation.navigate('MyPage')}
        style={styles.tabItem}>
        <View style={styles.tabContent}>
          <Image
            source={require('../../android/app/assets/images/person.png')} // 이미지 경로를 설정합니다.
            style={styles.tabImage}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Community')}
        style={styles.tabItem}>
        <View style={styles.tabContent}>
          <Image
            source={require('../../android/app/assets/images/chatt.png')} // 이미지 경로를 설정합니다.
            style={styles.tabImage}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('recSelect')}
        style={styles.tabItem}>
        <View style={styles.tabContent}>
          <Image
            source={require('../../android/app/assets/images/micc.png')} // 이미지 경로를 설정합니다.
            style={styles.tabImage}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 350,
    height: 50,
    borderRadius: 30,
    marginBottom: -5,
    backgroundColor: '#202B8F',
  },
  tabImage: {
    width: 30,
    height: 30,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white', // 탭 텍스트 색상
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomTab;
