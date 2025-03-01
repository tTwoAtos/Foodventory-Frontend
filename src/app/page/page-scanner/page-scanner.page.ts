import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { TokenService } from "@app/services/token-services/token.service"
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

    setOpen(value: boolean) {
        this.isModalOpen = value
    }

    constructor(private tokenService: TokenService) {
        console.log(tokenService.getLoggedCommunityId())
    }
}
