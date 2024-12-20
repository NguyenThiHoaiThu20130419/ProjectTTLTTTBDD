import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  const relatedProducts = [
    { id: '1', name: 'Sản phẩm 1', price: 50000, image: 'https://via.placeholder.com/100' },
    { id: '2', name: 'Sản phẩm 2', price: 60000, image: 'https://via.placeholder.com/100' },
    { id: '3', name: 'Sản phẩm 3', price: 70000, image: 'https://via.placeholder.com/100' },
    { id: '4', name: 'Sản phẩm 4', price: 80000, image: 'https://via.placeholder.com/100' },
    { id: '5', name: 'Sản phẩm 5', price: 90000, image: 'https://via.placeholder.com/100' },
  ];

  const customerReviews = [
    { id: '1', rating: 5, comment: 'Sản phẩm rất tốt, đúng như mô tả.' },
    { id: '2', rating: 4, comment: 'Chất lượng ổn, giao hàng nhanh.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imageUrl }} style={styles.productImage} />

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="cart-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="ellipsis-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productStats}>⭐⭐⭐⭐⭐ | Đã bán: 1000+</Text>
        <Text style={styles.productPrice}>{product.discountedPrice.toLocaleString()} VNĐ <Text style={styles.originalPrice}>{product.price.toLocaleString()} VNĐ</Text></Text>
        <Text style={styles.productDiscount}>Giảm: {product.discountPercent}%</Text>

      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowButtonText}>Mua ngay</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.assurance}>
        <Text style={styles.assuranceTitle}>Yên tâm mua sắm</Text>
        <Text>✔ Được đồng kiểm khi nhận hàng</Text>
        <Text>✔ Được hoàn tiền 200% nếu là hàng giả</Text>
        <Text>✔ Đổi trả miễn phí trong 30 ngày</Text>
        <Text>✔ Được đổi ý</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mô tả sản phẩm</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Khách hàng đánh giá</Text>
        {customerReviews.map((review) => (
          <View key={review.id} style={styles.review}>
            <Text>{'⭐'.repeat(review.rating)}</Text>
            <Text>{review.comment}</Text>
          </View>
        ))}
        <TouchableOpacity>
          <Text style={styles.viewMoreReviews}>Xem thêm</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sản phẩm liên quan</Text>
        <FlatList
          data={relatedProducts}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.relatedProduct}>
              <Image
                source={{ uri: item.image }}
                style={styles.relatedProductImage}
              />
              <Text>{item.name}</Text>
              <Text style={styles.relatedProductPrice}>
                {item.price.toLocaleString()} VNĐ
              </Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 20,
  },
  productInfo: {
    padding: 20,
    backgroundColor: '#fff',
  },
  productTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productStats: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#CC0000',
  },
  productDiscount: {
    fontSize: 14,
    color: '#888',
  },
  originalPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: '#888',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    marginRight: 10,
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buyNowButton: {
    flex: 1,
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
  },
  buyNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  assurance: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  assuranceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  review: {
    marginBottom: 10,
  },
  viewMoreReviews: {
    color: '#007BFF',
    marginTop: 10,
  },
  relatedProduct: {
    alignItems: 'center',
    marginRight: 10,
  },
  relatedProductImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  relatedProductPrice: {
    color: '#CC0000',
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
