import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageScannerPageRoutingModule } from './page-scanner-routing.module';

import { PageScannerPage } from './page-scanner.page';
import { AddProductModalComponent } from "../../molecule/add-product-modal/add-product-modal.component";
import { BarcodeEntryModalComponent } from "../../molecule/barcode-entry-modal/barcode-entry-modal.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageScannerPageRoutingModule,
    AddProductModalComponent,
    BarcodeEntryModalComponent
],
  declarations: [PageScannerPage]
})
export class PageScannerPageModule {}
