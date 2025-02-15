import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { ToastService } from "./toaster-service/toaster.service"
// import { ExceptionCode } from "@capacitor/core"

@Injectable({
    providedIn: "root",
})
export class ErrorHandlingService {
    constructor(
        private toaster: ToastService,
        private router: Router
    ) {}

    handleHttpError(error: HttpErrorResponse): void {
        const message =
            error.error?.message || "Une erreur inconnue est survenue."
        const status = error.status

        switch (status) {
            case 409:
                this.toaster.error(
                    "Conflit lors de l'opération. Vérifiez les données envoyées."
                )
                throw new HttpErrorResponse({
                    status: 409,
                    statusText:
                        "Conflit lors de l'opération. Vérifiez les données envoyées.",
                })
                break

            case 500:
                this.toaster.error(
                    "Erreur interne du serveur. Merci de réessayer."
                )
                throw new HttpErrorResponse({
                    status: 500,
                    statusText:
                        "Erreur interne du serveur. Merci de réessayer.",
                })

                break

            case 503:
                this.toaster.error("Service indisponible. Merci de réessayer.")
                throw new HttpErrorResponse({
                    status: 503,
                    statusText: "Service indisponible. Merci de réessayer.",
                })
                break
        }
    }
}
