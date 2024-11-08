import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux'; 
import { store } from './src/redux/Store';

import HomeStackNavigator from './src/screens/HomeStackNavigator';
import NotificationScreen from './src/screens/NotificationScreen';
import AccountStackNavigator from './src/screens/AccountStackNavigator';
import CategoriesStackNavigator from './src/screens/CategoriesStackNavigator';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}> 
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
            tabBarActiveTintColor: '#0000FF',
            tabBarInactiveTintColor: 'gray',
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeStackNavigator} options={{ tabBarLabel: 'Trang chủ' }} />
          <Tab.Screen name="Categories" component={CategoriesStackNavigator} options={{ tabBarLabel: 'Danh mục' }} />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{ tabBarLabel: 'Thông báo' }} />
          <Tab.Screen name="Account" component={AccountStackNavigator} options={{ tabBarLabel: 'Tài khoản' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider> 
  );
};

export default App;
