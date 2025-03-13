import { CommonModule } from "@angular/common"
import { Component, Input, model } from "@angular/core"
import {
    ProductResponseDto,
    ProductToCommunityControllerService,
} from "@app/apis/product-to-community"
import { ToastService } from "@app/services/toaster-service/toaster.service"
import { TokenService } from "@app/services/token-services/token.service"
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
    @Input() product?: ProductResponseDto

    products = model<ProductResponseDto[]>([])

    constructor(
        private tokenService: TokenService,
        private service: ProductToCommunityControllerService,
        private toastService: ToastService
    ) {}

    increment() {
        if (!this.product?.quantity || !this.product?.eancode) return

        this.service
            .updateQuantity(
                this.tokenService.getLoggedCommunityId(),
                this.product.eancode,
                {
                    qte: this.product.quantity + 1,
                }
            )
            .subscribe({
                next: () => {
                    if (!this.product?.quantity) return

                    this.product.quantity++
                },
                error: (err) => {
                    console.error(err)
                    this.toastService.error("Une erreur est survenue")
                },
            })
    }

    decrement() {
        if (this.product?.eancode && this.product.quantity) {
            this.service
                .updateQuantity(
                    this.tokenService.getLoggedCommunityId(),
                    this.product.eancode,
                    {
                        qte: this.product.quantity - 1,
                    }
                )
                .subscribe({
                    next: () => {
                        if (!this.product?.quantity) return
                        this.product.quantity--

                        if (this.product.quantity === 0) {
                            this.products.update((products) =>
                                products.filter(
                                    (product) =>
                                        product.eancode !==
                                        this.product?.eancode
                                )
                            )
                        }

                        this.toastService.success(
                            "Le produit a bien été supprimé"
                        )
                    },
                    error: (err) => {
                        console.error(err)
                        this.toastService.error(
                            "Une erreur est survenue lors de la suppression du produit"
                        )
                    },
                })
        }
    }
}
