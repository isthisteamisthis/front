import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  accessToken: null,
};

// AsyncStorage에서 토큰 가져오기
AsyncStorage.getItem('accessToken')
  .then(token => {
    if (token) {
      initialState.accessToken = token;
    }
  })
  .catch(error => {
    console.error('AsyncStorage error:', error);
  });

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, accessToken: action.payload};
    case LOGOUT:
      return {...state, accessToken: null};
    default:
      return state;
  }
};

export default authReducer;
