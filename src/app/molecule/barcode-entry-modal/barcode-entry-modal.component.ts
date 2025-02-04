import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { ModalComponent } from "../modal/modal.component"
import { CommonModule } from "@angular/common"
import { IonInput } from "@ionic/angular/standalone"

@Component({
    selector: "app-barcode-entry-modal",
    templateUrl: "./barcode-entry-modal.component.html",
    standalone: true,
    styleUrls: ["./barcode-entry-modal.component.scss"],
    imports: [IonInput, FormsModule, ModalComponent, CommonModule],
})
export class BarcodeEntryModalComponent {
    @Input() isModalOpen: boolean = false
    barcode: string = ""

    @Output() confirmEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()

    invalidChars: string[] = ["-", "+", "e"]

    constructor() {}

    onKeyDown(event: KeyboardEvent) {
        if (this.invalidChars.includes(event.key)) {
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

    setOpen(value: boolean) {
        this.isModalOpen = value
    }

    confirm() {
        console.log(this.barcode)
        this.confirmEvent.emit()
        this.setOpen(false)
    }

    cancel() {
        this.cancelEvent.emit()
        this.setOpen(false)
    }
}
