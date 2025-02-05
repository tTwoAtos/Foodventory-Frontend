import { HttpClient } from "@angular/common/http"
import { Component, Output } from "@angular/core"
import { StockService } from "@app/services/stock-service/stock.service"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-stock",
    templateUrl: "./stock.page.html",
    styleUrls: ["./stock.page.scss"],
    providers: [HttpClient],
})
export class StockPage {
    constructor(private stockService: StockService) {
        addIcons({ ...icons })
    }

    @Output() mockDatas = [
        {
            id: 1,
            name: "Réfrégirateur",
            productAmount: 23,
        },
        {
            id: 2,
            name: "Congélateur",
            productAmount: 16,
        },
        {
            id: 3,
            name: "Placard",
            productAmount: 7,
        },
    ]

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

    async redirectToStockContent(id: number) {
        this.stockService.getStocks().subscribe({
            next: (data) => {
                console.log(data[id - 1])
            },
            error: (e) => console.error(e),
        })
    }
}
