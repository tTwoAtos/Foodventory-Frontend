import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { NotificationService } from "../notification-service/notification.service"
import { TokenService } from "../token-service/token.service"

@Injectable({
    providedIn: "root",
})
export class AuthService {
    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    // login(
    //     email: string,
    //     password: string
    // ): Observable<ApiResponse<{ authToken: string; refreshToken: string }>> {
    //     return this.http
    //         .post<{
    //             authToken: string
    //             refreshToken: string
    //         }>(`${environment.apiURL}/login`, { email, password })
    //         .pipe(
    //             map((response) => ({
    //                 status: 200,
    //                 message: "Success",
    //                 data: response,
    //             })),
    //             tap((apiResponse) => {
    //                 if (
    //                     apiResponse.data &&
    //                     apiResponse.data.authToken &&
    //                     apiResponse.data.refreshToken
    //                 ) {
    //                     this.tokenService.setTokens(
    //                         apiResponse.data.authToken,
    //                         apiResponse.data.refreshToken
    //                     )
    //                 }
    //             })
    //         )
    // }

    // refreshToken(): Observable<
    //     ApiResponse<{ authToken: string; refreshToken: string }>
    // > {
    //     const refreshToken = this.tokenService.getRefreshToken()
    //     return this.http
    //         .get<{
    //             authToken: string
    //             refreshToken: string
    //         }>(`${environment.apiURL}/token?refreshToken=${refreshToken}`)
    //         .pipe(
    //             map((response) => ({
    //                 status: 200,
    //                 message: "Success",
    //                 data: response,
    //             })),
    //             tap((apiResponse) => {
    //                 if (
    //                     apiResponse.data &&
    //                     apiResponse.data.authToken &&
    //                     apiResponse.data.refreshToken
    //                 ) {
    //                     this.tokenService.setTokens(
    //                         apiResponse.data.authToken,
    //                         apiResponse.data.refreshToken
    //                     )
    //                 }
    //             }),
    //             catchError((error) => {
    //                 this.logout()
    //                 return throwError(() => error)
    //             })
    //         )
    // }

    // activateAccount(token: string): Observable<ApiResponse<void>> {
    //     return this.http.post<ApiResponse<void>>(
    //         `${environment.apiURL}/register/confirm/${token}`,
    //         {}
    //     )
    // }

    logout(): void {
        this.tokenService.removeTokens()
        this.router.navigate(["/login"])
    }

    isLoggedIn(): boolean {
        return (
            this.tokenService.isAuthTokenValid() ||
            this.tokenService.isRefreshTokenValid()
        )
    }

    isAdmin(): boolean {
        return this.tokenService.isAdmin()
    }
}
