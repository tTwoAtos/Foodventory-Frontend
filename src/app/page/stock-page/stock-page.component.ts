import { Component, Output } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { EmplacementCardComponent } from 'src/app/molecule/emplacement-card/emplacement-card.component';

@Component({
  selector: 'app-stock-page',
  standalone: true,
  imports: [IonIcon, EmplacementCardComponent],
  templateUrl: './stock-page.component.html',
  styleUrl: './stock-page.component.scss'
})
export class StockPageComponent {

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


}
