import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AccountScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Ionicons name="happy-outline" size={80} color="#8a2be2" />
        <Text style={styles.welcomeText}>Chào mừng bạn đến với T&T</Text>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Đăng nhập / Đăng ký tài khoản</Text>
        </TouchableOpacity>
      </View>

      {/* Đơn hàng của tôi */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Đơn hàng của tôi</Text>
        <View style={styles.orderIconsContainer}>
          <OrderStatus icon="time-outline" label="Chờ xác nhận" />
          <OrderStatus icon="car-outline" label="Đang vận chuyển" />
          <OrderStatus icon="checkmark-done-outline" label="Đã giao" />
          <OrderStatus icon="swap-horizontal-outline" label="Đổi trả" />
        </View>
      </View>

      {/* Đánh giá sản phẩm */}
      <View style={styles.section}>
        <View style={styles.reviewContainer}>
          <Text style={styles.sectionTitle}>Đánh giá sản phẩm</Text>
          <TouchableOpacity style={styles.arrowButton} onPress={() => {/* Chuyển hướng đến màn hình đánh giá */}}>
            <Ionicons name="chevron-forward" size={20} color="#8a2be2" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Đề xuất sản phẩm */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sản phẩm có thể bạn thích</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mockProducts.map((product, index) => (
            <View key={index} style={styles.productItem}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.productPrice}>{product.price}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Quan tâm */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quan tâm</Text>
        <View style={styles.interestIconsContainer}>
          <InterestItem icon="eye-outline" label="Đã xem" />
          <InterestItem icon="heart-outline" label="Yêu thích" />
          <InterestItem icon="cart-outline" label="Mua lại" />
        </View>
      </View>
    </ScrollView>
  );
};

// Component trạng thái đơn hàng
const OrderStatus = ({ icon, label }) => (
  <View style={styles.orderItem}>
    <Ionicons name={icon} size={30} color="#8a2be2" />
    <Text style={styles.orderLabel}>{label}</Text>
  </View>
);

// Component mục quan tâm
const InterestItem = ({ icon, label }) => (
  <View style={styles.interestItem}>
    <Ionicons name={icon} size={30} color="#8a2be2" />
    <Text style={styles.interestLabel}>{label}</Text>
  </View>
);

// Dữ liệu giả định cho sản phẩm
const mockProducts = [
  { name: 'Sản phẩm 1', price: '100.000đ', image: 'https://via.placeholder.com/100' },
  { name: 'Sản phẩm 2', price: '200.000đ', image: 'https://via.placeholder.com/100' },
  { name: 'Sản phẩm 3', price: '300.000đ', image: 'https://via.placeholder.com/100' },
  { name: 'Sản phẩm 4', price: '400.000đ', image: 'https://via.placeholder.com/100' },
];

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  loginButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#8a2be2',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#8a2be2',
    fontSize: 16,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  orderItem: {
    alignItems: 'center',
  },
  orderLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  reviewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrowButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productItem: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  productName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  interestIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  interestItem: {
    alignItems: 'center',
  },
  interestLabel: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default AccountScreen;
