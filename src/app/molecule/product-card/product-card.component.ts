import { Component, Input, OnInit } from "@angular/core"
import { Product } from "@app/apis/products"
import { IonIcon, IonButton, IonRow } from "@ionic/angular/standalone"

@Component({
    selector: "app-product-card",
    templateUrl: "./product-card.component.html",
    imports: [IonIcon, IonButton, IonRow],
    standalone: true,
    styleUrls: ["./product-card.component.scss"],
})
export class ProductCardComponent {
    @Input() product: Product = {}

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
