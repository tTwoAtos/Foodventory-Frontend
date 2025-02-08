import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { StockDetails } from "@app/types/stock"
import { mockStockDetails } from "@assets/mocks/datas/stocks/stock-details.mock"
import { Observable } from "rxjs"

@Injectable({
    providedIn: "root",
})
export class StockContentService {
    constructor() {}

    getContentById(id: number): Promise<StockDetails> {
        return new Promise((success) => {
            const stockContent = mockStockDetails.find(
                (content) => content.id == id
            )

            if (stockContent == undefined) {
                throw new Error("No stock content found....")
            }
            success(stockContent)
        })
    }
}
