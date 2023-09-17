import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';

function Aicover() {
  const [response, setResponse] = useState('');
  const [imageFile, setImageFile] = useState('');
  const [textInput, setTextInput] = useState('');
  const [audioFile, setAudioFile] = useState(null);

  // 이미지 가져오기 함수
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

  // 음원 파일 가져오기 함수
  const onSelectAudio = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.audio],
      });

      console.log(
        result.uri,
        result.type, // mime 타입
        result.name,
        result.size,
      );

      setAudioFile(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // 사용자가 취소한 경우
      } else {
        throw err;
      }
    }
  };

  // AI 커버 생성 함수
  const onCreateAiCover = () => {
    // imageFile, audioFile, textInput 등을 사용하여 AI 커버 생성하는 로직 구현
    // 이 부분에 AI 커버 생성 로직을 작성하세요. from GPT !
    console.log('AI 커버 생성 버튼이 눌렸습니다.');
    console.log('Image File:', imageFile);
    console.log('Audio File:', audioFile);
    console.log('Text Input:', textInput);

    // 실제 AI 커버 생성 로직을 구현하세요.
  };

  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={response ? {uri: response.assets[0].uri} : null}
                style={styles.img}
              />
            </View>

            <View style={styles.rightContent}>
              <TouchableOpacity
                style={styles.imageButton}
                onPress={onSelectImage}>
                <Text style={styles.buttonText}>
                  {imageFile ? '이미지 변경하기' : '이미지 추가하기'}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.audioButton}
                onPress={onSelectAudio}>
                <Text style={styles.buttonText}>
                  {audioFile ? '음원 파일 변경하기' : '음원 파일 추가하기'}
                </Text>
              </TouchableOpacity>
              <TextInput
                style={styles.textInput}
                placeholder="[ 가수 - 노래 제목 ] 을 입력하세요"
                value={textInput}
                onChangeText={text => setTextInput(text)}
              />
              <ModalDropdown
                textoptions={['성시경', '브루노마스', '아이유', '조세호']}
                dropdownTextStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownContainer}
                textoptionsStyle={styles.options01}
                initialScrollIndex={null}>
                <Text style={styles.text01}>목소리 선택</Text>
              </ModalDropdown>
              <TouchableOpacity
                style={styles.createAiCoverButton}
                onPress={onCreateAiCover} // AI 커버 생성 함수 연결
              >
                <Text style={styles.createAiCoverText}>AI 커버 생성</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    marginTop: -120,
    marginBottom: 20,
    marginLeft: 40,
  },
  imageButton: {
    backgroundColor: '#000',
    padding: 7,
    width: 140,
    borderRadius: 5,
    marginTop: 120,
    alignItems: 'center',
    marginBottom: 10,
  },
  audioButton: {
    backgroundColor: '#000',
    padding: 7,
    width: 140,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    marginRight: 0,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    letterSpacing: -1.5,
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
    marginLeft: -200,
    letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
    borderRadius: 10,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    marginLeft: -200,
    width: 330,
    height: 40,
    letterSpacing: -1,
    textAlign: 'center',
    color: 'black',
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
  options01: {
    fontSize: 16,
    color: 'white',
    letterSpacing: -1.5,
    lineHeight: 18,
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
