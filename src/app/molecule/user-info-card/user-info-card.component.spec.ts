import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { UserInfoCardComponent } from "./user-info-card.component"

describe("UserUserInfoCardComponent", () => {
    let component: UserInfoCardComponent
    let fixture: ComponentFixture<UserInfoCardComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [UserInfoCardComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(UserInfoCardComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
