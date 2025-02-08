import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Product } from "@app/apis/products"

@Component({
    selector: "app-basket",
    templateUrl: "./basket.page.html",
    styleUrls: ["./basket.page.scss"],
})
export class BasketPage {
    productCards: {
        name: string
        amount: number
    }[] = []

    productList: Product[] = []

    // When a product is add in the basket -> save the list in localStorage

    constructor(public router: Router) {}

    saveBasket() {
        // Save list of Product
    }

    // Add a product to the productList
    addProduct() {}
}
