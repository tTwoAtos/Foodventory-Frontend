import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { PageScannerPage } from "./page-scanner.page"
import { provideHttpClient } from "@angular/common/http"
import { provideRouter } from "@angular/router"
import { provideHttpClientTesting } from "@angular/common/http/testing"

describe("PageScannerPage", () => {
    let component: PageScannerPage
    let fixture: ComponentFixture<PageScannerPage>

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                PageScannerPage,
                provideHttpClient(),
                provideHttpClientTesting(),
                provideRouter([]),
            ],
        })
        fixture = TestBed.createComponent(PageScannerPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
