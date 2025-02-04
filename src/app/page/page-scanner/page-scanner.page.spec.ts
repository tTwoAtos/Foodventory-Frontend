import { ComponentFixture, TestBed } from "@angular/core/testing"
import { PageScannerPage } from "./page-scanner.page"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("PageScannerPage", () => {
    let component: PageScannerPage
    let fixture: ComponentFixture<PageScannerPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PageScannerPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(PageScannerPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
