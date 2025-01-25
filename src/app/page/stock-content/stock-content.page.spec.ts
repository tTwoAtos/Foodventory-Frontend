import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StockContentPage } from "./stock-content.page"
import { provideHttpClientTesting } from "@angular/common/http/testing"
import { provideHttpClient } from "@angular/common/http"
import { provideRouter } from "@angular/router"

describe("StockContentPage", () => {
    let component: StockContentPage
    let fixture: ComponentFixture<StockContentPage>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StockContentPage,
                provideHttpClient(),
                provideHttpClientTesting(),
                provideRouter([]),
            ],
        })
        fixture = TestBed.createComponent(StockContentPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
