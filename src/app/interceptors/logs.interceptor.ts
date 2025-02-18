import { HttpInterceptorFn } from "@angular/common/http"
import { tap } from "rxjs"
import { environment } from "src/environments/environment.prod"

export const logsInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(
        tap(
            (event) => {
                if (!environment.production) {
                    console.log("Incoming response:", event)
                }
            },
            (error) => {
                if (!environment.production) {
                    console.error("Error response:", error)
                }
            }
        )
    )
}
