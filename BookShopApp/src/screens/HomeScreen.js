import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Tìm kiếm sách..."
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
        </View>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => navigation.navigate('Cart')} // Chuyển đến màn hình Giỏ hàng
        >
          <Ionicons name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Nội dung màn hình Trang chủ */}
      <View style={styles.content}>
        <Text>Đây là màn hình Trang chủ</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#8a2be2',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 5,
    height: 40,
  },
  cartButton: {
    marginLeft: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
