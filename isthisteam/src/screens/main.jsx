import React from "react";
import { View, Text, Image, ScrollView, Linking, SafeAreaView, Button } from 'react-native';

function Main({navigation}) {
  return (
    <View>
      <Text>Start!</Text>
      <Button 
        title="높낮이 측정하러 가기" 
        onPress={() => navigation.navigate('VoiceRange')}
      />
    </View>
  );
}

export default Main;