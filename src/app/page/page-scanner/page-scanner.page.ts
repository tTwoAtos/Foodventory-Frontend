import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { TokenService } from "@app/services/token-services/token.service";
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { IonicModule } from "@ionic/angular";
import { AddProductModalComponent } from "../../molecule/add-product-modal/add-product-modal.component";
import { BarcodeEntryModalComponent } from "../../molecule/barcode-entry-modal/barcode-entry-modal.component";

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
    isModalOpen: boolean = false;
    scannedCode: string | null = null;
    product: any = null;
    isLoading = false;
    errorMessage: string | null = null;

    constructor(
        private tokenService: TokenService,
        private barcodeScanner: BarcodeScanner,
        private http: HttpClient
    ) {
        console.log(tokenService.getLoggedCommunityId());
    }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('Scan réussi : ', barcodeData);
            if (barcodeData.text) {
                this.scannedCode = barcodeData.text;
                this.fetchProductDetails(barcodeData.text);
            }
        }).catch(err => {
            console.log('Erreur de scan : ', err);
            this.errorMessage = 'Échec du scan. Réessayez.';
        });
    }

    fetchProductDetails(barcode: string) {
        this.isLoading = true;
        this.errorMessage = null;
        this.http.get(`https://world.openfoodfacts.org/api/v2/product/${barcode}.json`)
            .subscribe(
                (response: any) => {
                    this.isLoading = false;
                    if (response.status === 1) {
                        this.product = response.product;
                    } else {
                        this.product = null;
                        this.errorMessage = "Produit non trouvé.";
                    }
                },
                (error) => {
                    this.isLoading = false;
                    this.errorMessage = "Erreur lors de la récupération des données.";
                    console.error('Erreur API :', error);
                }
            );
    }

    setOpen(value: boolean) {
        this.isModalOpen = value;
    }
}
