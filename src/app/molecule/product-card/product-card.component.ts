import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { Product } from "@app/apis/products"
import { IonicModule } from "@ionic/angular"
import { RoundButtonComponent } from "../../atoms/round-button/round-button.component"

@Component({
    selector: "app-product-card",
    templateUrl: "./product-card.component.html",
    imports: [IonicModule, CommonModule, RoundButtonComponent],
    standalone: true,
    styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
    @Input() product: Product = {
        nbAdded: 1,
    }

    // TODO : when amount is changed -> send request to backend to modify in bdd
    // but for each changing or after a few seconds to avoid too much request ?

    increment() {
        this.product.nbAdded!++
    }

    decrement() {
        if (this.product.nbAdded! > 0) {
            this.product.nbAdded!--
        }
    }
}
