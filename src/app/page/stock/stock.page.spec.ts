import { ComponentFixture, TestBed } from "@angular/core/testing"
import { StockPage } from "./stock.page"
import { provideHttpClient } from "@angular/common/http"
import { provideHttpClientTesting } from "@angular/common/http/testing"

describe("StockPage", () => {
    let component: StockPage
    let fixture: ComponentFixture<StockPage>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StockPage,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        })

        fixture = TestBed.createComponent(StockPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
