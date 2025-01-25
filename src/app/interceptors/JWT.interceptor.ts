import { HttpInterceptorFn } from "@angular/common/http"

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    const authToken = "YOUR_AUTH_TOKEN_GET_LOGIC_HERE"

    const authReq = req.clone({
        setHeaders: {
            Authorization: `Bearer ${authToken}`,
        },
    })

    return next(authReq)
}
