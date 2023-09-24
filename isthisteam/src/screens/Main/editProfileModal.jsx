// import React, {useState} from 'react';
// import {View, Text, TextInput, Button, Modal, StyleSheet} from 'react-native';

// const EditProfileModal = ({isVisible, onCancel, onSave, initialData}) => {
//   const [name, setName] = useState('');
//   const [introduction, setIntroduction] = useState(initialData.introduction);
//   const [vocalRange, setVocalRange] = useState(initialData.vocalRange);

//   const handleSave = () => {
//     // Modify this function to handle saving the updated data (e.g., send it to the server)
//     const updatedData = {
//       name,
//       introduction,
//       vocalRange,
//     };

//     onSave(updatedData);
//   };

//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View style={styles.container}>
//         <Text style={styles.title}>개인정보 수정</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="이름"
//           value={name}
//           onChangeText={text => setName(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="자기소개"
//           value={introduction}
//           onChangeText={text => setIntroduction(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="음역대"
//           value={vocalRange}
//           onChangeText={text => setVocalRange(text)}
//         />
//         <View style={styles.buttonContainer}>
//           <Button title="저장" onPress={handleSave} />
//           <Button title="취소" onPress={onCancel} color="red" />
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     fontSize: 18,
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//     marginBottom: 16,
//     paddingVertical: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
// });

// export default EditProfileModal;
