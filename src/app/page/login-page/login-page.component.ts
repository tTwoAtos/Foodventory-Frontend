import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { LoginFormComponent } from "../../molecule/forms/login-form/login-form.component"
import { AuthLayoutComponent } from "../../organism/layouts/auth-layout/auth-layout.component"

@Component({
    selector: "app-login-page",
    templateUrl: "./login-page.component.html",
    styleUrls: ["./login-page.component.scss"],
    imports: [CommonModule, AuthLayoutComponent, LoginFormComponent],
    standalone: true,
})
export class LoginPageComponent {
    constructor() {}
}
