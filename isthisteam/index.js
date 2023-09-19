/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// enter -
// import MyTab from './src/components/myTab';
import Splash from './src/screens/Enter/splash';
import KakaoLogin from './src/screens/Enter/kakaoLogin';
import KakaoLogout from './src/screens/Enter/kakaoLogout';
import Select from './src/screens/Enter/select';
import VoiceRange from './src/screens/Enter/voiceRange';
import VoiceRangehigh from './src/screens/Enter/voiceRangehigh';

// main -
import mainPage from './src/screens/Main/mainPage';
import MyPage from './src/screens/Main/myPage';
// import songDetail from './src/screens/Main/songDetail';
// import chatPage from './src/screens/Main/chatPage';
// import ChatModal from './src/screens/Main/ChatModal';

// recorder -
import Aicover from './src/screens/recorder/aiCover';
import perfectscore from './src/screens/recorder/perfectScore';

AppRegistry.registerComponent(appName, () => App);
