import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cgu',
  templateUrl: './cgu.page.html',
  styleUrls: ['./cgu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class CguPage {

  protected adress: string = "support@foodventory.com"

  constructor() { }


}
