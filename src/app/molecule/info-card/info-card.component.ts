import { Component, Input } from "@angular/core"
import { IonIcon, IonButton, IonText } from "@ionic/angular/standalone"

@Component({
    selector: "app-info-card",
    standalone: true,
    imports: [IonText, IonButton, IonIcon],
    templateUrl: "./info-card.component.html",
    styleUrl: "./info-card.component.scss",
})
export class InfoCardComponent {
    @Input() name: string = ""
    @Input() productTotal: number = 0
}
