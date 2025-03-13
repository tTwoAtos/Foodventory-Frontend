import { CommonModule } from "@angular/common"
import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
} from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import {
    Emplacement,
    EmplacementControllerService,
} from "@app/apis/emplacement"
import { Product } from "@app/apis/products"
import { UserToCommunityControllerService } from "@app/apis/user"
import { TokenService } from "@app/services/token-services/token.service"
import { IonicModule, SelectChangeEventDetail } from "@ionic/angular"
import { IonSelectCustomEvent } from "@ionic/core"
import { ModalComponent } from "../modal/modal.component"
import { RoundButtonComponent } from "../round-button/round-button.component"

@Component({
    selector: "app-add-product-modal",
    templateUrl: "./add-product-modal.component.html",
    standalone: true,
    styleUrls: ["./add-product-modal.component.scss"],
    imports: [
        IonicModule,
        ModalComponent,
        CommonModule,
        RoundButtonComponent,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class AddProductModalComponent implements OnChanges, OnInit {
    @Input() isModalOpen: boolean = false
    isBarecodeModalOpen: boolean = false

    @Output() closedEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()
    @Output() confirmEvent = new EventEmitter<void>()
    @Input() newProduct: Product = {}
    @Input() emplacementId: string = ""

    stocks: Emplacement[] = []
    newProductData = {
        name: "",
        productId: "",
        qte: 1,
        emplacementId: "1",
        communityId: 1,
    }

    constructor(
        private tokenService: TokenService,
        private uToCService: UserToCommunityControllerService,
        private stockService: EmplacementControllerService
    ) {
        // TODO : CHECK THIS LINES AFTER GETTING DEVEL
        if (this.tokenService.getLoggedCommunityId() != undefined) {
            this.newProductData.communityId =
                this.tokenService.getLoggedCommunityId()!
        } else {
            // throw new Error("No community for this user ???")
        }
    }

    ngOnInit() {
        console.log("Empty On init")
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.stockService
            .getAllByCommunity(this.tokenService.getLoggedCommunityId())
            .subscribe({
                next: (value: Emplacement[]) => {
                    this.stocks = value
                },
                error: (err) => {
                    console.error(err)
                },
            })

        if (changes["newProduct"] != undefined) {
            this.newProduct = changes["newProduct"].currentValue
            if (this.newProduct != undefined) {
                if (this.newProduct.name != undefined) {
                    this.newProductData.name = this.newProduct.name
                }

                if (this.newProduct.eancode != undefined) {
                    this.newProductData.productId = this.newProduct.eancode
                }
            }
        }

        if (changes["emplacementId"] != undefined) {
            this.emplacementId = changes["emplacementId"].currentValue

            if (this.emplacementId != undefined) {
                this.newProductData.emplacementId = this.emplacementId
            }
        }
    }

    setOpen(value: boolean) {
        this.isModalOpen = value
        this.closedEvent.emit()
    }

    cancel() {
        this.cancelEvent.emit()
        this.setOpen(false)
    }
    confirm() {
        this.confirmEvent.emit(this.newProductData as any)
        this.setOpen(false)
    }
    close() {
        this.closedEvent.emit()
        this.setOpen(false)
    }

    decrement() {
        if (this.newProductData.qte > 1) {
            this.newProductData.qte--
        }
    }

    increment() {
        this.newProductData.qte++
    }

    UpdateEmplacementValue(
        $event: IonSelectCustomEvent<SelectChangeEventDetail<any>>
    ) {
        this.newProductData.emplacementId = $event.detail.value
    }
}
