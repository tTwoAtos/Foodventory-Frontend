import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./guards/auth-guard/auth.guard"
import { BasketPage } from "./page/basket/basket.page"
import { LoginPageComponent } from "./page/login-page/login-page.component"
import { PageScannerPage } from "./page/page-scanner/page-scanner.page"
import { ProductContentPage } from "./page/product-content/product-content.page"
import { RegisterPageComponent } from "./page/register-page/register-page.component"
import { StockContentPage } from "./page/stock-content/stock-content.page"
import { StockPage } from "./page/stock/stock.page"
import { WelcomePageComponent } from "./page/welcome-page/welcome-page.component"
import { CommunityPage } from "./page/community/community.page"
import { HomePage } from "./page/home/home.page"
import { CguPage } from "./page/cgu/cgu.page"

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
        path: "cgu",
        component: CguPage,
    },
    {
        path: 'home',
        component: HomePage,
    },
    {
        path: 'settings',
        component: HomePage,
    },
    {
        path: "communities",
        component: CommunityPage,
    },
    {
        path: "community/:communityId",
        component: StockPage,
    },
    {
        path: "stock/:stockId",
        component: StockContentPage,
    },
    {
        path: "scan",
        component: PageScannerPage,
    },
    {
        path: "basket",
        component: BasketPage,
    },
    {
        path: "product/:productId",
        component: ProductContentPage,
    },
    {
        path: "",
        canActivate: [AuthGuard],
        children: [

        ],
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }
