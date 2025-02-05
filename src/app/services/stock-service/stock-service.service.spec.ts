import { TestBed } from "@angular/core/testing"
import { StockService } from "./stock.service"
import { provideHttpClient } from "@angular/common/http"
import { provideHttpClientTesting } from "@angular/common/http/testing"

describe("StockService", () => {
    let service: StockService

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                StockService,
                provideHttpClient(),
                provideHttpClientTesting(),
            ],
        })
        service = TestBed.inject(StockService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
})
