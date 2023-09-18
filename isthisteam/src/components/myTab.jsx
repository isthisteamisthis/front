// import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Text} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import MainPage from '../screens/Main/mainpage';
// import Community from '../screens/Main/commuity';
// import Reselect from '../screens/Enter/reselect';
// import MyPage from '../screens/Main/mypage';
// import {useNavigation} from '@react-navigation/native';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// // const onPress = () => {
// //   navigation.navigate();
// // };

// function MyTab({navigation}) {
//   const onPress = () => {
//     navigation.navigate('VoiceRange');
//   };

//   function Home() {
//     const navigation = useNavigation();
//     return <Text>Home</Text>;
//   }

//   function community() {
//     return <Text>Community</Text>;
//   }

//   function record() {
//     return <Text>Record</Text>;
//   }

//   function mypage() {
//     return <Text>Mypage</Text>;
//   }

//   function BottomTabNavigationApp() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator initialRouteName="Home">
//           <Tab.Screen
//             name="Home"
//             component={MainPage}
//             onPress={() => navigation.navigate('Mainpage')}
//             options={{
//               title: 'HOME',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="home" color={color} size={size} />
//               ),
//             }}
//           />

//           <Tab.Screen
//             name="Community"
//             component={Community}
//             options={{
//               title: 'COMMUNITY',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="Community" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="MyPage"
//             component={MyPage}
//             options={{
//               title: 'MYPAGE',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="MyPage" color={color} size={size} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="Message"
//             component={MessageScreen}
//             options={{
//               title: '메시지',
//               tabBarIcon: ({color, size}) => (
//                 <Icon name="message" color={color} size={size} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

// export default MyTab;
