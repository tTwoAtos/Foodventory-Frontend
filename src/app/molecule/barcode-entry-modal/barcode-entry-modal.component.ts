import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms"
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

    // form: FormGroup

    constructor(private fb: FormBuilder) {
        // this.form = this.fb.group({
        //     barcode: [
        //         "",
        //         [
        //             WithMessage(Validators.required, DefaultMessage.Required),
        //             WithMessage(
        //                 Validators.minLength(13),
        //                 "Ce champ doit comporter 13 chiffres"
        //             ),
        //             WithMessage(Validators.pattern("/^\d+$/"), "Ne peut être composer que de chiffres")
        //         ],
        //     ],
        // })
    }

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

    setOpen(value: boolean) {
        this.isModalOpen = value
    }

    confirm() {
        this.confirmEvent.emit(this.barcode as any)
        this.setOpen(false)
    }

    cancel() {
        this.cancelEvent.emit()
        this.setOpen(false)
    }
}
