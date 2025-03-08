import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
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
export class AddStockModalComponent implements OnInit {
    @Input() isModalOpen: boolean = false

    stockName: string = ""

    @Output() closedEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()
    @Output() confirmEvent = new EventEmitter<void>()

    constructor() {}

    ngOnInit() {}

    close() {
        this.stockName = ""
        this.closedEvent.emit()
    }
    cancel() {
        this.cancelEvent.emit()
    }
    confirm() {
        this.confirmEvent.emit(this.stockName as any)
    }
}
