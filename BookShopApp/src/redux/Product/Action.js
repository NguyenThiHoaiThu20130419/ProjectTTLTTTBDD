import api from '../../config/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
  FIND_PRODUCTS_REQUEST, 
  FIND_PRODUCTS_SUCCESS, 
  FIND_PRODUCTS_FAILURE 
} from './ActionType';

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });

  const {
    minPrice = 0,    
    maxPrice = 1000000,
    minDiscount = 0,
    category = "van_hoc", 
    stock = "all", 
    sort = "asc",
    pageNumber = 1,
    pageSize = 5,
  } = reqData;

  console.log("Request Data: ", reqData);

  const queryParams = new URLSearchParams({
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  });

  try {
    const token = await AsyncStorage.getItem('jwt');
    console.log("Token từ AsyncStorage: ", token);

    if (!token) {
      throw new Error('Token không tồn tại!');
    }

    const { data } = await api.get(`/api/products?${queryParams.toString()}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Product Data: ", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data.content });  
  } catch (error) {
    console.log("Error: ", error);
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};
