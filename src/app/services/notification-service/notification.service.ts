import { Injectable, inject } from "@angular/core"
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarHorizontalPosition,
    MatSnackBarRef,
    MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar"

/**
 * Interface for snackbar options
 */
interface SnackbarOptions {
    duration?: number
    verticalPosition?: MatSnackBarVerticalPosition
    horizontalPosition?: MatSnackBarHorizontalPosition
}

/**
 * Service for displaying notifications using Material Snackbar
 */
@Injectable({
    providedIn: "root",
})
export class NotificationService {
    private snackBar = inject(MatSnackBar)
    private snackbarQueue: (() => void)[] = []
    private isDisplaying = false

    /**
     * Default options for snackbar
     */
    private defaultOptions: SnackbarOptions = {
        duration: 5000,
        verticalPosition: "top",
        horizontalPosition: "center",
    }

    /**
     * Shows a message using Material Snackbar
     * @param message - The message to display
     * @param type - The type of message (success, error, alert, info)
     * @param options - Custom options for the snackbar
     */
    private showMessage(
        message: string,
        type: "success" | "error" | "alert" | "info",
        options: SnackbarOptions = {}
    ) {
        const showSnackbar = () => {
            const finalOptions = { ...this.defaultOptions, ...options }
            const config: MatSnackBarConfig = {
                duration: finalOptions.duration,
                horizontalPosition: finalOptions.horizontalPosition,
                verticalPosition: finalOptions.verticalPosition,
                panelClass: [`snackbar-${type}`],
            }

            const snackBarRef: MatSnackBarRef<any> = this.snackBar.open(
                message,
                "Fermer",
                config
            )

            snackBarRef.afterDismissed().subscribe(() => {
                this.isDisplaying = false
                this.showNextSnackbar()
            })
        }

        this.snackbarQueue.push(showSnackbar)

        if (!this.isDisplaying) {
            this.showNextSnackbar()
        }
    }

    /**
     * Shows the next snackbar in the queue
     */
    private showNextSnackbar() {
        if (this.snackbarQueue.length > 0) {
            this.isDisplaying = true
            const nextSnackbar = this.snackbarQueue.shift()
            nextSnackbar!()
        }
    }

    /**
     * Shows a success message
     * @param message - The success message to display
     * @param options - Custom options for the snackbar
     */
    showSuccess(message: string, options: SnackbarOptions = {}) {
        this.showMessage(message, "success", options)
    }

    /**
     * Shows an error message
     * @param message - The error message to display
     * @param options - Custom options for the snackbar
     */
    showError(message: string, options: SnackbarOptions = {}) {
        this.showMessage(message, "error", options)
    }

    /**
     * Shows an alert message
     * @param message - The alert message to display
     * @param options - Custom options for the snackbar
     */
    showAlert(message: string, options: SnackbarOptions = {}) {
        this.showMessage(message, "alert", options)
    }

    /**
     * Shows an info message
     * @param message - The info message to display
     * @param options - Custom options for the snackbar
     */
    showInfo(message: string, options: SnackbarOptions = {}) {
        this.showMessage(message, "info", options)
    }
}
