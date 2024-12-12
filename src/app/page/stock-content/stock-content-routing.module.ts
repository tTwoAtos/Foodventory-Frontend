import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockContentPage } from './stock-content.page';

const routes: Routes = [
  {
    path: '',
    component: StockContentPage
  },
  {
    path: 'product',
    loadChildren: () => import('./../product-content/product-content.module').then(m => m.ProductContentPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockContentPageRoutingModule {}
