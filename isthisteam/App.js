import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import Onboarding from 'react-native-onboarding-swiper';
import Swiper from 'react-native-swiper';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

// component
import BottomTab from './src/components/bottomTab';

// enter -------------------------------------------------
import splash from './src/screens/Enter/splash';
import select from './src/screens/Enter/select';
import middle from './src/screens/Enter/middle';
import voiceRange from './src/screens/Enter/voiceRange';
import voiceRangeHigh from './src/screens/Enter/voiceRangeHigh';
import kakaoLogin from './src/screens/Enter/kakaoLogin';
import kakaoLogout from './src/screens/Enter/kakaoLogout';
import SongDetail from './src/screens/Main/songDetail';

// main ----------------------------------------------------
import myPage from './src/screens/Main/myPage';
// import EditProfileModal from './src/screens/Main/editProfileModal';
import mainpage from './src/screens/Main/mainPage';
import Community from './src/screens/Message/commuity';
import songList from './src/screens/Main/songList';
import MessageDetail from './src/screens/Message/messageDetail';
import ReplyMessage from './src/screens/Message/replyMessage';
import SentMessages from './src/screens/Message/SentMessages';

// record ---------------------------------------------------
import aiCover from './src/screens/recorder/aiCover';
import PerfectScore from './src/screens/recorder/perfectScore';
import recordSelect from './src/screens/recorder/recordSelect';

// ----------------------------------------------------------

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
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
          {/* <Stack.Screen
            name="EditProfileModal"
            component={EditProfileModal}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Middle"
            component={middle}
            options={{headerShown: false}}
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
          <Stack.Screen
            name="songList"
            component={songList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ReplyMessage"
            component={ReplyMessage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SentMessages"
            component={SentMessages}
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
            name="messageDetail"
            component={MessageDetail}
            options={{headerbackVisible: false, headerShown: false}}
          />
          <Stack.Screen
            name="Mainpage"
            component={mainpage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Community"
            component={Community}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MyPage"
            component={myPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SongDetail"
            component={SongDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AiCover"
            component={aiCover}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PerfectScore"
            component={PerfectScore}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RecordSelect"
            component={recordSelect}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="ChatModal" component={ChatModal} options={{headerShown: false} />
          <Stack.Screen name="ChatPage" component={ChatPage} options={{headerShown: false} /> */}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
