import { Component, OnInit } from "@angular/core"

@Component({
    selector: "app-page-scanner",
    templateUrl: "./page-scanner.page.html",
    styleUrls: ["./page-scanner.page.scss"],
})
export class PageScannerPage {
    isModalOpen: boolean = false

    setOpen(value: boolean) {
        this.isModalOpen = value
    }

    constructor() {}
}
