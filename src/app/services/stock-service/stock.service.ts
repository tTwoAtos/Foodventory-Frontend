import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Stock } from "@app/types/stock"
import { mockStockDetails } from "@assets/mocks/datas/stocks/stock-details.mock"
import { mockStocks } from "@assets/mocks/datas/stocks/stock.mock"
import { EmptyError, NotFoundError, Observable } from "rxjs"

@Injectable({
    providedIn: "root",
})
export class StockService {
    constructor() { }

    getStocks(): Promise<Stock[]> {
        return new Promise((success) => {
            success(mockStocks)
        })
    }

    getFavStocks(): Promise<Stock[]> {
        return new Promise((success) => {
            success(mockStocks.filter((item, index) => index < 3))
        })
    }

    // getStockById(id: number): Promise<Stock> {
    //     return new Promise((success, error) => {
    //         const stock = mockStocks.find((stock) => stock.id == id)

    //         if (stock == undefined) {
    //             throw new Error("No stock found...")
    //         }

    //         success(stock)
    //     })
    // }
}
