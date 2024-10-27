import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeStackNavigator from './src/screens/HomeStackNavigator';
import CategoriesScreen from './src/screens/CategoriesScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import AccountStackNavigator from './src/screens/AccountStackNavigator';

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
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarLabel: 'Trang chủ' }} />
        <Tab.Screen name="Categories" component={CategoriesScreen} options={{ tabBarLabel: 'Danh mục' }} />
        <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarLabel: 'Thông báo' }} />
        <Tab.Screen name="Account" component={AccountStackNavigator} options={{ tabBarLabel: 'Tài khoản' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
