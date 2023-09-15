/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Splash from './src/screens/Enter/splash';
import Middle from './src/screens/Enter/middle';
import VoiceRange from './src/screens/Enter/voiceRange';
import mainpage from './src/screens/Main/mainpage';
import chatPage from './src/screens/Main/chatPage';
import myPage from './src/screens/Main/mypage';
import songDetail from './src/screens/Main/songDetail';
import aicover from './src/screens/recorder/aicover';
import perfectscore from './src/screens/recorder/perfectscore';
import login from './src/screens/Enter/login';
import Select from './src/screens/Enter/select';

AppRegistry.registerComponent(appName, () => App);
