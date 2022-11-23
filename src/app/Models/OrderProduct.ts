import { Product } from "../Modules/product";
import { Order } from "./Order";

export interface OrderProduct{
    id?:number;
    order:Order;
    product:Product;
}