import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-basket",
    templateUrl: "./basket.page.html",
    styleUrls: ["./basket.page.scss"],
})
export class BasketPage {
    productCards: {
        name: string
        amount: number
    }[] = []

    constructor() {}
}
