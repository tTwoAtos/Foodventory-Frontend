import { Product } from "@app/apis/products"
import { ProductCardType } from "./product"

export interface Stock {
    id: number
    name: string
    productTotal: number
}

export interface StockDetails {
    id: number
    name: string
    productList: ProductCardType[]
}
