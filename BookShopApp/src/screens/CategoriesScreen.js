import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoriesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1'); // Lưu danh mục đã chọn

  // Dữ liệu giả định cho danh mục
  const categories = [
    { id: '1', name: 'Hướng nghiệp & phát triển bản thân' },
    { id: '2', name: 'Tâm lý học' },
    { id: '3', name: 'Văn học kinh điển' },
    { id: '4', name: 'Văn học lãng mạn' },
    { id: '5', name: 'Truyện tranh' },
  ];

  // Dữ liệu giả định cho sản phẩm
  const mockProducts = [
    { id: '1', categoryId: '1', name: 'Sản phẩm 1', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '2', categoryId: '1', name: 'Sản phẩm 2', price: '200.000đ', image: 'https://via.placeholder.com/100' },
    { id: '3', categoryId: '1', name: 'Sản phẩm 3', price: '300.000đ', image: 'https://via.placeholder.com/100' },
    { id: '4', categoryId: '1', name: 'Sản phẩm 4', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '5', categoryId: '1', name: 'Sản phẩm 5', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '6', categoryId: '1', name: 'Sản phẩm 6', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '7', categoryId: '1', name: 'Sản phẩm 7', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '8', categoryId: '1', name: 'Sản phẩm 8', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '9', categoryId: '1', name: 'Sản phẩm 9', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '10', categoryId: '1', name: 'Sản phẩm 10', price: '100.000đ', image: 'https://via.placeholder.com/100' },
    { id: '11', categoryId: '2', name: 'Sản phẩm 11', price: '400.000đ', image: 'https://via.placeholder.com/100' },
    { id: '12', categoryId: '2', name: 'Sản phẩm 12', price: '500.000đ', image: 'https://via.placeholder.com/100' },
    { id: '13', categoryId: '3', name: 'Sản phẩm 13', price: '600.000đ', image: 'https://via.placeholder.com/100' },
  ];

  // Hàm lọc sản phẩm theo danh mục
  const filterProductsByCategory = (categoryId) => {
    return mockProducts.filter(product => product.categoryId === categoryId);
  };

  return (
    <View style={styles.container}>
      {/* Tiêu đề phía trên ô tìm kiếm */}
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

      {/* Chính sách đổi trả */}
      <View style={styles.returnPolicy}>
        <Text style={styles.returnPolicyText}>15 Ngày Đổi Ý và Miễn Phí Trả Hàng</Text>
      </View>

      {/* Nội dung màn hình Danh mục */}
      <View style={styles.content}>
        <View style={styles.row}>
          {/* Cột bên trái: Tên danh mục */}
          <View style={styles.categoriesColumn}>
            <Text style={styles.suggestionTitle}>Danh mục sản phẩm</Text>
            <FlatList
              data={categories}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryItem,
                    selectedCategory === item.id && styles.selectedCategory,
                  ]}
                  onPress={() => setSelectedCategory(item.id)} // Khi nhấn vào danh mục, thay đổi màu nền và sản phẩm
                >
                  <Text style={styles.categoryName}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Cột bên phải: Sản phẩm của danh mục */}
          <View style={styles.productsColumn}>
            <FlatList
              data={filterProductsByCategory(selectedCategory)} // Hiển thị sản phẩm theo danh mục đã chọn
              keyExtractor={(product) => product.id}
              numColumns={3} // Hiển thị 3 sản phẩm mỗi dòng
              renderItem={({ item }) => (
                <View style={styles.productItem}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                </View>
              )}
            />
          </View>
        </View>
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
    backgroundColor: '#0000FF',
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
  returnPolicy: {
    backgroundColor: '#FFFF00',
    paddingVertical: 10,
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  returnPolicyText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoriesColumn: {
    flex: 1,
    padding: 5,
    backgroundColor: '#87CEFA',
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  productsColumn: {
    flex: 2,
    paddingTop: 10,
    paddingLeft: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  suggestionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  categoryItem: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#FFFFFF', // Màu nền mặc định
  },
  selectedCategory: {
    backgroundColor: '#FFFFFF', // Màu nền khi chọn
    borderWidth: 2,
    borderColor: '#0000FF', // Viền xanh khi chọn
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productItem: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
    width: '30%',
    marginRight: '3%',
  },
  productImage: {
    width: '100%',
    height: 100,
    marginBottom: 5,
    borderRadius: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CategoriesScreen;
