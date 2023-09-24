import React from 'react';
import Swiper from 'react-native-swiper';
import ModalDropdown from 'react-native-modal-dropdown';
import Onboarding from 'react-native-onboarding-swiper';
import DocumentPicker from 'react-native-document-picker';
import {AudioPlayer} from 'react-native-simple-audio-player';
import {launchImageLibrary} from 'react-native-image-picker';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// component
import BottomTab from './src/components/bottomTab';

// enter -------------------------------------------------
import middle from './src/screens/Enter/middle';
import splash from './src/screens/Enter/splash';
import select from './src/screens/Enter/select';
import SongDetail from './src/screens/Main/songDetail';
import kakaoLogin from './src/screens/Enter/kakaoLogin';
import voiceRange from './src/screens/Enter/voiceRange';
import kakaoLogout from './src/screens/Enter/kakaoLogout';
import voiceRangeHigh from './src/screens/Enter/voiceRangeHigh';

// main ----------------------------------------------------
import myPage from './src/screens/Main/myPage';
import mainpage from './src/screens/Main/mainPage';
import recSongList from './src/screens/Main/recSongList';
import openUserPage from './src/screens/Main/openUserPage';

// message ------------------------------------------------------
import Community from './src/screens/Message/commuity';
import MidSelect from './src/screens/Message/midSelect';
import SendMessage from './src/screens/Message/sendMessage';
import SentMessages from './src/screens/Message/SentMessages';
import ReplyMessage from './src/screens/Message/replyMessage';
import MessageDetail from './src/screens/Message/messageDetail';
import SentMessageDetail from './src/screens/Message/SentMessageDetail';

// record ---------------------------------------------------
import aiCover from './src/screens/recorder/aiCover';
import Karaoke from './src/screens/recorder/Karaoke';
import CoverList from './src/screens/recorder/coverList';
import recSelect from './src/screens/recorder/recSelect';
import coverDetail from './src/screens/recorder/coverDetail';
import KaraokeList from './src/screens/recorder/KaraokeList';
import PerfectScore from './src/screens/recorder/perfectScore';

// ----------------------------------------------------------

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        {/* ---------------------------------------- ENTER page ----------------------------------------------------- */}
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Select"
            component={select}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Middle"
            component={middle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="KakaoLogin"
            component={kakaoLogin}
            options={{headerbackVisible: false, headerShown: false}}
          />
          <Stack.Screen
            name="KakaoLogout"
            component={kakaoLogout}
            options={{headerbackVisible: false, headerShown: false}}
          />
          <Stack.Screen
            name="VoiceRange"
            component={voiceRange}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VoiceRangehigh"
            component={voiceRangeHigh}
            options={{headerShown: false}}
          />

          {/* ---------------------------------------- MAIN page----------------------------------------------------- */}
          <Stack.Screen
            name="Mainpage"
            component={mainpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyPage"
            component={myPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="openUserPage"
            component={openUserPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="recSongList"
            component={recSongList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SongDetail"
            component={SongDetail}
            options={{headerShown: false}}
          />

          {/* ------------------------------------------- RECORD page----------------------------------------------------- */}

          <Stack.Screen
            name="Karaoke"
            component={Karaoke}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="coverDetail"
            component={coverDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="recSelect"
            component={recSelect}
            options={{headerbackVisible: false, headerShown: false}}
          />
          <Stack.Screen
            name="AiCover"
            component={aiCover}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="PerfectScore"
            component={PerfectScore}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="KaraokeList"
            component={KaraokeList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CoverList"
            component={CoverList}
            options={{headerShown: false}}
          />

          {/* ---------------------------------------- MESSAGE page----------------------------------------------------- */}
          <Stack.Screen
            name="SentMessages"
            component={SentMessages}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SendMessage"
            component={SendMessage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ReplyMessage"
            component={ReplyMessage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="messageDetail"
            component={MessageDetail}
            options={{headerbackVisible: false, headerShown: false}}
          />
          <Stack.Screen
            name="Community"
            component={Community}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SentMessageDetail"
            component={SentMessageDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MidSelect"
            component={MidSelect}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
