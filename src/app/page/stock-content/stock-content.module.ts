import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockContentPageRoutingModule } from './stock-content-routing.module';

import { StockContentPage } from './stock-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockContentPageRoutingModule
  ],
  declarations: [StockContentPage]
})
export class StockContentPageModule {}
