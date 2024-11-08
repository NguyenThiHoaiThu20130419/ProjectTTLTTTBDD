import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../redux/Auth/Action';

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(state => state.auth);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const userData = { firstName, lastName, email, password };
    dispatch(register(userData, navigation)); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào Mừng Bạn Đến Với T&T</Text>

      <View style={styles.nameContainer}>
        <TextInput 
          style={[styles.input, styles.halfInput]} 
          placeholder="First Name*" 
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput 
          style={[styles.input, styles.halfInput]} 
          placeholder="Last Name*" 
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

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
        style={styles.registerButton} 
        onPress={handleRegister} 
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.registerButtonText}>Đăng ký</Text>
        )}
      </TouchableOpacity>

      <View style={styles.existingAccountContainer}>
        <Text style={styles.existingAccountPrompt}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.existingAccountText}>Đăng nhập</Text>
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
    marginBottom: 30,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  halfInput: {
    width: '48%',
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
    color: '#0000FF',
    fontStyle: 'italic',
  },
  registerButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0000FF',
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
