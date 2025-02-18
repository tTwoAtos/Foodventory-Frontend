import {
    HttpHandlerFn,
    HttpInterceptorFn,
    HttpRequest,
} from "@angular/common/http"
import { inject } from "@angular/core"
import { Router } from "@angular/router"
import { TokenService } from "@app/services/token-services/token.service"

export const AuthInterceptor: HttpInterceptorFn = (
    req: HttpRequest<unknown>,
    next: HttpHandlerFn
) => {
    const authService = inject(TokenService)
    const router = inject(Router)

    console.log("auth interceptor", authService.isAuthenticated())

    if (!authService.isAuthenticated()) {
        router.navigateByUrl("/login")
    }

    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authService.token}`,
        },
    })

    return next(authReq)
}
