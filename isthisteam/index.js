import App from './App';
import axios from 'axios';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

axios.defaults.baseURL = //"백엔드 도메인!";
  axios.defaults.withCredentials = true;

// enter ---------------------------------------------
import middle from './src/screens/Enter/middle';
import splash from './src/screens/Enter/splash';
import select from './src/screens/Enter/select';
import voiceRange from './src/screens/Enter/voiceRange';
import kakaoLogin from './src/screens/Enter/kakaoLogin';
import kakaoLogout from './src/screens/Enter/kakaoLogout';
import voiceRangeHigh from './src/screens/Enter/voiceRangeHigh';

// main ---------------------------------------------
import myPage from './src/screens/Main/myPage';
import mainPage from './src/screens/Main/mainPage';
import songDetail from './src/screens/Main/songDetail';
import recSongList from './src/screens/Main/recSongList';
import openUserPage from './src/screens/Main/openUserPage';

// message ------------------------------------------------------------
import Community from './src/screens/Message/commuity';
import MidSelect from './src/screens/Message/midSelect';
import sendMessage from './src/screens/Message/sendMessage';
import ReplyMessage from './src/screens/Message/replyMessage';
import SentMessages from './src/screens/Message/SentMessages';
import SentMessageDetail from './src/screens/Message/sentMessageDetail';

// recorder ----------------------------------------------
import Karaoke from './src/screens/recorder/Karaoke';
import aicover from './src/screens/recorder/aiCover';
import recSelect from './src/screens/recorder/recSelect';
import CoverList from './src/screens/recorder/coverList';
import coverDetail from './src/screens/recorder/coverDetail';
import KaraokeList from './src/screens/recorder/KaraokeList';
import MyAiCoverDetail from './src/screens/recorder/myAiCoverDetail';
import PostDetail from './src/screens/recorder/postDetail';

AppRegistry.registerComponent(appName, () => App);
