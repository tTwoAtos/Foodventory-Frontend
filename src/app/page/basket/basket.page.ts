import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Product } from "@app/apis/products"
import { BasketService } from "@app/services/basket/basket.service"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-basket",
    templateUrl: "./basket.page.html",
    styleUrls: ["./basket.page.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule],
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
        // Call localStorage to get all Products saved in local
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
