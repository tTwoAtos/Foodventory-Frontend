import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { ProductCardType } from "@app/types/product"
import { IonicModule } from "@ionic/angular"
import { RoundButtonComponent } from "../round-button/round-button.component"

@Component({
    selector: "app-product-card",
    templateUrl: "./product-card.component.html",
    imports: [IonicModule, CommonModule, RoundButtonComponent],
    standalone: true,
    styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
    @Input() product: ProductCardType = {
        productId: "",
        name: "",
        amount: 0,
    }

    // TODO : when amount is changed -> send request to backend to modify in bdd
    // but for each changing or after a few seconds to avoid too much request ?

    increment() {
        this.product.amount++
    }

    decrement() {
        if (this.product.amount > 1) {
            this.product.amount--
        }
    }
}
