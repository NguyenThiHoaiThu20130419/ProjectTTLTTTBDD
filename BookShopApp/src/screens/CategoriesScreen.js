import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategoriesScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [sortOption, setSortOption] = useState('popularity');

  const categories = [
    { id: '1', name: 'Hướng nghiệp', image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Tâm lý học', image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Văn học kinh điển', image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Văn học lãng mạn', image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Truyện tranh', image: 'https://via.placeholder.com/100' },
  ];

  const mockProducts = [
    { id: '1', categoryId: '1', name: 'Sản phẩm 1', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '2', categoryId: '1', name: 'Sản phẩm 2', price: 200000, rating: 5, image: 'https://via.placeholder.com/100' },
    { id: '3', categoryId: '1', name: 'Sản phẩm 3', price: 300000, rating: 3, image: 'https://via.placeholder.com/100' },
    { id: '4', categoryId: '1', name: 'Sản phẩm 4', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '5', categoryId: '2', name: 'Sản phẩm 5', price: 500000, rating: 5, image: 'https://via.placeholder.com/100' },
    { id: '6', categoryId: '2', name: 'Sản phẩm 6', price: 400000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '7', categoryId: '3', name: 'Sản phẩm 7', price: 300000, rating: 3, image: 'https://via.placeholder.com/100' },
    { id: '8', categoryId: '3', name: 'Sản phẩm 8', price: 600000, rating: 5, image: 'https://via.placeholder.com/100' },
    { id: '9', categoryId: '3', name: 'Sản phẩm 9', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '10', categoryId: '3', name: 'Sản phẩm 10', price: 200000, rating: 5, image: 'https://via.placeholder.com/100' },
    { id: '11', categoryId: '3', name: 'Sản phẩm 11', price: 300000, rating: 3, image: 'https://via.placeholder.com/100' },
    { id: '12', categoryId: '3', name: 'Sản phẩm 12', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '13', categoryId: '3', name: 'Sản phẩm 13', price: 100000, rating: 5, image: 'https://via.placeholder.com/100' },
    { id: '14', categoryId: '3', name: 'Sản phẩm 14', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
    { id: '15', categoryId: '3', name: 'Sản phẩm 15', price: 100000, rating: 4, image: 'https://via.placeholder.com/100' },
  ];

  const filterProductsByCategory = (categoryId) => {
    return mockProducts.filter(product => product.categoryId === categoryId);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortProducts = (products) => {
    switch (sortOption) {
      case 'popularity':
        return products;
      case 'bestSelling':
        return products.sort((a, b) => b.price - a.price);
      case 'newest':
        return products.reverse();
      case 'priceAsc':
        return products.sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return products.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  return (
    <FlatList
      data={[{ id: 'header' }]}
      keyExtractor={(item) => item.id}
      renderItem={() => (
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
              onPress={() => navigation.navigate('Cart')}
            >
              <Ionicons name="cart-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* 15 Ngày Đổi Ý & Trả Hàng */}
          <View style={styles.returnPolicy}>
            <Text style={styles.returnPolicyText}>15 Ngày Đổi Ý và Miễn Phí Trả Hàng</Text>
          </View>

          {/* Danh mục sản phẩm */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.suggestionTitle}>Mua sắm theo danh mục</Text>
            <FlatList
              data={categories}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[styles.categoryItem, selectedCategory === item.id && styles.selectedCategory]}
                  onPress={() => setSelectedCategory(item.id)}
                >
                  <Image source={{ uri: item.image }} style={styles.categoryImage} />
                  <Text style={styles.categoryName}>{item.name}</Text>
                  {selectedCategory === item.id && <View style={styles.selectedLine} />}
                </TouchableOpacity>
              )}
            />
          </View>

          {/* Thanh Menu Ngang */}
          <View style={styles.menuBar}>
            <TouchableOpacity style={styles.menuItem} onPress={() => handleSort('popularity')}>
              <Text style={[styles.menuText, sortOption === 'popularity' && styles.selectedMenuText]}>Phổ biến</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.menuItem} onPress={() => handleSort('bestSelling')}>
              <Text style={[styles.menuText, sortOption === 'bestSelling' && styles.selectedMenuText]}>Bán chạy</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.menuItem} onPress={() => handleSort('newest')}>
              <Text style={[styles.menuText, sortOption === 'newest' && styles.selectedMenuText]}>Mới nhất</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.menuItem} onPress={() => handleSort(sortOption === 'priceAsc' ? 'priceDesc' : 'priceAsc')}>
              <Text style={[styles.menuText, sortOption === 'priceAsc' || sortOption === 'priceDesc' ? styles.selectedMenuText : null]}>
                Giá {sortOption === 'priceAsc' ? <Ionicons name="arrow-up" size={14} /> : <Ionicons name="arrow-down" size={14} />}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Hiển thị sản phẩm */}
          <View style={styles.productsContainer}>
            <FlatList
              data={sortProducts(filterProductsByCategory(selectedCategory))}
              keyExtractor={(item) => item.id}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={styles.productItem}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>{item.price.toLocaleString()}đ</Text>
                  <View style={styles.rating}>
                    {[...Array(item.rating)].map((_, index) => (
                      <Ionicons key={index} name="star" size={14} color="gold" />
                    ))}
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#0000FF',
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
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  cartButton: {
    marginLeft: 10,
  },
  returnPolicy: {
    margin: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FFFF99',
    borderRadius: 5, 
  },
  returnPolicyText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
  categoriesContainer: {
    paddingVertical: 10,
    backgroundColor: '#fff', 
  },
  suggestionTitle: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedCategory: {
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  categoryName: {
    marginTop: 5,
    fontSize: 14,
  },
  selectedLine: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 2,
    backgroundColor: 'blue',
  },
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginTop: 10, 
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  },
  selectedMenuText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  separator: {
    borderLeftWidth: 1,
    borderColor: '#ddd',
    height: 20,
    marginHorizontal: 10,
  },
  productsContainer: {
    flex: 1,
    padding: 10,
  },
  productItem: {
    width: '48%',
    marginBottom: 15,
    marginHorizontal: '1%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    elevation: 3, 
  },
  productImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  productName: {
    marginVertical: 5,
    fontSize: 14,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#CC0000',
  },
  rating: {
    flexDirection: 'row',
  },
});

export default CategoriesScreen;
