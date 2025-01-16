import { TestBed, fakeAsync, tick } from "@angular/core/testing"
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import { NotificationService } from "./notification.service"

describe("NotificationService", () => {
    let service: NotificationService
    let snackBar: jasmine.SpyObj<MatSnackBar>

    beforeEach(() => {
        const snackBarSpy = jasmine.createSpyObj("MatSnackBar", ["open"])

        TestBed.configureTestingModule({
            imports: [MatSnackBarModule, NoopAnimationsModule],
            providers: [
                NotificationService,
                { provide: MatSnackBar, useValue: snackBarSpy },
            ],
        })
        service = TestBed.inject(NotificationService)
        snackBar = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>
    })

    it("should be created", () => {
        expect(service).toBeTruthy()
    })

    it("should show success message", fakeAsync(() => {
        service.showSuccess("Success message")
        tick()
        expect(snackBar.open).toHaveBeenCalledWith(
            "Success message",
            "Fermer",
            jasmine.objectContaining({
                panelClass: ["snackbar-success"],
            })
        )
    }))

    it("should show error message", fakeAsync(() => {
        service.showError("Error message")
        tick()
        expect(snackBar.open).toHaveBeenCalledWith(
            "Error message",
            "Fermer",
            jasmine.objectContaining({
                panelClass: ["snackbar-error"],
            })
        )
    }))

    it("should show alert message", fakeAsync(() => {
        service.showAlert("Alert message")
        tick()
        expect(snackBar.open).toHaveBeenCalledWith(
            "Alert message",
            "Fermer",
            jasmine.objectContaining({
                panelClass: ["snackbar-alert"],
            })
        )
    }))

    it("should show info message", fakeAsync(() => {
        service.showInfo("Info message")
        tick()
        expect(snackBar.open).toHaveBeenCalledWith(
            "Info message",
            "Fermer",
            jasmine.objectContaining({
                panelClass: ["snackbar-info"],
            })
        )
    }))

    it("should use custom options", fakeAsync(() => {
        service.showSuccess("Custom message", {
            duration: 10000,
            horizontalPosition: "left",
            verticalPosition: "bottom",
        })
        tick()
        expect(snackBar.open).toHaveBeenCalledWith(
            "Custom message",
            "Fermer",
            jasmine.objectContaining({
                duration: 10000,
                horizontalPosition: "left",
                verticalPosition: "bottom",
            })
        )
    }))

    it("should queue messages and show them one by one", fakeAsync(() => {
        const dismissSpy = jasmine.createSpyObj("MatSnackBarRef", [
            "afterDismissed",
        ])
        dismissSpy.afterDismissed.and.returnValue({
            subscribe: (fn: any) => fn(),
        })
        snackBar.open.and.returnValue(dismissSpy)

        service.showSuccess("Message 1")
        service.showError("Message 2")
        service.showAlert("Message 3")

        tick()
        expect(snackBar.open).toHaveBeenCalledTimes(1)
        expect(snackBar.open).toHaveBeenCalledWith(
            "Message 1",
            "Fermer",
            jasmine.any(Object)
        )

        tick()
        expect(snackBar.open).toHaveBeenCalledTimes(2)
        expect(snackBar.open).toHaveBeenCalledWith(
            "Message 2",
            "Fermer",
            jasmine.any(Object)
        )

        tick()
        expect(snackBar.open).toHaveBeenCalledTimes(3)
        expect(snackBar.open).toHaveBeenCalledWith(
            "Message 3",
            "Fermer",
            jasmine.any(Object)
        )
    }))
})
