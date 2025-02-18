import { Component, Input } from "@angular/core"
import { IonIcon, IonButton, IonText, IonBadge } from "@ionic/angular/standalone"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
    selector: "app-info-card",
    standalone: true,
    imports: [IonText, IonButton, IonIcon, IonBadge],
    templateUrl: "./info-card.component.html",
    styleUrl: "./info-card.component.scss",
})
export class InfoCardComponent {
    @Input() name: string = ""
    @Input() productTotal: number = 0

    constructor() {
        addIcons({ ...icons })
    }
}
