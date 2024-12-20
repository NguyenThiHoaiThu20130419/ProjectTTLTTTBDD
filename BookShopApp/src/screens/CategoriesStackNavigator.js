import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from './CategoriesScreen';
import CartScreen from './CartScreen';
import ProductDetailsScreen from './ProductDetailsScreen';

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
            height: 40,
          },
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: 'Giỏ hàng' }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          title: 'Chi tiết sản phẩm',
          headerStyle: {
            backgroundColor: '#f9f9f9',
          },
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStackNavigator;
