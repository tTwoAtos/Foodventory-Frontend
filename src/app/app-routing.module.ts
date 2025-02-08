import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./guards/auth-guard/auth.guard"
import { LoginPageComponent } from "./page/login-page/login-page.component"
import { RegisterPageComponent } from "./page/register-page/register-page.component"
import { WelcomePageComponent } from "./page/welcome-page/welcome-page.component"

const routes: Routes = [
    {
        path: "",
        component: WelcomePageComponent,
    },
    {
        path: "login",
        component: LoginPageComponent,
    },
    {
        path: "register",
        component: RegisterPageComponent,
    },
    {
        path: "",
        canActivate: [AuthGuard],
        children: [
            {
                path: "scan",
                loadChildren: () =>
                    import("./page/page-scanner/page-scanner.module").then(
                        (m) => m.PageScannerPageModule
                    ),
            },
            {
                path: "basket",
                loadChildren: () =>
                    import("./page/basket/basket.module").then(
                        (m) => m.BasketPageModule
                    ),
            },
            {
                path: "stock",
                loadChildren: () =>
                    import("./page/stock/stock.module").then((m) => m.StockPageModule),
            },
            {
                path: "product-content",
                loadChildren: () =>
                    import("./page/product-content/product-content.module").then(
                        (m) => m.ProductContentPageModule
                    ),
            },
        ],
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
