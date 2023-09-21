/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

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
// import EditProfileModal from './src/screens/Main/editProfileModal';
import songDetail from './src/screens/Main/songDetail';
import songList from './src/screens/Main/songList';
import ReplyMessage from './src/screens/Message/replyMessage';
import SentMessages from './src/screens/Message/SentMessages';

// recorder ----------------------------------------------
import aicover from './src/screens/recorder/aiCover';
import perfectScore from './src/screens/recorder/perfectScore';
import recordSelect from './src/screens/recorder/recordSelect';

AppRegistry.registerComponent(appName, () => App);
