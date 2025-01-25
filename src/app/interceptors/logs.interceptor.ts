import { HttpInterceptorFn } from "@angular/common/http"
import { tap } from "rxjs"

export const logsInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        tap(
            (event) => {
                console.log("Incoming response:", event)
            },
            (error) => {
                console.error("Error response:", error)
            }
        )
    )
}
