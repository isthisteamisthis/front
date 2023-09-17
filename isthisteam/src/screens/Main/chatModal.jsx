// import React from 'react';
// import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

// const ChatModal = ({visible, onClose, chatData}) => {
//   return (
//     <Modal animationType="slide" transparent={true} visible={visible}>
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <Text style={styles.chatTitle}>{chatData.title}</Text>
//           <Text style={styles.chatMessage}>{chatData.message}</Text>
//           <TouchableOpacity style={styles.closeButton} onPress={onClose}>
//             <Text style={styles.closeButtonText}>닫기</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: 'white',
//     padding: 16,
//     borderRadius: 8,
//     width: '80%',
//   },
//   chatTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   chatMessage: {
//     fontSize: 16,
//     marginTop: 8,
//   },
//   closeButton: {
//     marginTop: 16,
//     alignSelf: 'flex-end',
//   },
//   closeButtonText: {
//     color: 'blue',
//     fontSize: 16,
//   },
// });

// export default ChatModal;
