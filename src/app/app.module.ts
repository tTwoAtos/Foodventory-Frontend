import { NgModule } from "@angular/core"
import {
    BrowserModule,
    provideClientHydration,
} from "@angular/platform-browser"
import { RouteReuseStrategy } from "@angular/router"

import { IonicModule, IonicRouteStrategy } from "@ionic/angular"

import { provideHttpClient, withInterceptors } from "@angular/common/http"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { JwtModule } from "@auth0/angular-jwt"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { AuthInterceptor } from "./interceptors/auth.interceptor"
import { httpErrorInterceptor } from "./interceptors/http-error.interceptor"
import { logsInterceptor } from "./interceptors/logs.interceptor"
import { ErrorHandlingService } from "./services/global-error-handler.service"
import { ToastService } from "./services/toaster-service/toaster.service"

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        JwtModule.forRoot({}),
        IonicModule,
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        provideHttpClient(
            withInterceptors([
                AuthInterceptor,
                httpErrorInterceptor,
                logsInterceptor,
            ])
        ),
        ToastService,
        ErrorHandlingService,
        provideAnimationsAsync(),
        provideClientHydration(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
