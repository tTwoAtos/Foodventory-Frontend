import { Injectable } from "@angular/core"
import { CanActivate, Router, UrlTree } from "@angular/router"
import { TokenService } from "@app/services/token-services/token.service"
import { Observable } from "rxjs"

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(
        private authService: TokenService,
        private router: Router
    ) {}

    canActivate():
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true
        } else {
            return this.router.createUrlTree(["/login"])
        }
    }
}
