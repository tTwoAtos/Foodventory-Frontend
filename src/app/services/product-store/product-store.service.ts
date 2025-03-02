import { Injectable } from "@angular/core"
import { ProductToCommunity } from "@app/apis/product-to-community"
import { Product } from "@app/apis/products"
import { ProductStoredType } from "@app/types/product"
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

    async addProductToCom(product: ProductToCommunity): Promise<any> {
        console.log("Add a product to community....", product)

        let basket: ProductToCommunity[] = []
        let storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)

        if (storedBasket == null) {
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify([]))
            storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)
        }

        basket = JSON.parse(storedBasket!)
        const storedProduct = basket.find((p) => p.id! == product.id!)

        if (storedProduct == undefined) {
            basket.push(product)
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.id!} was added`)
            })
        } else {
            storedProduct.qte! += 1
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.id!} was updated`)
            })
        }
    }

    getProductsToCom(): Promise<ProductToCommunity[]> {
        let products: ProductToCommunity[] = []

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

    async addProductStored(product: ProductStoredType): Promise<any> {
        // console.log("Add a product to community....", product)

        let basket: ProductStoredType[] = []
        let storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)

        if (storedBasket == null) {
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify([]))
            storedBasket = localStorage.getItem(PRODUCTS_STORE_KEY)
        }

        basket = JSON.parse(storedBasket!)
        const storedProduct = basket.find(
            (p) =>
                p.productId! == product.productId! &&
                p.emplacementId == product.emplacementId
        )

        if (storedProduct == undefined) {
            basket.push(product)
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.productId!} was added`)
            })
        } else {
            storedProduct.qte! += product.qte
            localStorage.setItem(PRODUCTS_STORE_KEY, JSON.stringify(basket))
            return new Promise((success) => {
                success(`The product ${product.productId!} was updated`)
            })
        }
    }

    getProductsStored(): Promise<ProductStoredType[]> {
        let products: ProductStoredType[] = []

        const jsonStore = localStorage.getItem(PRODUCTS_STORE_KEY)

        if (jsonStore != null) {
            products = JSON.parse(jsonStore)
        } else {
            throw new Error("No products stored in localstorage")
        }

        return new Promise((success) => {
            success(products)
        })
    }
}
