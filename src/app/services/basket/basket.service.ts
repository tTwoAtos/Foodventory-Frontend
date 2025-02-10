import { Injectable } from "@angular/core"
import { Product } from "@app/apis/products"
import { PRODUCTS_BASKET_KEY } from "@app/utils/const/const"

@Injectable({
    providedIn: "root",
})
export class BasketService {
    storedBasket: string | null = ""

    constructor() {
        if (localStorage.getItem(PRODUCTS_BASKET_KEY) == null) {
            localStorage.setItem(PRODUCTS_BASKET_KEY, JSON.stringify([]))
        }
    }

    addProduct(product: Product) {
        let basket: Product[] = []
        this.storedBasket = localStorage.getItem(PRODUCTS_BASKET_KEY)

        if (this.storedBasket != null) {
            basket = JSON.parse(this.storedBasket)

            const storedProduct = basket.find(
                (p) => p.eancode! == product.eancode!
            )

            if (storedProduct == undefined) {
                basket.push(product)
                localStorage.setItem(
                    PRODUCTS_BASKET_KEY,
                    JSON.stringify(basket)
                )
            } else {
                storedProduct.nbScanned! += 1
                localStorage.setItem(
                    PRODUCTS_BASKET_KEY,
                    JSON.stringify(basket)
                )
            }
        } else {
            console.log(
                "Error with basket in locaStorage..........................."
            )
        }
    }
}
