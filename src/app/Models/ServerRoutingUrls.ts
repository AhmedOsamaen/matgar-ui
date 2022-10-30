import { environment } from "src/environments/environment";

export const getAllProducts = environment.serverUrl+'getAllProducts'
export const getAllStores = environment.serverUrl+'getAllStores'
export const addProduct = environment.serverUrl+'addProduct'
export const deleteProductById = environment.serverUrl+'deleteProductById/'
export const deleteStoreById = environment.serverUrl+'deleteStoreById/'
export const addStore = environment.serverUrl+'saveStore/'
export const getProductByStoreId = environment.serverUrl+'getProductByStoreId/'