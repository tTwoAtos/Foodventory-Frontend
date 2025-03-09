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
import { TokenService } from "@app/services/token-services/token.service"
import { DefaultMessage } from "@app/utils/const/default-form-validation-messages"
import { WithMessage } from "@app/utils/validators/validator-with-message"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-invitation-modal",
    templateUrl: "./invitation-modal.component.html",
    styleUrls: ["./invitation-modal.component.scss"],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IonicModule, ModalComponent],
})
export class InvitationModalComponent {
    invitationForm: FormGroup
    @Input() isModalOpen: boolean = false

    constructor(
        private fb: FormBuilder,
        private service: InvitationControllerService,
        private toasterService: ToastService,
        private tokenService: TokenService
    ) {
        this.invitationForm = this.fb.group({
            communityId: [
                tokenService.getLoggedCommunityId(),
                Validators.required,
            ],
            userEmail: [
                "",
                [
                    WithMessage(Validators.required, DefaultMessage.Required),
                    WithMessage(Validators.email, DefaultMessage.Email),
                ],
            ],
        })
    }

    onSubmit() {
        if (!this.invitationForm.valid) {
            this.invitationForm.markAllAsTouched()
            return
        }

        this.service.createInvitation(this.invitationForm.value).subscribe({
            next: () => {
                this.toasterService.success("L'invitation a été envoyée")
                this.isModalOpen = false
            },
            error: (error: HttpErrorResponse) => {
                this.toasterService.error(
                    "L'utilisateur n'est pas enregistré dans l'application"
                )
            },
        })
    }
}
