import { inject, Injectable } from "@angular/core"
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from "@angular/router"
import { AuthService } from "@services/auth-services/auth.service"

@Injectable({
    providedIn: "root",
})
export class AuthGuardService {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this.authService.isLoggedIn()) {
            return true
        } else {
            this.router.navigate(["/login"])
            return false
        }
    }
}

export const AuthGuard: CanActivateFn = (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): boolean => {
    return inject(AuthGuardService).canActivate(next, state)
}
