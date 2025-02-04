import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { IonicModule } from "@ionic/angular"

import { AddProductModalComponent } from "./add-product-modal.component"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("AddProductModalComponent", () => {
    let component: AddProductModalComponent
    let fixture: ComponentFixture<AddProductModalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AddProductModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [AddProductModalComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents()

        fixture = TestBed.createComponent(AddProductModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
