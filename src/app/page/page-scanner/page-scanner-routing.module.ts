import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageScannerPage } from './page-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: PageScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageScannerPageRoutingModule {}
