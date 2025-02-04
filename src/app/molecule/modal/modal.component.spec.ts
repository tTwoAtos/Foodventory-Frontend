import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { IonicModule } from "@ionic/angular"

import { ModalComponent } from "./modal.component"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("ModalComponent", () => {
    let component: ModalComponent
    let fixture: ComponentFixture<ModalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents()

        fixture = TestBed.createComponent(ModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
