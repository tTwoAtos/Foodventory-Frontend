import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { AddProductModalComponent } from "./add-product-modal.component"

describe("AddProductModalComponent", () => {
    let component: AddProductModalComponent
    let fixture: ComponentFixture<AddProductModalComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [AddProductModalComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(AddProductModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
