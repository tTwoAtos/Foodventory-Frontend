import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { AUTH_TOKEN_KEY } from "@app/utils/const/const"
import { JwtHelperService } from "@auth0/angular-jwt"

@Injectable({
    providedIn: "root",
})
export class TokenService {
    get token() {
        return localStorage.getItem(AUTH_TOKEN_KEY)
    }

    constructor(
        private router: Router,
        private jwtHelper: JwtHelperService
    ) {}

    login(token: string) {
        localStorage.setItem(AUTH_TOKEN_KEY, token)

        this.router.navigateByUrl("/scan")
    }

    // Vérifie si l'utilisateur est authentifié
    isAuthenticated(): boolean {
        const token = this.token
        return !!token && !this.isTokenExpired(token)
    }

    // Déconnecte l'utilisateur
    logout(): void {
        localStorage.removeItem(AUTH_TOKEN_KEY)
        this.router.navigate(["/login"])
    }

    // Vérifie si le token est expiré (si vous utilisez des JWT)
    private isTokenExpired(token: string): boolean {
        const payload = JSON.parse(atob(token.split(".")[1]))
        console.log(payload.exp, payload.exp < Date.now() / 1000)

        return payload.exp < Date.now() / 1000
    }

    isAdmin(): boolean {
        if (!this.token) {
            return false
        }
        const decodedToken = this.jwtHelper.decodeToken(this.token)
        return decodedToken && decodedToken.role === "ROLE_ADMIN"
    }

    getUserId(): string | null {
        if (!this.token) {
            return null
        }

        const decodedToken = this.jwtHelper.decodeToken(this.token)
        return decodedToken.id
    }
}
