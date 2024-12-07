import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockPageRoutingModule } from './stock-routing.module';

import { StockPage } from './stock.page';
import { EmplacementCardComponent } from "../../molecule/emplacement-card/emplacement-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockPageRoutingModule,
    EmplacementCardComponent
],
  declarations: [StockPage]
})
export class StockPageModule { }
