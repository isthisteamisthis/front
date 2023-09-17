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
import Splash from './src/screens/Enter/splash';
import Select from './src/screens/Enter/select';
import MyPage from './src/screens/Main/mypage';
import VoiceRange from './src/screens/Enter/voiceRange';
import mainpage from './src/screens/Main/mainpage';
import Middle from './src/screens/Enter/middle';
import VoiceRangehigh from './src/screens/Enter/voiceRangehigh';
import Community from './src/screens/Main/commuity';
import Aicover from './src/screens/recorder/aicover';
// import ChatModal from './src/screens/Main/ChatModal';
// import ChatPage from './src/screens/Main/chatPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Select"
            component={Select}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Middle"
            component={Middle}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VoiceRange"
            component={VoiceRange}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="VoiceRangehigh"
            component={VoiceRangehigh}
            options={{headerShown: false}}
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
            component={MyPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AiCover"
            component={Aicover}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="ChatModal" component={ChatModal} />
          <Stack.Screen name="ChatPage" component={ChatPage} /> */}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
