import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import {
    FormBuilder,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
} from "@angular/forms"
import { IonicModule } from "@ionic/angular"
import { BarcodeEntryModalComponent } from "../barcode-entry-modal/barcode-entry-modal.component"
import { ModalComponent } from "../modal/modal.component"

@Component({
    selector: "app-add-product-modal",
    templateUrl: "./add-product-modal.component.html",
    standalone: true,
    styleUrls: ["./add-product-modal.component.scss"],
    imports: [
        IonicModule,
        FormsModule,
        ModalComponent,
        CommonModule,
        BarcodeEntryModalComponent,
        ReactiveFormsModule,
    ],
})
export class AddProductModalComponent implements OnInit {
    @Input() isModalOpen: boolean = false
    isBarecodeModalOpen: boolean = false

    @Output() closeEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()

    scanDetailsForm: FormGroup

    constructor(private fb: FormBuilder) {
        this.scanDetailsForm = this.fb.group({
            quantity: 1,
            emplacement: "",
            community: "",
        })
    }
    ngOnInit(): void {
        return
        // Get all data of user -> emplacement / community
        // throw new Error("Method not implemented.")
    }

    onSubmit() {
        throw new Error("Method not implemented.")
    }

    openBarcodeModal(value: boolean) {
        if (value == true) {
            this.closeEvent.emit()
        }

        this.isBarecodeModalOpen = value
    }

    setOpen(value: boolean) {
        this.isModalOpen = value
    }

    cancel() {
        this.cancelEvent.emit()
        this.setOpen(false)
    }
}
