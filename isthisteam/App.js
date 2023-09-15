import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './src/screens/Enter/splash';
import Select from './src/screens/Enter/select';
import VoiceRange from './src/screens/Enter/voiceRange';
import MainPage from './src/screens/Main/mainPage';
// import Onboarding from './src/screens/Enter/onboarding';

const Stack = createStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          {/* <Stack.Screen name="Onboarding" conponent={Onboarding} /> */}
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="VoiceRange" component={VoiceRange} />
          <Stack.Screen name="MainPage" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
