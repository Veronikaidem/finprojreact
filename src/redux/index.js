import React, { useReducer } from 'react'
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useReducer } from './slices/userSlice';
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import { useSelector } from 'react-redux';
import { formControlClasses } from '@mui/material';

const persistConfig={
    key:"root",
    storage,
    whitelist:["user"],
};

const rootReducer = combineReducers({
user: useReducer,
product:productReducer,
cart: cartReducer,
})

const persistReducer= persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck: false,
    }),
})
export const persistor= persistStore(store);


export { authenticateUser, logoutUser } from "./slices/userSlice";
export {
  saveProduct,
  fetchHomePageProducts,
  fetchCategoryProducts,
  fetchQuertProducts,
  fetchSingleProductById,
  rateProduct,
  setSelectedProduct,
  setSearchResults,
} from "./slices/productSlice";


export {
  addToCart,
  removeFromCart,
  clearCart,

 
  fetchCart,
  saveCart,
} from "./slices/cartSlice";


export const useUserInfo = () => useSelector((state) => state.user.userData);


export const useSelectedProduct = () =>
  useSelector((state) => state.product.selectedProduct);
export const useHomePageProducts = () =>
  useSelector((state) => state.product.homePageProducts);
export const UseCategories = () =>
  useSelector((state) => state.product.categories);
export const useCategoryProducts = () =>
  useSelector((state) => state.product.categoryProducts);
export const useSearchResult = () =>
  useSelector((state) => state.product.searchResult);
export const useSingleProduct = () =>
  useSelector((state) => state.product.singleProduct);


export const useCartItems = () => useSelector((state) => state.cart.cartItems);