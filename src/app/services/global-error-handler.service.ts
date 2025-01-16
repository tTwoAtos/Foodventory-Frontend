import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Toaster } from "@app/utils/toaster"

@Injectable({
    providedIn: "root",
})
export class ErrorHandlingService {
    constructor(
        private toaster: Toaster,
        private router: Router
    ) {}

    handleHttpError(error: HttpErrorResponse): void {
        const message =
            error.error?.message || "Une erreur inconnue est survenue."
        const status = error.status

        switch (status) {
            case 400:
                this.toaster.error("Requête incorrecte. Vérifiez les données.")
                break

            case 401:
                this.toaster.error("Veuillez vous reconnecter.")
                this.router.navigate(["/login"])
                break

            case 403:
                this.toaster.error(
                    "Accès refusé. Vous n'avez pas les permissions nécessaires."
                )
                break

            case 409:
                this.toaster.error(
                    "Conflit lors de l'opération. Vérifiez les données envoyées."
                )
                break

            case 500:
                this.toaster.error(
                    "Erreur interne du serveur. Merci de réessayer plus tard."
                )
                break

            case 503:
                this.toaster.error(
                    "Service indisponible. Merci de réessayer plus tard."
                )
                break

            default:
                this.toaster.error(message)
                break
        }
    }
}
