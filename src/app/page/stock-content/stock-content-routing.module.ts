import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockContentPage } from './stock-content.page';

const routes: Routes = [
  {
    path: '',
    component: StockContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockContentPageRoutingModule {}
