import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'stock-content',
  templateUrl: './stock-content.page.html',
  styleUrls: ['./stock-content.page.scss'],
})
export class StockContentPage implements OnInit {

  constructor() {
    addIcons({ ...icons });
  }

  productCards = [
    {
      name: "Panzani - coquillettes - 500g",
      amount: 3,
      // icon: "path",
    },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },
    { name: "Steak haché - 100g", amount: 2 },
    { name: "Prince de LU", amount: 10 },

  ]

  ngOnInit() {
  }

}
