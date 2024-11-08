import api from '../../config/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
    REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, 
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE, 
    LOGOUT 
} from './ActionType';

// Action cho đăng ký
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData, navigation) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await api.post('/auth/signup', userData);
        const user = response.data;
        if (user.jwt) {
            await AsyncStorage.setItem("jwt", user.jwt);
            await AsyncStorage.setItem("userInfo", JSON.stringify(user));
            console.log("JWT stored:", user.jwt);
            console.log("User Info stored:", user); // kiểm tra user chứa thông tin chính xác
        }
        dispatch(registerSuccess(user));
        alert('Đăng ký thành công!');
        navigation.navigate('Login');
    } catch (error) {
        console.error("Register Error:", error.message);
        dispatch(registerFailure(error.message));
        alert('Đăng ký thất bại: ' + error.message);
    }
};

// Action cho đăng nhập
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => {
    console.log("Login successful, user data:", user);
    return { type: LOGIN_SUCCESS, payload: user };
};
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData, navigation) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await api.post('/auth/signin', userData);
        const user = response.data;

        // Kiểm tra nếu có jwt trong response, tức là đăng nhập thành công
        if (user.jwt) {
            await AsyncStorage.setItem("jwt", user.jwt);
            await AsyncStorage.setItem("userInfo", JSON.stringify(user));
            console.log("JWT stored:", user.jwt);
            console.log("User Info stored:", user); // kiểm tra user chứa thông tin chính xác
            dispatch(loginSuccess(user));
            alert('Đăng nhập thành công!');
            dispatch(getUser()); // Lấy thông tin người dùng
            navigation.navigate('AccountStack'); // Chuyển hướng khi đăng nhập thành công
        } else {
            // Nếu không có jwt trong response, tức là thông tin đăng nhập sai
            throw new Error('Sai email hoặc mật khẩu.');
        }
    } catch (error) {
        console.error("Login Error:", error.message);
        dispatch(loginFailure(error.message));
        alert('Đăng nhập thất bại: ' + (error.response?.data?.message || error.message));
        // Không chuyển hướng đến 'AccountStack' nếu có lỗi
    }
};

// Action cho lấy thông tin người dùng
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => {
    console.log("Get user successful, user data:", user);
    return { type: GET_USER_SUCCESS, payload: user };
};
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = () => async (dispatch) => {
    dispatch(getUserRequest());
    try {
        const jwt = await AsyncStorage.getItem("jwt");
        console.log("JWT in getUser:", jwt); // kiểm tra JWT có đúng không
        const response = await api.get('/api/users/profile', {
            headers: { "Authorization": `Bearer ${jwt}` }
        });
        const user = response.data;
        console.log("User data fetched from profile:", user); // kiểm tra user từ API
        dispatch(getUserSuccess(user));
    } catch (error) {
        console.error("Get User Error:", error.message);
        dispatch(getUserFailure(error.message));
    }
};

// Action cho đăng xuất
export const logout = () => async (dispatch) => {
    await AsyncStorage.removeItem("jwt");
    await AsyncStorage.removeItem("userInfo");
    console.log("User logged out and AsyncStorage cleared");
    dispatch({ type: LOGOUT });
    alert('Đăng xuất thành công!');
};
