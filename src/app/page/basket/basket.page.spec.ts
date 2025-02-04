import { ComponentFixture, TestBed } from "@angular/core/testing"
import { BasketPage } from "./basket.page"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("BasketPage", () => {
    let component: BasketPage
    let fixture: ComponentFixture<BasketPage>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BasketPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(BasketPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
