import { Injectable } from "@angular/core"
import { Product } from "@app/apis/products"
import { PRODUCTS_BASKET_KEY as PRODUCTS_STORE_KEY } from "@app/utils/const/const"

@Injectable({
    providedIn: "root",
})
export class ProductStoreService {
    constructor() {
        if (localStorage.getItem(PRODUCTS_STORE_KEY) == null) {
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify([]))
        }
    }

    async addProduct(product: Product): Promise<any> {
        let basket: Product[] = []
        let storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)

        if (storedBasket == null) {
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify([]))
            storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)
        }

        basket = JSON.parse(storedBasket!)
        const storedProduct = basket.find((p) => p.eancode! == product.eancode!)

        if (storedProduct == undefined) {
            basket.push(product)
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.eancode!} was added`)
            })
        } else {
            storedProduct.nbScanned! += 1
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.eancode!} was updated`)
            })
        }
    }

    getProducts(): Promise<Product[]> {
        let products: Product[] = []

        const jsonStore = localStorage.getItem(PRODUCTS_STORE_KEY)

        if (jsonStore != null) {
            products = JSON.parse(jsonStore)
        } else {
            throw new Error("No products in localstorage")
        }

        return new Promise((success) => {
            success(products)
        })
    }
}
