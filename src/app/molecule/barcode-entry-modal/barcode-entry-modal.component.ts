import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"
import { ModalComponent } from "../modal/modal.component"

@Component({
    selector: "app-barcode-entry-modal",
    templateUrl: "./barcode-entry-modal.component.html",
    standalone: true,
    styleUrls: ["./barcode-entry-modal.component.scss"],
    imports: [
        IonicModule,
        FormsModule,
        ModalComponent,
        CommonModule,
        ReactiveFormsModule,
    ],
})
export class BarcodeEntryModalComponent {
    @Input() isModalOpen: boolean = false
    barcode: string = ""

    @Output() confirmEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()
    @Output() closedEvent = new EventEmitter<void>()

    constructor() {}

    onKeyDown(event: KeyboardEvent) {
        const isNumber = /^[0-9]$/.test(event.key)
        const allowedKeys = [
            "Backspace",
            "Tab",
            "ArrowLeft",
            "ArrowRight",
            "Delete",
        ]

        if (!allowedKeys.includes(event.key) && !isNumber) {
            event.preventDefault()
        }

        const input = event.target as HTMLInputElement
        if (
            input.value.length >= 13 &&
            event.key !== "Backspace" &&
            event.key !== "Delete"
        ) {
            event.preventDefault()
        }
    }

    confirm() {
        this.confirmEvent.emit(this.barcode as any)
    }

    cancel() {
        this.cancelEvent.emit()
    }

    close() {
        this.barcode = ""
        this.closedEvent.emit()
    }
}
