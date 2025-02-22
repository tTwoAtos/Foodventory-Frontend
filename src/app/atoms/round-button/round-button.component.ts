import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { debounceTime, Subject } from "rxjs"

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

    private click$ = new Subject<void>()

    constructor() {
        this.click$
            .pipe(debounceTime(50))
            .subscribe(() => this.action())
    }

    ngOnInit() {}

    onClick() {
        this.click$.next()
    }

    action() {
        this.actionEvent.emit()
    }
}
