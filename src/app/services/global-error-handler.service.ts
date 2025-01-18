import { HttpErrorResponse } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
// import { Toaster } from "@app/utils/toaster"
import { ExceptionCode } from "@capacitor/core"

@Injectable({
    providedIn: "root",
})
export class ErrorHandlingService {
    constructor(
        // private toaster: Toaster,
        private router: Router
    ) {}

    handleHttpError(error: HttpErrorResponse): void {
        const message =
            error.error?.message || "Une erreur inconnue est survenue."
        const status = error.status

        switch (status) {
            case 400:
                //this.toaster.error("Requête incorrecte. Vérifiez les données.")
                throw new HttpErrorResponse({ status: 400 })
                break

            case 401:
                //this.toaster.error("Veuillez vous reconnecter.")
                throw new HttpErrorResponse({ status: 401 })
                this.router.navigate(["/login"])
                break

            case 403:
                throw new HttpErrorResponse({
                    status: 403,
                    statusText:
                        "Accès refusé. Vous n'avez pas les permissions nécessaires.",
                })
                // this.toaster.error(
                //     "Accès refusé. Vous n'avez pas les permissions nécessaires."
                // )
                break

            case 409:
                throw new HttpErrorResponse({
                    status: 409,
                    statusText:
                        "Conflit lors de l'opération. Vérifiez les données envoyées.",
                })
                // this.toaster.error(
                //   "Conflit lors de l'opération. Vérifiez les données envoyées."
                // )
                break

            case 500:
                throw new HttpErrorResponse({
                    status: 500,
                    statusText:
                        "Erreur interne du serveur. Merci de réessayer plus tard.",
                })

                // this.toaster.error(
                //     "Erreur interne du serveur. Merci de réessayer plus tard."
                // )
                break

            case 503:
                throw new HttpErrorResponse({
                    status: 503,
                    statusText:
                        "Service indisponible. Merci de réessayer plus tard.",
                })
                // this.toaster.error(
                //     "Service indisponible. Merci de réessayer plus tard."
                // )
                break

            default:
                throw new HttpErrorResponse({ statusText: message })
                // this.toaster.error(message)
                break
        }
    }
}
