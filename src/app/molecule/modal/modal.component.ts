import {
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef,
    ViewChild,
} from "@angular/core"
import { FormsModule } from "@angular/forms"
import {
    IonButton,
    IonContent,
    IonModal,
    IonText,
} from "@ionic/angular/standalone"
import { CommonModule } from "@angular/common"

@Component({
    selector: "app-modal",
    templateUrl: "./modal.component.html",
    standalone: true,
    styleUrls: ["./modal.component.scss"],
    imports: [
        IonText,
        IonButton,
        IonContent,
        IonModal,
        FormsModule,
        CommonModule,
    ],
})
export class ModalComponent {
    @ViewChild(IonModal) modal!: IonModal

    @Input() title: string = ""
    @Input() modalIsOpen: boolean = false
    @Input() contentTemplate!: TemplateRef<any>
    @Input() haveConfirmButton: boolean = false

    @Output() confirmEvent = new EventEmitter<void>()
    @Output() cancelEvent = new EventEmitter<void>()

    confirm() {
        this.modal.dismiss()
        this.confirmEvent.emit()
    }

    cancel() {
        this.modal.dismiss()
        this.cancelEvent.emit()
    }
}
