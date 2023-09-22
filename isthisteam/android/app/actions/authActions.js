import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const loginWithKakao = accessToken => async dispatch => {
  try {
    // 로그인 성공 시, 토큰을 AsyncStorage에 저장
    await AsyncStorage.setItem('accessToken', accessToken);
    dispatch({type: LOGIN_SUCCESS, payload: accessToken});
  } catch (error) {
    console.error('Kakao login error:', error);
  }
};

export const logout = () => async dispatch => {
  try {
    // 로그아웃 시, AsyncStorage에서 토큰 제거
    await AsyncStorage.removeItem('accessToken');
    dispatch({type: LOGOUT});
  } catch (error) {
    console.error('Logout error:', error);
  }
};
