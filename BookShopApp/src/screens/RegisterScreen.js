import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RegisterScreen = ({ navigation }) => {
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

      {/* Confirm Password Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Xác nhận mật khẩu" 
        secureTextEntry 
      />

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>Đăng ký</Text>
      </TouchableOpacity>

      {/* Message for existing users with navigation */}
      <View style={styles.existingAccountContainer}>
        <Text style={styles.existingAccountPrompt}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.existingAccountText}>Đăng nhập</Text>
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
    marginBottom: 30, 
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
  existingAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
  },
  existingAccountPrompt: {
    fontSize: 14,
    color: '#333',
    marginRight: 5,
  },
  existingAccountText: {
    fontSize: 14,
    color: '#8a2be2',
    fontStyle: 'italic',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 30, 
  },
  registerButtonText: {
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

export default RegisterScreen;