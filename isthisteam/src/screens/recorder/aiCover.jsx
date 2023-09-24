import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

const Aicover = ({navigation}) => {
  const [musicFile, setMusicFile] = useState(null);
  const [name, setName] = useState('');
  const [response, setResponse] = useState('');
  const [model, setModel] = useState('');
  const [textInput, setTextInput] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState('');
  const [octave, setOctave] = useState('');
  const [index, setIndex] = useState('');
  const [error, setError] = useState('');

  const onSelectAudio = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });

      if (Array.isArray(result)) {
        setMusicFile(result[0]);
        setAudioFile(result[0].name);
      } else {
        setMusicFile(result);
        setAudioFile(result.name);
      }
    } catch (err) {
      setError('Error picking music: ' + err.message);
    }
  };

  const onPress2 = () => {
    navigation.navigate('MyPage');
  };

  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: true,
      },
      response => {
        console.log(response);
        if (response.didCancel) {
          return;
        } else if (response.errorCode) {
          console.log('Image Error : ' + response.errorCode);
        }

        setResponse(response);
        setImageFile(response.assets[0].base64);
      },
    );
  };

  const uploadData = async () => {
    try {
      if (!musicFile) {
        setError('Please select a music file');
        return;
      }

      // const jsonString = `{
      //     "name": "${name}",
      //     "model": "${model}",
      //     "octave": "${octave}",
      //     "index": "${index}"
      // }`

      const formData = new FormData();
      formData.append('name', name);
      formData.append('model', model);
      formData.append('octave', octave);
      formData.append('index', index);
      formData.append('ai-song', {
        uri: musicFile.uri,
        type: 'audio/wav',
        name: 'ai-demo.wav',
      });

      const response = await axios.post(
        'http://192.168.0.109:8080/api/ai-songs',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      console.log(response.data);
      setError('');
    } catch (error) {
      console.error('Error uploading data:', error);
      setError('Error uploading data: ' + error.message);
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: '#EAEAF4'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentContainer} />
          <View style={styles.imageContainer} />
          {/* <Text style={styles.headerText}>AI 커버곡 생성</Text> */}
          <View style={styles.header}>
            <Image
              source={response ? {uri: response.assets[0].uri} : null}
              style={styles.img}
            />

            <View style={styles.rightContent}>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={onSelectImage}>
                <Text style={styles.buttonText}>
                  {imageFile ? '이미지  변경하기' : '이미지 추가하기'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.audioButton}
                onPress={onSelectAudio}>
                <Text style={styles.buttonText0}>
                  {audioFile ? `${audioFile}` : '음원 파일 추가하기'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TextInput
            style={styles.textInput}
            placeholder="본인의 이름과 노래 제목을 입력하세요"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.reference}
            placeholder="0~1까지의 숫자로 참조율을 적어주세요."
            value={index}
            onChangeText={text => setIndex(text)}
            keyboardType="numeric"
          />
          <Picker
            selectedValue={model}
            onValueChange={(itemValue, itemIndex) => setModel(itemValue)}
            style={styles.picker}>
            <Picker.Item label="목소리 모델 선택" value="" />
            <Picker.Item label="여형구" value="hyungku250" />
            <Picker.Item label="더 멋진 여형구" value="hyungku2500" />
            <Picker.Item label="지민" value="Jimin" />
            <Picker.Item label="정국" value="Jungkook" />
          </Picker>

          <Picker
            selectedValue={octave}
            onValueChange={(itemValue, itemIndex) => setOctave(itemValue)}
            style={styles.picker}>
            <Picker.Item label="옥타브 선택" value="" />
            {Array.from({length: 25}, (_, i) => i - 12).map(value => (
              <Picker.Item
                key={value.toString()}
                label={value.toString()}
                value={value.toString()}
                style={styles.pickerItem}
              />
            ))}
          </Picker>

          <TouchableOpacity style={styles.made} onPress={onPress2}>
            <Text style={styles.madetext}>Ai 데모곡 생성</Text>
          </TouchableOpacity>

          {error ? <Text style={{color: 'red'}}>{error}</Text> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  headerText: {
    marginTop: 50,
    marginBottom: -40,
    fontSize: 24,
    color: '#202B8F',
    fontWeight: '900',
    letterSpacing: -1.5,
  },
  header: {
    flexDirection: 'row', // 가로로 정렬
    alignItems: 'center', // 수직 가운데 정렬
    marginBottom: 16,
    marginTop: 10,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
  },
  rightContent: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'column', // 세로로 배치
    alignItems: 'center',
  },
  img: {
    height: 130,
    width: 130,
    borderRadius: 10,
    marginTop: 60,
    marginLeft: 50,
    marginBottom: -30,
  },
  imageButton: {
    // backgroundColor: '#202B8F',
    borderWidth: 1,
    borderColor: '#202B8F',
    padding: 7,
    width: 150,
    borderRadius: 5,
    marginTop: 90,
    alignItems: 'center',
    marginRight: 20,
    marginBottom: -90,
    marginLeft: 10,
  },
  audioButton: {
    backgroundColor: '#202B8F',
    padding: 7,
    width: 150,
    borderRadius: 5,
    marginTop: 15,
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 30,
    marginLeft: 10,
  },
  options: {
    color: '#202B8F',
  },
  buttonText0: {
    fontSize: 16,
    color: '#fff',
    // letterSpacing: 0,
    letterSpacing: -1,
    lineHeight: 18,
  },
  buttonText: {
    fontSize: 16,
    color: '#202B8F',
    // letterSpacing: 0,
    letterSpacing: -1,
    lineHeight: 18,
  },
  audioContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  textInput: {
    fontSize: 14,
    borderWidth: 1,
    marginTop: 50,
    borderColor: '#000',
    padding: 10,
    width: 330,
    height: 40,
    // marginLeft: 0,
    letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 230,
    letterSpacing: -1.5,
    lineHeight: 18,
  },
  reference: {
    fontSize: 14,
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#000',
    padding: 10,
    width: 330,
    height: 40,
    // marginLeft: 30,
    letterSpacing: -0.5,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  options01: {
    fontSize: 16,
    color: 'black',
    letterSpacing: -1.5,
    lineHeight: 18,
  },
  made: {
    backgroundColor: '#202B8F',
    padding: 7,
    width: 150,
    borderRadius: 5,
    marginTop: 70,
    alignItems: 'center',
    marginBottom: 400,
    marginLeft: 10,
  },
  madetext: {
    fontSize: 16,
    color: 'white',
    letterSpacing: -1,
    // letterSpacing: 305,
    lineHeight: 18,
    marginTop: 1,
  },
  text01: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#000',
    padding: 10,
    width: 330,
    height: 40,
    marginLeft: -200,
    letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  picker: {
    marginTop: 15,
    width: 330,
    height: 20,
    // marginLeft: 20,
    letterSpacing: -1,
    textAlign: 'center',
    backgroundColor: '#DCDDED',
    color: 'black',
  },
  pickerItem: {
    fontSize: 16,
    color: 'black',
  },
  pickerLabel: {
    letterSpacing: -1,
    fontSize: 16,
    color: 'black',
  },
  createAiCoverButton: {},
  createAiCoverText: {
    borderWidth: 1,
    marginTop: 50,
    borderColor: '#000',
    padding: 6,
    width: 100,
    height: 38,
    marginLeft: -150,
    letterSpacing: -1,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 8,
  },
});

export default Aicover;
