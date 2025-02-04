import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { IonicModule } from "@ionic/angular"

import { BarcodeEntryModalComponent } from "./barcode-entry-modal.component"
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"

describe("BarcodeEntryModalComponent", () => {
    let component: BarcodeEntryModalComponent
    let fixture: ComponentFixture<BarcodeEntryModalComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BarcodeEntryModalComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    })

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [BarcodeEntryModalComponent],
            imports: [IonicModule.forRoot()],
        }).compileComponents()

        fixture = TestBed.createComponent(BarcodeEntryModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
