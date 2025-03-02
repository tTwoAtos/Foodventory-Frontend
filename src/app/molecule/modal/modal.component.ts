import { CommonModule } from "@angular/common"
import {
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
} from "@angular/core"
import { FormsModule } from "@angular/forms"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    standalone: true,
    styleUrls: ["./modal.component.scss"],
    imports: [IonicModule, FormsModule, CommonModule],
})
export class ModalComponent {
    @Input() title: string = ""
    @Input() modalIsOpen: boolean = false
    @Input() contentTemplate!: TemplateRef<any>
    @Input() haveConfirmButton: boolean = false

    @Output() confirmEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()
    @Output() closedEvent = new EventEmitter<void>()

    confirm() {
        this.modalIsOpen = false
        this.confirmEvent.emit()
    }

    cancel() {
        this.modalIsOpen = false
        this.cancelEvent.emit()
    }

    close() {
        this.modalIsOpen = false
        this.closedEvent.emit()
    }
}
