import { Component } from "@angular/core"
import { AuthLayoutComponent } from "../../organism/layouts/auth-layout/auth-layout.component"
import { RegisterFormComponent } from "../../molecule/forms/register-form/register-form.component"

@Component({
    selector: "app-register-page",
    templateUrl: "./register-page.component.html",
    styleUrls: ["./register-page.component.scss"],
    standalone: true,
    imports: [AuthLayoutComponent, RegisterFormComponent],
})
export class RegisterPageComponent {
    constructor() {}
}
