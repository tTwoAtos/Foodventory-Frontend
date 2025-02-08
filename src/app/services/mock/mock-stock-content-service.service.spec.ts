import { TestBed } from "@angular/core/testing"

import { MockStockContentService } from "./mock-stock-content-service.service"

describe("MockStockContentServiceService", () => {
    let service: MockStockContentService

    beforeEach(() => {
        TestBed.configureTestingModule({})
        service = TestBed.inject(MockStockContentService)
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })
})
