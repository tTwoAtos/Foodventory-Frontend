import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { EmplacementControllerService } from "@app/apis/emplacement"
import { ToastService } from "@app/services/toaster-service/toaster.service"
import { TokenService } from "@app/services/token-services/token.service"
import { IonicModule } from "@ionic/angular"
import { ModalComponent } from "../modal/modal.component"

@Component({
    selector: "app-add-stock-modal",
    templateUrl: "./add-stock-modal.component.html",
    standalone: true,
    styleUrls: ["./add-stock-modal.component.scss"],
    imports: [
        IonicModule,
        ModalComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class AddStockModalComponent {
    @Input() isModalOpen: boolean = false

    stockName: string = ""

    @Output() closedEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()
    @Output() confirmEvent = new EventEmitter<void>()

    constructor(
        private tokenService: TokenService,
        private emplacementService: EmplacementControllerService,
        private toasterService: ToastService
    ) {}

    close() {
        this.stockName = ""
        this.closedEvent.emit()
    }
    cancel() {
        this.cancelEvent.emit()
    }
    confirm() {
        this.emplacementService
            .add({
                communityId: this.tokenService.getLoggedCommunityId(),
                name: this.stockName,
            })
            .subscribe({
                next: () => {
                    this.confirmEvent.emit(this.stockName as any)
                },
                error: (err) => {
                    console.error(err)
                    this.toasterService.error(
                        "Echec de la création de l'emplacement de stockage"
                    )
                },
            })
    }
}
