import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StockContentPage } from "./stock-content.page"

describe("StockContentPage", () => {
    let component: StockContentPage
    let fixture: ComponentFixture<StockContentPage>

    beforeEach(() => {
        fixture = TestBed.createComponent(StockContentPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
