import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"

import { WelcomePageComponent } from "./welcome-page.component"

describe("HomePageComponent", () => {
    let component: WelcomePageComponent
    let fixture: ComponentFixture<WelcomePageComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [WelcomePageComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(WelcomePageComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
