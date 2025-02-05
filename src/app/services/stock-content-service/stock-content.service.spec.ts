import { TestBed } from "@angular/core/testing"
import { StockContentService } from "./stock-content.service"
import { provideHttpClient } from "@angular/common/http"
import { provideHttpClientTesting } from "@angular/common/http/testing"

describe("StockContentService", () => {
    let service: StockContentService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StockContentService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        })
        service = TestBed.inject(StockContentService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
})
