import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import { TokenService } from "../../services/token-services/token.service"

export const adminGuard: CanActivateFn = (route, state) => {
    const authService = inject(TokenService)
    const router = inject(Router)

    if (authService.isAdmin()) {
        return true
    } else {
        return router.createUrlTree(["/home"])
    }
}
