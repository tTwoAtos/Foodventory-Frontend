import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./organism/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'stock-content',
    loadChildren: () => import('./page/stock-content/stock-content.module').then(m => m.StockContentPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
