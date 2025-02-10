import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Product } from "@app/apis/products"
import { ProductCardComponent } from "@app/molecule/product-card/product-card.component"
import { StockContentService } from "@app/services/stock-content-service/stock-content.service"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-stock-content",
    templateUrl: "./stock-content.page.html",
    styleUrls: ["./stock-content.page.scss"],
    providers: [HttpClient],
    standalone: true,
    imports: [IonicModule, CommonModule, ProductCardComponent],
})
export class StockContentPage implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: StockContentService
    ) {
        addIcons({ ...icons })
    }

    productCards: Product[] = []

    async ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const stockID = params.get("stockId")

            if (stockID != null) {
                this.service.getContentById(parseInt(stockID)).then((res) => {
                    this.productCards = res.productList
                })
            } else {
                throw new ReferenceError()
            }
        })
    }
}
