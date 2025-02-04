import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { BarcodeEntryModalComponent } from "./barcode-entry-modal.component"

describe("BarcodeEntryModalComponent", () => {
    let component: BarcodeEntryModalComponent
    let fixture: ComponentFixture<BarcodeEntryModalComponent>

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [BarcodeEntryModalComponent],
        }).compileComponents()

        fixture = TestBed.createComponent(BarcodeEntryModalComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    }))

    it("should create", () => {
        expect(component).toBeTruthy()
    })
})
