import { NgModule } from "@angular/core"
import { PreloadAllModules, RouterModule, Routes } from "@angular/router"
import { AuthGuard } from "./guards/auth-guard/auth.guard"

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./organism/tabs/tabs.module").then((m) => m.TabsPageModule),
        // canActivate: [AuthGuard],
    },
    {
        path: "scan",
        loadChildren: () =>
            import("./page/page-scanner/page-scanner.module").then(
                (m) => m.PageScannerPageModule
            ),
        // canActivate: [AuthGuard],
    },
    {
        path: "basket",
        loadChildren: () =>
            import("./page/basket/basket.module").then(
                (m) => m.BasketPageModule
            ),
        // canActivate: [AuthGuard],
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
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
