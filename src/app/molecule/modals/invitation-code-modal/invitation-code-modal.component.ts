import { CommonModule } from "@angular/common"
import { HttpErrorResponse } from "@angular/common/http"
import { Component, Input } from "@angular/core"
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms"
import { InvitationControllerService } from "@app/apis/community"
import { ModalComponent } from "@app/molecule/modal/modal.component"
import { ToastService } from "@app/services/toaster-service/toaster.service"
import { DefaultMessage } from "@app/utils/const/default-form-validation-messages"
import { WithMessage } from "@app/utils/validators/validator-with-message"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-invitation-code-modal",
    templateUrl: "./invitation-code-modal.component.html",
    styleUrls: ["./invitation-code-modal.component.scss"],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IonicModule, ModalComponent],
})
export class InvitationCodeModalComponent {
    invitationCodeForm: FormGroup
    @Input() isModalOpen: boolean = false

    constructor(
        private fb: FormBuilder,
        private service: InvitationControllerService,
        private toasterService: ToastService
    ) {
        this.invitationCodeForm = this.fb.group({
            code: [
                "",
                [WithMessage(Validators.required, DefaultMessage.Required)],
            ],
        })
    }

    onSubmit() {
        if (!this.invitationCodeForm.valid) {
            this.invitationCodeForm.markAllAsTouched()
            return
        }

        this.service
            .validateInvitation(this.invitationCodeForm.value.code)
            .subscribe({
                next: () => {
                    this.toasterService.success("Bienvenue dans la communauté")
                    this.isModalOpen = false
                },
                error: (error: HttpErrorResponse) => {
                    console.log(error)

                    if (error.status.toString() === "404") {
                        this.toasterService.error("Code incorrect")
                    }
                },
            })
    }
}
