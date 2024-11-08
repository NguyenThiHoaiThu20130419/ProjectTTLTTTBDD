import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/Auth/Action';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    dispatch(login({ email, password }, navigation)); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào Mừng Bạn Đến Với T&T</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Email*" 
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput 
        style={styles.input} 
        placeholder="Password*" 
        secureTextEntry 
        value={password}
        onChangeText={setPassword}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={handleLogin} 
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Đăng nhập</Text>
        )}
      </TouchableOpacity>

      <View style={styles.newAccountContainer}>
        <Text style={styles.newAccountPrompt}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.newAccountText}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orContinueText}>Hoặc tiếp tục bằng</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-facebook" size={30} color="#0000FF" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-google" size={30} color="#0000FF" />
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        <Text style={styles.termsBoldText}>
          Bằng việc tiếp tục, bạn đã đọc và đồng ý điều khoản sử dụng, chính sách bảo mật thông tin cá nhân của T&T
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0000FF',
    marginBottom: 50, 
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#0000FF',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10, 
    backgroundColor: '#fff',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  newAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
  },
  newAccountPrompt: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  newAccountText: {
    fontSize: 14,
    color: '#0000FF',
    fontStyle: 'italic',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0000FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30, 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orContinueText: {
    marginVertical: 5, 
    color: '#333',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconButton: {
    padding: 10,
  },
  termsText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333',
    marginTop: 10, 
  },
  termsBoldText: {
    fontWeight: 'bold',
  },
});

export default LoginScreen;
