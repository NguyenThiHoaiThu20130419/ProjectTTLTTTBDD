import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { findProducts } from '../redux/Product/Action';

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('van_hoc');
  const [sortOption, setSortOption] = useState('popularity');

  const categories = [
    { id: 'van_hoc', name: 'Văn học', image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzfw16e58swde0.webp' },
    { id: 'huong_nghiep', name: 'Hướng nghiệp', image: 'https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lfj4ve7pfotx8b.webp' },
    { id: 'tam_ly_hoc', name: 'Tâm lý học', image: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lexp1gp9qsne82.webp' },
    { id: 'truyen_tranh', name: 'Truyện tranh', image: 'https://down-vn.img.susercontent.com/file/vn-11134201-7qukw-lgng4s6yjp6a7c.webp' },
    { id: 'tieng_anh', name: 'Tiếng anh', image: 'https://down-vn.img.susercontent.com/file/6cb1c12e0795252d778b4605e87acc17.webp' },
  ];

  useEffect(() => {
    const requestData = {
      category: selectedCategory,
      pageNumber: 0,
      pageSize: 5,
    };
    dispatch(findProducts(requestData));
  }, [dispatch, selectedCategory]);

  const sortProducts = (products) => {
    switch (sortOption) {
      case 'priceAsc':
        return [...products].sort((a, b) => a.price - b.price);
      case 'priceDesc':
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: item.imageUrl || 'https://via.placeholder.com/100' }} style={styles.productImage} />
      <Text style={styles.productName}>{item.title}</Text>
      <Text style={styles.productPrice}>{item.price.toLocaleString()} VNĐ</Text>
    </View>
  );

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
            <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
              <Ionicons name="cart-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Return Policy */}
          <View style={styles.returnPolicy}>
            <Text style={styles.returnPolicyText}>15 Ngày Đổi Ý và Miễn Phí Trả Hàng</Text>
          </View>

          {/* Categories */}
          <View style={styles.categoriesContainer}>
            <Text style={styles.suggestionTitle}>Mua sắm theo danh mục</Text>
            <FlatList
              data={categories}
              horizontal={true}  
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
              contentContainerStyle={styles.categoriesContent}  // Tạo khoảng cách giữa các danh mục
            />
          </View>

          {/* Sort Options */}
          <View style={styles.sortOptions}>
            <TouchableOpacity
              style={[styles.sortButton, sortOption === 'popularity' && styles.selectedSortOption]}
              onPress={() => setSortOption('popularity')}
            >
              <Text style={[styles.sortButtonText, sortOption === 'popularity' && styles.selectedSortOptionText]}>
                Phổ biến
              </Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={[styles.sortButton, sortOption === 'priceAsc' && styles.selectedSortOption]}
              onPress={() => setSortOption('priceAsc')}
            >
              <Text style={[styles.sortButtonText, sortOption === 'priceAsc' && styles.selectedSortOptionText]}>
                Giá tăng dần
              </Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity
              style={[styles.sortButton, sortOption === 'priceDesc' && styles.selectedSortOption]}
              onPress={() => setSortOption('priceDesc')}
            >
              <Text style={[styles.sortButtonText, sortOption === 'priceDesc' && styles.selectedSortOptionText]}>
                Giá giảm dần
              </Text>
            </TouchableOpacity>
          </View>


          {/* Products */}
          <View style={styles.productsContainer}>
            {loading ? (
              <Text style={styles.loadingText}>Đang tải...</Text>
            ) : error ? (
              <Text style={styles.errorText}>Lỗi tải dữ liệu: {error}</Text>
            ) : (
              <FlatList
                data={sortProducts(products)}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={renderProduct}
              />
            )}
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
    backgroundColor: '#333',
    borderRadius: 20,
    padding: 5,
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
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedCategory: {
    borderBottomWidth: 2,
    borderBottomColor: '#5bc0de',
  },
  categoryImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  categoryName: {
    fontSize: 14,
  },
  selectedLine: {
    height: 2,
    width: '100%',
    backgroundColor: 'blue',
    marginTop: 5,
  },
  sortOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    paddingVertical: 5,
    alignItems: 'center',
  },
  sortButton: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 20,
  },
  selectedSortOption: {
    backgroundColor: 'transparent',
  },
  sortButtonText: {
    fontSize: 14,
    color: '#333',
  },
  selectedSortOptionText: {
    fontWeight: 'bold',
    color: 'blue',
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#e0e0e0',
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#CC0000',
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 20,
  },
  errorText: {
    textAlign: 'center',
    marginVertical: 20,
    color: 'red',
  },
});

export default CategoriesScreen;
