import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  SafeAreaView,
  onPress,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function Select({navigation}) {
  const onPress = () => {
    navigation.navigate('VoiceRange');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {`당신의 유형을 
선택해주세요`}
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>작곡가</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.text}>가수</Text>
      </TouchableOpacity>
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
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 50,
    lineHeight: 29,
    color: 'black',
  },
  button: {
    marginTop: 5,
    paddingTop: -7,
    fontSize: 20,
    fontWeight: '800',
    width: 100,
    height: 30,
    color: 'black',
    textAlign: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: '#F4F4F4',
    marginHorizontal: 'auto',
  },
  text: {
    color: 'black',
  },
});

export default Select;
