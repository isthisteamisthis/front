/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// enter -
import Splash from './src/screens/Enter/splash';
import Login from './src/screens/Enter/login';
import Logout from './src/screens/Enter/logout';
import Select from './src/screens/Enter/select';
import VoiceRange from './src/screens/Enter/voiceRange';
import VoiceRangehigh from './src/screens/Enter/voiceRangehigh';

// main -
import mainpage from './src/screens/Main/mainpage';
import MyPage from './src/screens/Main/mypage';
// import songDetail from './src/screens/Main/songDetail';
// import chatPage from './src/screens/Main/chatPage';
// import ChatModal from './src/screens/Main/ChatModal';

// recorder -
import Aicover from './src/screens/recorder/aicover';
import perfectscore from './src/screens/recorder/perfectscore';

AppRegistry.registerComponent(appName, () => App);
