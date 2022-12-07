import { environment } from "src/environments/environment";
// Product
export const getAllProducts = environment.serverUrl+'getAllProducts'
export const addProduct = environment.serverUrl+'addProduct'
export const deleteProductById = environment.serverUrl+'deleteProductById/'
export const getProductByStoreId = environment.serverUrl+'getProductByStoreId/'
// Cart
export const getCartCount = environment.serverUrl+'getCartCount'
export const getCartCountByOrderAndProduct = environment.serverUrl+'getCartCountByOrderAndProduct'
// Order Product
export const deleteOrderProduct = environment.serverUrl+'deleteOrderProduct'
export const addorder_product = environment.serverUrl+'addorder_product'
export const getProductsByOrderId = environment.serverUrl+'getProductsByOrderId'

// Order
export const deleteOrder = environment.serverUrl+'deleteOrder'
export const saveOrder = environment.serverUrl+'saveOrder'
export const getAllOrders = environment.serverUrl+'getAllOrders'
// Store
export const getAllStores = environment.serverUrl+'getAllStores'
export const deleteStoreById = environment.serverUrl+'deleteStoreById/'
export const addStore = environment.serverUrl+'saveStore/'
// Address
export const getAllAddresses = environment.serverUrl+'getAllAddresses'
export const getAddressByUserId = environment.serverUrl+'getAddressByUserId/'
export const saveAddressUrl = environment.serverUrl+'saveAddress'
// User
export const getUserById = environment.serverUrl+'getUserById/'
// User other

export const getUserOrdersStage = environment.serverUrl+'getUserOrdersStage/'
export const getUserOrders = environment.serverUrl+'getUserOrders/'
export const getUserPayments = environment.serverUrl+'getUserPayments/'
export const addUserPayment = environment.serverUrl+'addUserPayment/'