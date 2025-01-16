import { ApplicationConfig } from "@angular/core"
import { provideRouter } from "@angular/router"

import {
    provideHttpClient,
    withFetch,
    withInterceptors,
} from "@angular/common/http"
import { provideClientHydration } from "@angular/platform-browser"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { provideIonicAngular } from "@ionic/angular/standalone"
// import { routes } from "./app.routes"
import { authInterceptor } from "./interceptors/JWT.interceptor"
import { httpErrorInterceptor } from "./interceptors/http-error.interceptor"
import { ErrorHandlingService } from "./services/global-error-handler.service"
import { Toaster } from "./utils/toaster"

export const appConfig: ApplicationConfig = {
    providers: [
        // provideRouter(routes),
        provideClientHydration(),
        provideAnimationsAsync(),
        provideHttpClient(
            withInterceptors([httpErrorInterceptor, authInterceptor]),
            withFetch()
        ),
        provideIonicAngular({}),
        ErrorHandlingService,
        Toaster,
    ],
}
