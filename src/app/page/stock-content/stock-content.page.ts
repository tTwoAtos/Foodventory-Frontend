import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit, Output } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import {
    Emplacement,
    EmplacementControllerService,
} from "@app/apis/emplacement"
import {
    ProductResponseDto,
    ProductToCommunityControllerService,
} from "@app/apis/product-to-community"
import { Product } from "@app/apis/products"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { TokenService } from "@app/services/token-services/token.service"
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
        private tokenService: TokenService,
        private pToCService: ProductToCommunityControllerService,
        private stockService: EmplacementControllerService
    ) {
        addIcons({ ...icons })
    }

    @Output() headerIcon = "caret-back-outline"
    @Output() headerTitle = "Nom produit / nom commu?"

    productCards: Product[] = []

    stockID: string = ""

    async ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const stockID = params.get("stockId")

            if (stockID != null) {
                this.stockID = stockID
                this.pToCService
                    .getAllByCommunityByEmplacement(
                        this.tokenService.getLoggedCommunityId(),
                        parseInt(stockID)
                    )
                    .subscribe({
                        next: (res: ProductResponseDto[]) => {
                            this.productCards = res
                        },
                    })

                this.stockService
                    .getEmplacementById(parseInt(stockID))
                    .subscribe({
                        next: (res: Emplacement) => {
                            if (res.name) {
                                this.headerTitle = res.name
                            }
                        },
                    })
            } else {
                throw new ReferenceError()
            }
        })
    }
}
