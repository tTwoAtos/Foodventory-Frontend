import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"

import { InvitationModalComponent } from "./invitation-modal.component"

describe("InvitationModalComponent", () => {
    let component: InvitationModalComponent
    let fixture: ComponentFixture<InvitationModalComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [InvitationModalComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(InvitationModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
