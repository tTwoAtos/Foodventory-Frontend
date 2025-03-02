import { CommonModule } from "@angular/common"
import { Component, OnInit } from "@angular/core"
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { AuthControllerService, TokenResponse } from "@app/apis/auth"
import { InvitationCodeModalComponent } from "@app/molecule/modals/invitation-code-modal/invitation-code-modal.component"
import { ToastService } from "@app/services/toaster-service/toaster.service"
import { TokenService } from "@app/services/token-services/token.service"
import { PASSWORD_MIN_LENGTH } from "@app/utils/const/const"
import { DefaultMessage } from "@app/utils/const/default-form-validation-messages"
import { WithMessage } from "@app/utils/validators/validator-with-message"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-login-form",
    templateUrl: "./login-form.component.html",
    styleUrls: ["./login-form.component.scss"],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        IonicModule,
        InvitationCodeModalComponent,
    ],
})
export class LoginFormComponent implements OnInit {
    loginForm: FormGroup

    constructor(
        private service: AuthControllerService,
        private fb: FormBuilder,
        private tokenService: TokenService,
        protected router: Router,
        private toasterService: ToastService,
        private route: ActivatedRoute
    ) {
        this.loginForm = this.fb.group({
            email: [
                "",
                [
                    WithMessage(Validators.required, DefaultMessage.Required),
                    WithMessage(Validators.email, DefaultMessage.Email),
                ],
            ],
            password: [
                "",
                [
                    WithMessage(Validators.required, DefaultMessage.Required),
                    WithMessage(
                        Validators.minLength(PASSWORD_MIN_LENGTH),
                        DefaultMessage.PasswordMinLength
                    ),
                ],
            ],
        })
    }

    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            this.loginForm.patchValue({ email: params.get("email") })
        })
    }

    onSubmit() {
        if (!this.loginForm.valid) {
            this.loginForm.markAllAsTouched()
            return
        }

        this.service.login(this.loginForm.value).subscribe({
            next: (tokenResponse: TokenResponse) => {
                if (tokenResponse.access_token) {
                    this.tokenService.login(tokenResponse.access_token)
                }
            },
            error: (error) => {
                console.log(error)

                if (error) {
                    this.toasterService.error("Email ou mot de passe incorrect")
                }
            },
        })
    }
}
