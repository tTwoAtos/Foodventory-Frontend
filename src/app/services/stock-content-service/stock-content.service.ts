import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable({
    providedIn: "root",
})
export class StockContentService {
    constructor(private httpClient: HttpClient) {}

    getStockContent(): Observable<any> {
        return this.httpClient.get("/assets/mocks/datas/stock-data.mock.json")
    }
}
