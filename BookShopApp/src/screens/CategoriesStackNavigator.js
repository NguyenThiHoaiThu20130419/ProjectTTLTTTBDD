import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './CategoriesScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

const CategoriesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CategoriesStack" 
        component={CategoriesScreen} 
        options={{ 
          title: 'Danh mục', 
          headerStyle: {
            height: 50,
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

export default CategoriesStackNavigator;
