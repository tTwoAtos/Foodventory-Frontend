import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockPage } from './stock.page';
import { StockContentPage } from '../stock-content/stock-content.page';

const routes: Routes = [
  {
    path: '',
    component: StockPage,
  },
  {
    path: 'content/:stockId',
    loadChildren: () =>
      import('./../stock-content/stock-content.module').then(
        (m) => m.StockContentPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockPageRoutingModule {}
