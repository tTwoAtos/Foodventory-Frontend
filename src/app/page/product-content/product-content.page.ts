import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-product-content",
    templateUrl: "./product-content.page.html",
    styleUrls: ["./product-content.page.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class ProductContentPage {
    constructor() {}
}
