import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { Router } from "@angular/router"
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
    ],
})
export class PageScannerPage {
    isModalOpen: boolean = false

    product: Product | undefined

    constructor(
        private router: Router,
        private productStoreService: ProductStoreService
    ) {}

    async setOpen(value: boolean) {
        this.isModalOpen = value

        //TODO : remove after testing
        if (value) {
            this.scan()
        }
    }

    async redirectToBasket(newProduct: any) {
        this.productStoreService.addProductStored(newProduct)
        this.setOpen(false)
        setTimeout(() => {
            this.router.navigate(["/basket"])
        }, 200)
    }

    /**
     *
     * @param product Product is any because doesn't how scanned prudoct will be returned
     */
    scan(product: any = null) {
        this.product = {
            eancode: "7346895213440",
            name: "Produit Test",
            nbAdded: 0,
            nbScanned: 1,
            thumbnail: "",
        }
    }
}
