import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào Mừng Bạn Đến Với T&T</Text>

      {/* Username Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Tên đăng nhập" 
      />

      {/* Password Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Mật khẩu" 
        secureTextEntry 
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </TouchableOpacity>

      {/* Message for new users with navigation */}
      <View style={styles.newAccountContainer}>
        <Text style={styles.newAccountPrompt}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.newAccountText}>Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>

      {/* Or continue with */}
      <Text style={styles.orContinueText}>Hoặc tiếp tục bằng</Text>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-facebook" size={30} color="#8a2be2" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="logo-google" size={30} color="#8a2be2" />
        </TouchableOpacity>
      </View>

      {/* Terms and Conditions Text */}
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
    color: '#8a2be2',
    marginBottom: 50, 
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#8a2be2',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10, 
    backgroundColor: '#fff',
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
    color: '#8a2be2',
    fontStyle: 'italic',
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8a2be2',
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
