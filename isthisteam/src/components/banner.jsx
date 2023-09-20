import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Banner = ({title, imageUrl}) => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>{title}</Text> */}
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  image: {
    marginTop: -30,
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    marginLeft: 10,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Banner;
