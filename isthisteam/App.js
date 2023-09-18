import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DocumentPicker from 'react-native-document-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import Onboarding from 'react-native-onboarding-swiper';
// import Login from './src/screens/Enter/login';
import Swiper from 'react-native-swiper';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';

// enter -
import MyTab from './src/components/myTab';
import Splash from './src/screens/Enter/splash';
import Select from './src/screens/Enter/select';
import Middle from './src/screens/Enter/middle';
import VoiceRange from './src/screens/Enter/voiceRange';
import VoiceRangehigh from './src/screens/Enter/voiceRangehigh';
import Reselect from './src/screens/Enter/reselect';
import Login from './src/screens/Enter/login';
import Logout from './src/screens/Enter/logout';
// import SongDetail from './src/screens/Main/songDetail';

// main -
import MyPage from './src/screens/Main/mypage';
import mainpage from './src/screens/Main/mainpage';
import Community from './src/screens/Main/commuity';
// import ChatModal from './src/screens/Main/ChatModal';
// import ChatPage from './src/screens/Main/chatPage';

// record -
import Aicover from './src/screens/recorder/aicover';
import PerfectScore from './src/screens/recorder/perfectscore';

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
          {/* <Stack.Screen
            name="Reselect"
            component={Reselect}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Logout"
            component={Logout}
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
          {/* <Stack.Screen
            name="SongDetail"
            component={SongDetail}
            options={{headerShown: false}}
          /> */}
          <Stack.Screen
            name="AiCover"
            component={Aicover}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen
            name="MyTab"
            component={MyTab}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen
            name="PerfectScore"
            component={PerfectScore}
            options={{headerShown: false}}
          /> */}
          {/* <Stack.Screen name="ChatModal" component={ChatModal} options={{headerShown: false} />
          <Stack.Screen name="ChatPage" component={ChatPage} options={{headerShown: false} /> */}
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
