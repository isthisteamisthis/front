/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import axios from 'axios';
import {name as appName} from './app.json';

axios.defaults.baseURL = //"백엔드 도메인!";
  axios.defaults.withCredentials = true;

// enter ---------------------------------------------
import splash from './src/screens/Enter/splash';
import kakaoLogin from './src/screens/Enter/kakaoLogin';
import kakaoLogout from './src/screens/Enter/kakaoLogout';
import select from './src/screens/Enter/select';
import voiceRange from './src/screens/Enter/voiceRange';
import voiceRangeHigh from './src/screens/Enter/voiceRangeHigh';
import middle from './src/screens/Enter/middle';

// main ---------------------------------------------
import mainPage from './src/screens/Main/mainPage';
import myPage from './src/screens/Main/myPage';
import openUserPage from './src/screens/Main/openUserPage';
// import EditProfileModal from './src/screens/Main/editProfileModal';
import songDetail from './src/screens/Main/songDetail';
import recSongList from './src/screens/Main/recSongList';

// message ------------------------------------------------------------
import ReplyMessage from './src/screens/Message/replyMessage';
import SentMessages from './src/screens/Message/SentMessages';
import Community from './src/screens/Message/commuity';
import sentMessageDetail from './src/screens/Message/sentMessageDetail';

// recorder ----------------------------------------------
import aicover from './src/screens/recorder/aiCover';
import recSelect from './src/screens/recorder/recSelect';
import perfectScore from './src/screens/recorder/perfectScore';
import coverDetail from './src/screens/recorder/coverDetail';
import coverListPage from './src/screens/recorder/coverListPage';

AppRegistry.registerComponent(appName, () => App);
