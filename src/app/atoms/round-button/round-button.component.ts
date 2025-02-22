import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-round-button",
    templateUrl: "./round-button.component.html",
    styleUrls: ["./round-button.component.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class RoundButtonComponent implements OnInit {
    @Input() color: string = "primary"
    @Input() icon: string = ""

    @Output() actionEvent = new EventEmitter<void>()
    @Input() size: string = "medium"

    constructor() {}

    ngOnInit() {}

    action() {
        this.actionEvent.emit()
    }
}
