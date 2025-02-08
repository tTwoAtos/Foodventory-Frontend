import { HttpClient } from "@angular/common/http"
import { Component, OnInit, Output } from "@angular/core"
import { StockService } from "@app/services/stock-service/stock.service"
import { Stock } from "@app/types/stock"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-stock",
    templateUrl: "./stock.page.html",
    styleUrls: ["./stock.page.scss"],
    providers: [HttpClient],
})
export class StockPage implements OnInit {
    mockStocks: Stock[] = []

    selectedCategories = [
        { name: "Viande" },
        { name: "Dessert" },
        { name: "Poisson" },
        { name: "Fruit" },
        { name: "Légume" },
        { name: "Boisson" },
        { name: "Féculent" },
        { name: "Viande" },
        { name: "Dessert" },
        { name: "Poisson" },
        { name: "Fruit" },
        { name: "Légume" },
        { name: "Boisson" },
        { name: "Féculent" },
    ]

    constructor(private stockService: StockService) {
        addIcons({ ...icons })
    }

    async ngOnInit(): Promise<void> {
        await this.stockService.getStocks().then((res) => {
            this.mockStocks = res
        })
    }
}
