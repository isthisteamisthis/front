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
import axios from 'axios';

const Aicover = () => {
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

      // Handle the result
      if (Array.isArray(result)) {
        setMusicFile(result[0]);
      } else {
        setMusicFile(result);
      }
    } catch (err) {
      setError('Error picking music: ' + err.message);
    }
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
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentContainer} />
          <View style={styles.imageContainer} />
          <Image
            source={response ? {uri: response.assets[0].uri} : null}
            style={styles.img}
          />
        </View>

        <View style={styles.rightContent}>
          <TouchableOpacity style={styles.imageButton} onPress={onSelectImage}>
            <Text style={styles.buttonText}>
              {imageFile ? '이미지  변경하기' : '이미지 추가하기'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.audioButton} onPress={onSelectAudio}>
            <Text style={styles.buttonText}>
              {audioFile ? '음원 파일 변경하기' : '음원 파일 추가하기'}
            </Text>
          </TouchableOpacity>

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
          <ModalDropdown
            style={styles.dropdownText}
            options={[
              'hyungku50',
              'hyungku100',
              'hyungku250',
              'hyungku2500',
              'Jungkook',
              'Jimin',
            ]}
            dropdownTextStyle={styles.dropdownText}
            dropdownStyle={styles.dropdownContainer}
            textoptionsStyle={styles.options01}
            initialScrollIndex={0}>
            <Text style={styles.text01}>목소리 선택</Text>
          </ModalDropdown>

          {/* <Picker
            selectedValue={model}
            onValueChange={(itemValue, itemIndex) => setModel(itemValue)}
            style={styles.picker}>
            <Picker.Item label="목소리 모델 선택" value="" />
            <Picker.Item label="여형구" value="hyungku250" />
            <Picker.Item label="더 멋진 여형구" value="hyungku2500" />
            <Picker.Item label="지민" value="Jimin" />
            <Picker.Item label="정국" value="Jungkook" />
          </Picker> */}

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

          <TouchableOpacity style={styles.made} onPress={uploadData}>
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
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'column', // 세로로 배치
    alignItems: 'center',
  },
  img: {
    height: 120,
    width: 120,
    marginTop: 60,
  },
  imageButton: {
    backgroundColor: '#000',
    padding: 7,
    width: 140,
    borderRadius: 5,
    marginTop: 90,
    alignItems: 'center',
    marginBottom: -90,
    marginLeft: 10,
  },
  audioButton: {
    backgroundColor: '#000',
    padding: 7,
    width: 150,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginRight: 0,
    marginBottom: 30,
    marginLeft: 10,
  },
  options: {
    color: 'black',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    letterSpacing: 0,
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
    marginLeft: 30,
    // letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 230,
    // letterSpacing: -1.5,
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
    marginLeft: 30,
    // letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  dropdownContainer: {
    fontSize: 16,
    color: 'white',
    marginLeft: 230,
    // letterSpacing: -1.5,
    lineHeight: 18,
    width: 330,
  },
  options01: {
    fontSize: 16,
    color: 'black',
    // letterSpacing: -1.5,
    lineHeight: 18,
  },
  made: {
    backgroundColor: '#000',
    padding: 7,
    width: 140,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
    marginBottom: 400,
    marginLeft: 10,
  },
  madetext: {
    fontSize: 16,
    color: 'white',
    // letterSpacing: 305,
    lineHeight: 18,
  },
  text01: {
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#000',
    padding: 10,
    width: 330,
    height: 40,
    marginLeft: -200,
    // letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#000',
    marginTop: 10,
    width: 330,
    height: 40,
    marginLeft: 20,
    // letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  pickerItem: {
    fontSize: 16,
    color: 'black',
  },
  pickerLabel: {
    // letterSpacing: -1,
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
    // letterSpacing: -1,
    fontSize: 15,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 8,
  },
});

export default Aicover;
