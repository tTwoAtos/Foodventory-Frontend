import { CommonModule } from "@angular/common"
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core"
import { IonicModule } from "@ionic/angular"
import { debounceTime, Subject } from "rxjs"

@Component({
    selector: "app-large-button",
    templateUrl: "./large-button.component.html",
    styleUrls: ["./large-button.component.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule],
})
export class LargeButtonComponent implements OnInit {
    @Input() icon: string = ""
    @Input() text: string = ""

    @Output() actionEvent = new EventEmitter<void>()

    private click$ = new Subject<void>()

    constructor() {
        this.click$.pipe(debounceTime(50)).subscribe(() => this.action())
    }

    ngOnInit() { }

    onClick() {
        this.click$.next()
    }

    action() {
        this.actionEvent.emit()
    }
}
