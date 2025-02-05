import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { HttpClient } from "@angular/common/http"
import { StockContentService } from "@app/services/stock-content-service/stock-content.service"

@Component({
    selector: "app-stock-content",
    templateUrl: "./stock-content.page.html",
    styleUrls: ["./stock-content.page.scss"],
    providers: [HttpClient],
})
export class StockContentPage implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private service: StockContentService
    ) {
        addIcons({ ...icons })
    }

    productCards: {
        name: string
        amount: number
    }[] = []

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const stockID = params.get("stockId")

            if (stockID != null) {
                this.service.getStockContent().subscribe({
                    next: (data) => {
                        this.productCards =
                            data[parseInt(stockID) - 1].productList
                    },
                    error: (e) => console.error(e),
                })
            } else {
                throw new ReferenceError()
            }
        })
    }
}
