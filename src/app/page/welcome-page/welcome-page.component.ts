import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-welcome-page",
    templateUrl: "./welcome-page.component.html",
    styleUrls: ["./welcome-page.component.scss"],
    standalone: true,
    imports: [CommonModule, IonicModule],
})
export class WelcomePageComponent {
    constructor(protected router: Router) {}
}
