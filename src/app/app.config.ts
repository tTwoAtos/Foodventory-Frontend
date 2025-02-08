import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from "@angular/common/http"
import { ApplicationConfig } from "@angular/core"
import { provideClientHydration } from "@angular/platform-browser"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { provideIonicAngular } from "@ionic/angular/standalone"
import { AuthGuard } from "./guards/auth-guard/auth.guard"
import { AuthInterceptor } from "./interceptors/auth.interceptor"
import { httpErrorInterceptor } from "./interceptors/http-error.interceptor"
import { ErrorHandlingService } from "./services/global-error-handler.service"
import { Toaster } from "./utils/toaster"

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(
            withInterceptors([httpErrorInterceptor, AuthInterceptor]),
            withFetch()
        ),
        provideIonicAngular({}),
        ErrorHandlingService,
        Toaster,
        AuthGuard,
    ],
}
