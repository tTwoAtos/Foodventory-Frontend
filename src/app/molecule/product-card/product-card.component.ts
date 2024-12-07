import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, IonButton, IonRow } from "@ionic/angular/standalone";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  imports: [IonIcon, IonButton, IonRow],
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() name: string = "test";
  @Input() amount: number = 10;


  ngOnInit(): void {

  }
}
