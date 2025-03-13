import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import {
    ProductToCommunity,
    ProductToCommunityControllerService,
} from "@app/apis/product-to-community"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { ProductStoreService } from "@app/services/product-store/product-store.service"
import { ProductCardType } from "@app/types/product"
import { IonicModule } from "@ionic/angular"
import { FooterComponent } from "../../molecule/footer/footer.component"
import { HeaderComponent } from "../../molecule/header/header.component"
import { LargeButtonComponent } from "../../molecule/large-button/large-button.component";

@Component({
    selector: "app-basket",
    templateUrl: "./basket.page.html",
    styleUrls: ["./basket.page.scss"],
    standalone: true,
    imports: [
    IonicModule,
    CommonModule,
    ProductCardComponent,
    HeaderComponent,
    FooterComponent,
    LargeButtonComponent
],
})
export class BasketPage implements OnInit {
    productList: ProductCardType[] = []

    constructor(
        public router: Router,
        private productStoreService: ProductStoreService,
        private productToComService: ProductToCommunityControllerService
    ) { }

    async ngOnInit() {
        // const basketLocalStorage = localStorage.getItem(PRODUCTS_BASKET_KEY)
        // if (basketLocalStorage != null) {
        //     // this.productList = JSON.parse(basketLocalStorage)
        //     this.productList.push(...JSON.parse(basketLocalStorage))
        //     console.log("Basket product list : ", this.productList)
        // }
        // await this.getProductFromStorage()
        // await this.getProductToComFromStorage()
        await this.getProductStoredFromStorage()
    }

    // Send to back
    async saveBasket() {
        // let basketProducts: Product[] = []
        const testProductToCom: ProductToCommunity[] = []

        this.productStoreService.getProductsStored().then((res) => {
            console.log(res)

            res.forEach((element) => {
                this.productToComService.add(element.communityId, element)
            })
        })

        // basketProducts.forEach((product) => {
        //     const newProductToCom: ProductToCommunity = {
        //         productId: product.eancode,
        //         communityId: "", // Renseigner par ????
        //         emplacementId: "", // Renseigner par ????
        //         qte: product.nbScanned,
        //     }

        //     testProductToCom.push(newProductToCom)
        // })

        // this.productToComService.add()

        // this.productService
        //     .addedToCommunity("0737628064502")
        //     .subscribe(() => {})
    }

    // async getProductFromStorage() {
    //     await this.productStoreService.getProducts().then((res) => {
    //         this.productList.push(...(res as ProductCardType[]))
    //         // this.productList = res
    //     })
    // }

    // async getProductToComFromStorage() {
    //     await this.productStoreService.getProductsToCom().then((res) => {
    //         this.productList.push(...(res as ProductCardType[]))
    //         // this.productList = res
    //     })
    // }

    async getProductStoredFromStorage() {
        await this.productStoreService.getProductsStored().then((res) => {
            // console.log("Getting Product Stored : ", res)

            res.forEach((product) => {
                this.productList.push({
                    productId: product.productId,
                    amount: product.qte,
                    name: product.name,
                })
            })

            // this.productList = res
        })
    }
}
