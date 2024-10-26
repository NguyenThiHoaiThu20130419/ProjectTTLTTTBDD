import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Đây là màn hình Danh mục</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
