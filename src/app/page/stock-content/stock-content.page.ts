import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit, Output } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { ProductStoreService } from "@app/services/product-store/product-store.service"
import { StockContentService } from "@app/services/stock-content-service/stock-content.service"
import { ProductCardType, ProductStoredType } from "@app/types/product"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { FooterComponent } from "../../molecule/footer/footer.component"
import { HeaderComponent } from "../../molecule/header/header.component"

@Component({
    selector: "app-stock-content",
    templateUrl: "./stock-content.page.html",
    styleUrls: ["./stock-content.page.scss"],
    providers: [HttpClient],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule,
        ProductCardComponent,
        HeaderComponent,
        FooterComponent,
    ],
})
export class StockContentPage implements OnInit {
    constructor(
        protected router: Router,
        private route: ActivatedRoute,
        private service: StockContentService,
        private productStoreService: ProductStoreService
    ) {
        addIcons({ ...icons })
    }

    @Output() headerIcon = "caret-back-outline"
    @Output() headerTitle = "Nom produit / nom commu?"

    productCards: ProductCardType[] = []

    stockID: string = ""

    async ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const stockID = params.get("stockId")

            if (stockID != null) {
                this.stockID = stockID
                this.service.getContentById(parseInt(stockID)).then((res) => {
                    this.productCards = res.productList
                })
            } else {
                throw new ReferenceError()
            }
        })
    }
}
