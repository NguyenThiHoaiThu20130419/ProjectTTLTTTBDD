import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeStack" 
        component={HomeScreen} 
        options={{ 
          title: 'Trang chủ', 
          headerStyle: {
            height: 40,
          },
        }} 
      />
      <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        options={{ title: 'Giỏ hàng' }} 
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
