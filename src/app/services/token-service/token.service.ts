import { Injectable } from "@angular/core"
import { JwtHelperService } from "@auth0/angular-jwt"

@Injectable({
    providedIn: "root",
})
export class TokenService {
    private authToken: string = ""
    private refreshToken: string = ""
    private jwtHelper: JwtHelperService = new JwtHelperService()

    constructor() {
        this.loadTokens()
    }

    private loadTokens(): void {
        const authToken = localStorage.getItem("authToken")
        const refreshToken = localStorage.getItem("refreshToken")
        if (authToken && !this.jwtHelper.isTokenExpired(authToken)) {
            this.authToken = authToken
        } else {
            this.authToken = ""
            localStorage.removeItem("authToken")
        }
        if (refreshToken) {
            this.refreshToken = refreshToken
        } else {
            this.refreshToken = ""
            localStorage.removeItem("refreshToken")
        }
    }

    setTokens(authToken: string, refreshToken: string): void {
        this.authToken = authToken
        this.refreshToken = refreshToken
        localStorage.setItem("authToken", authToken)
        localStorage.setItem("refreshToken", refreshToken)
    }

    getAuthToken(): string {
        return this.authToken
    }

    getRefreshToken(): string {
        return this.refreshToken
    }

    removeTokens(): void {
        this.authToken = ""
        this.refreshToken = ""
        localStorage.removeItem("authToken")
        localStorage.removeItem("refreshToken")
    }

    isAuthTokenValid(): boolean {
        return (
            !!this.authToken && !this.jwtHelper.isTokenExpired(this.authToken)
        )
    }

    isRefreshTokenValid(): boolean {
        return (
            !!this.refreshToken &&
            !this.jwtHelper.isTokenExpired(this.refreshToken)
        )
    }

    isAdmin(): boolean {
        if (!this.authToken) {
            return false
        }
        const decodedToken = this.jwtHelper.decodeToken(this.authToken)
        const decodedRefreshToken = this.jwtHelper.decodeToken(
            this.refreshToken
        )
        return (
            (decodedToken && decodedToken.isAdmin === true) ||
            (decodedRefreshToken && decodedRefreshToken.isAdmin === true)
        )
    }

    getUserId(): string | null {
        if (!this.authToken) {
            return null
        }

        const decodedToken = this.jwtHelper.decodeToken(this.authToken)
        return decodedToken.id
    }
}
