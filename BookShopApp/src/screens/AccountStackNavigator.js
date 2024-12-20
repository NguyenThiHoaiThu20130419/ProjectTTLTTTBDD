import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from './AccountScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountStack"
        component={AccountScreen}
        options={{
          title: 'Tài khoản',
          headerStyle: {
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: 'Đăng nhập' }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: 'Đăng ký' }}
      />
    </Stack.Navigator>
  );
};

export default AccountStackNavigator;
