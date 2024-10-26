import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import AccountScreen from './src/screens/AccountScreen';
import NotificationScreen from './src/screens/NotificationScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Categories') iconName = 'list';
            else if (route.name === 'Notification') iconName = 'notifications';
            else if (route.name === 'Account') iconName = 'person';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#8a2be2',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, // Ẩn header mặc định của navigation
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Trang chủ' }} />
        <Tab.Screen name="Categories" component={CategoriesScreen} options={{ tabBarLabel: 'Danh mục' }} />
        <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarLabel: 'Thông báo' }} />
        <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarLabel: 'Tài khoản' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
