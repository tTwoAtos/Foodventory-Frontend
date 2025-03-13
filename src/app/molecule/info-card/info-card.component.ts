import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-info-card",
    standalone: true,
    imports: [IonicModule, CommonModule],
    templateUrl: "./info-card.component.html",
    styleUrl: "./info-card.component.scss",
})
export class InfoCardComponent {
    @Input() name?: string = ""
    @Input() nb?: number = 0
    @Input() icon: string = ""

    constructor() {
        addIcons({ ...icons })
    }
}
