import {
    HttpErrorResponse,
    HttpInterceptorFn,
    HttpResponse,
} from "@angular/common/http"
import { inject } from "@angular/core"
import { ErrorHandlingService } from "@app/services/global-error-handler.service"
import { catchError, of, throwError } from "rxjs"

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const globalerrorHandler = inject(ErrorHandlingService)

    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            if (err.status >= 400) {
                globalerrorHandler.handleHttpError(err)
            }

            if (err.status === 200) {
                return of(new HttpResponse({ status: 200, body: {} }))
            }

            // Pour les autres erreurs, on les propage
            return throwError(() => err)
        })
    )
}
