import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { Router, RouterLink } from "@angular/router"
import { Product } from "@app/apis/products"
import { ProductStoreService } from "@app/services/product-store/product-store.service"
import { IonicModule } from "@ionic/angular"
import { AddProductModalComponent } from "../../molecule/add-product-modal/add-product-modal.component"
import { BarcodeEntryModalComponent } from "../../molecule/barcode-entry-modal/barcode-entry-modal.component"

@Component({
    selector: "app-page-scanner",
    templateUrl: "./page-scanner.page.html",
    styleUrls: ["./page-scanner.page.scss"],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule,
        BarcodeEntryModalComponent,
        AddProductModalComponent,
        RouterLink,
    ],
})
export class PageScannerPage {
    barcodeModalIsOpen: boolean = false
    quantityModalIsOpen: boolean = false
    product: Product | undefined
    stockId: string | undefined

    constructor(
        private router: Router,
        private productStoreService: ProductStoreService
    ) {
        const navigation = this.router.getCurrentNavigation()
        if (navigation?.extras.state) {
            const stockID = navigation.extras.state["stockID"]
            this.stockId = stockID
        }
    }

    openBarcodeModal(value: boolean) {
        this.barcodeModalIsOpen = value
    }

    openQuantityModal(value: boolean) {
        // this.product = {
        //     eancode: "7346895213440",
        //     name: "Produit Test",
        //     nbAdded: 0,
        //     nbScanned: 1,
        //     thumbnail: "",
        // }

        this.quantityModalIsOpen = value
    }

    async redirectToBasket(newProduct: any) {
        console.log(newProduct)

        this.productStoreService.addProductStored(newProduct)
        this.openQuantityModal(false)
        setTimeout(() => {
            this.router.navigate(["/basket"])
        }, 200)
    }

    getProduct(eancode: any) {
        // Call ProductService to get the product by this eancode

        this.product = {
            eancode: eancode,
            name: "Produit Test",
            nbAdded: 0,
            nbScanned: 1,
            thumbnail: "",
        }

        this.openQuantityModal(true)
    }
}
