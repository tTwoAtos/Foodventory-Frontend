import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-auth-layout",
    templateUrl: "./auth-layout.component.html",
    styleUrls: ["./auth-layout.component.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class AuthLayoutComponent {
    constructor() {}
}
