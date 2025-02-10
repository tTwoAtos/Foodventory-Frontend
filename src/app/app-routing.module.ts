import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./guards/auth-guard/auth.guard"
import { BasketPage } from "./page/basket/basket.page"
import { LoginPageComponent } from "./page/login-page/login-page.component"
import { PageScannerPage } from "./page/page-scanner/page-scanner.page"
import { ProductContentPage } from "./page/product-content/product-content.page"
import { RegisterPageComponent } from "./page/register-page/register-page.component"
import { StockPage } from "./page/stock/stock.page"
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
                component: PageScannerPage,
            },
            {
                path: "basket",
                component: BasketPage,
            },
            {
                path: "stock",
                component: StockPage,
            },
            {
                path: "product-content",
                component: ProductContentPage,
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
