import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { ProductToCommunity } from "@app/apis/product-to-community"
import { Product, ProductControllerService } from "@app/apis/products"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { ProductStoreService } from "@app/services/product-store/product-store.service"
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
    productList: Product[] = []

    constructor(
        public router: Router,
        private productStoreService: ProductStoreService,
        private productService: ProductControllerService
    ) {}

    async ngOnInit() {
        const basketLocalStorage = localStorage.getItem(PRODUCTS_BASKET_KEY)

        if (basketLocalStorage != null)
            this.productList = JSON.parse(basketLocalStorage)

        await this.getProductFromStorage()
    }

    // Send to back
    async saveBasket() {
        let basketProducts: Product[] = []
        let testProductToCom: ProductToCommunity[] = []

        await this.productStoreService.getProducts().then((res) => {
            basketProducts = res
        })

        basketProducts.forEach((product) => {
            let newProductToCom: ProductToCommunity = {
                productId: product.eancode,
                communityId: "", // Renseigner par ????
                emplacementId: "", // Renseigner par ????
                qte: product.nbScanned,
            }

            testProductToCom.push(newProductToCom)
        })

        // this.productService
        //     .addedToCommunity("0737628064502")
        //     .subscribe(() => {})
    }

    async getProductFromStorage() {
        await this.productStoreService.getProducts().then((res) => {
            this.productList = res
        })
    }
}
