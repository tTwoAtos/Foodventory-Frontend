import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Product } from "@app/apis/products"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { BasketService } from "@app/services/basket/basket.service"
import { PRODUCTS_BASKET_KEY } from "@app/utils/const/const"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-basket",
    templateUrl: "./basket.page.html",
    styleUrls: ["./basket.page.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule, ProductCardComponent],
})
export class BasketPage implements OnInit {
    productCards: {
        name: string
        amount: number
    }[] = []

    productList: Product[] = []

    constructor(
        public router: Router,
        private service: BasketService
    ) {}
    ngOnInit(): void {
        const basketLocalStorage = localStorage.getItem(PRODUCTS_BASKET_KEY)
        if (basketLocalStorage != null)
            this.productList = JSON.parse(basketLocalStorage)
    }

    saveBasket() {
        // POST
        const test: Product = {
            name: "Biscuit",
            nbScanned: 1,
            nbAdded: 3,
            thumbnail: "",
            eancode: "3642901334925",
        }
        this.service.addProduct(test)
    }

    // Add a product to the productList
    addProduct() {}
}
