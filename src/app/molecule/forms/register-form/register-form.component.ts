import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
    CheckboxRequiredValidator,
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms"
import { Router, RouterLink } from "@angular/router"
import { AuthControllerService, AuthUserEntity } from "@app/apis/auth"
import { ToastService } from "@app/services/toaster-service/toaster.service"
import { TokenService } from "@app/services/token-services/token.service"
import { PASSWORD_MIN_LENGTH } from "@app/utils/const/const"
import { DefaultMessage } from "@app/utils/const/default-form-validation-messages"
import { passwordRegx } from "@app/utils/regex/password-regex"
import { passwordMatchValidator } from "@app/utils/validators/password-match-validator"
import { WithMessage } from "@app/utils/validators/validator-with-message"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-register-form",
    templateUrl: "./register-form.component.html",
    styleUrls: ["./register-form.component.scss"],
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, IonicModule, RouterLink],
})
export class RegisterFormComponent {
    registerForm: FormGroup

    constructor(
        private service: AuthControllerService,
        private fb: FormBuilder,
        private tokenService: TokenService,
        protected router: Router,
        private toasterService: ToastService
    ) {
        this.registerForm = this.fb.group({
            gender: ["0"], // Homme par défaut
            lastname: [
                "",
                WithMessage(Validators.required, DefaultMessage.Required),
            ],
            firstname: [
                "",
                WithMessage(Validators.required, DefaultMessage.Required),
            ],
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
                    WithMessage(
                        Validators.pattern(passwordRegx),
                        DefaultMessage.PasswordRegex
                    ),
                ],
            ],
            password_validation: [
                "",
                {
                    validators: [
                        WithMessage(
                            Validators.required,
                            DefaultMessage.Required
                        ),
                        WithMessage(
                            passwordMatchValidator(),
                            DefaultMessage.PasswordMatch
                        ),
                    ],
                    updateOn: "change",
                },
            ],

            consent: [
                "false",
                WithMessage(Validators.requiredTrue),
            ]
        })
    }

    onSubmit() {
        if (!this.registerForm.valid) {
            this.registerForm.markAllAsTouched()
            return
        }

        this.service.register(this.registerForm.value).subscribe({
            next: (registerResponse: AuthUserEntity) => {
                this.router.navigateByUrl(
                    "/login?email=" + registerResponse.email
                )
            },
        })
    }
}
