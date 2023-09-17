// import React, {useState} from 'react';
// import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
// import ChatModal from './ChatModal';

// const ChatPage = () => {
//   const [chatData, setChatData] = useState([]);
//   const [selectedChat, setSelectedChat] = useState(null);

//   const initialChatData = [
//     // 채팅 데이터
//   ];

//   const handleChatPress = chat => {
//     setSelectedChat(chat);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>채팅 목록</Text>
//       <FlatList
//         data={chatData}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => (
//           <TouchableOpacity
//             style={styles.chatItem}
//             onPress={() => handleChatPress(item)}>
//             <Text style={styles.chatTitle}>{item.title}</Text>
//             <Text style={styles.lastMessage}>{item.lastMessage}</Text>
//             <Text style={styles.timestamp}>{item.timestamp}</Text>
//           </TouchableOpacity>
//         )}
//       />
//       {/* 선택한 채팅을 모달로 표시 */}
//       {selectedChat && (
//         <ChatModal
//           visible={true}
//           onClose={() => setSelectedChat(null)}
//           chatData={selectedChat}
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   chatItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   chatTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   lastMessage: {
//     fontSize: 16,
//   },
//   timestamp: {
//     fontSize: 12,
//     color: 'gray',
//   },
// });

// export default ChatPage;
