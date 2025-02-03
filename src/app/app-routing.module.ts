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
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
