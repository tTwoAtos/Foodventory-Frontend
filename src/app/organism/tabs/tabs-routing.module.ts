import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { TabsPage } from "./tabs.page"

const routes: Routes = [
    {
        path: "app",
        component: TabsPage,
        children: [
            {
                path: "example",
                loadChildren: () =>
                    import("../../page/page-example/tab1.module").then(
                        (m) => m.Tab1PageModule
                    ),
            },
            {
                path: "community",
                loadChildren: () =>
                    import("../../page/community/community.module").then(
                        (m) => m.CommunityPageModule
                    ),
            },
            {
                path: "",
                redirectTo: "/app/community",
                pathMatch: "full",
            },
        ],
    },
    {
        path: "",
        redirectTo: "/app/community",
        pathMatch: "full",
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
