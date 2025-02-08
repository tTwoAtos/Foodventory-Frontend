import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import {
    FormBuilder,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from "@angular/forms"
import { ActivatedRoute, Router } from "@angular/router"
import { AuthControllerService, TokenResponse } from "@app/apis/auth"
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
    imports: [CommonModule, ReactiveFormsModule, IonicModule],
})
export class LoginFormComponent {
    loginForm: FormGroup

    constructor(
        private service: AuthControllerService,
        private fb: FormBuilder,
        private tokenService: TokenService,
        protected router: Router,
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
        if (this.loginForm.valid) {
            this.service
                .login(this.loginForm.value)
                .subscribe((tokenResponse: TokenResponse) => {
                    console.log(tokenResponse)

                    if (tokenResponse.access_token) {
                        this.tokenService.login(tokenResponse.access_token)
                    }
                })
        }
    }

    test() {
        console.log(this.loginForm.controls["email"])
    }
}
