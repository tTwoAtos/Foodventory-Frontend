import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { BasketPage } from "./basket.page"
import { provideHttpClient } from "@angular/common/http"
import { provideHttpClientTesting } from "@angular/common/http/testing"
import { provideRouter } from "@angular/router"

describe("BasketPage", () => {
    let component: BasketPage
    let fixture: ComponentFixture<BasketPage>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                BasketPage,
                provideHttpClient(),
                provideHttpClientTesting(),
                provideRouter([]),
            ],
        })
        fixture = TestBed.createComponent(BasketPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
