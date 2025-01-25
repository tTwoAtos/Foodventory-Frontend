import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http"
import { inject } from "@angular/core"
import { ErrorHandlingService } from "@app/services/global-error-handler.service"
import { catchError, throwError } from "rxjs"

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
    const globalerrorHandler = inject(ErrorHandlingService)

    return next(req).pipe(
        catchError((err: HttpErrorResponse) => {
            globalerrorHandler.handleHttpError(err)

            // Re-throw the error to propagate it further
            return throwError(() => err)
        })
    )
}
