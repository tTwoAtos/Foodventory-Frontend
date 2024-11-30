import { Component, OnInit, Output } from '@angular/core';
import { IonIcon, IonItem, IonLabel, IonButton, IonRow, IonList } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {

  
  constructor() {
    addIcons({ ...icons })
  }

  @Output() mockDatas = [
    {
      name: "Réfrégirateur",
      productAmount: 23
    },
    {
      name: "Congélateur",
      productAmount: 16
    },
    {
      name: "Placard",
      productAmount: 7
    }
  ];

  selectedCategories = [
    { name: 'Viande' },
    { name: 'Dessert' },
    { name: 'Poisson' },
    { name: 'Fruit' },
    { name: 'Légume' },
    { name: 'Boisson' },
    { name: 'Féculent' },
  ]

  ngOnInit() {
  }

}
