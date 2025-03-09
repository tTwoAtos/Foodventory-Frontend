import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-user-info-card",
    standalone: true,
    imports: [IonicModule, CommonModule],
    templateUrl: "./user-info-card.component.html",
    styleUrl: "./user-info-card.component.scss",
})
export class UserInfoCardComponent {
    @Input() name: string = ""
    @Input() nb: number = 0
    @Input() icon: string = ""

    constructor() {
        addIcons({ ...icons })
    }
}
