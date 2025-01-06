import { Component, Input, OnInit } from '@angular/core';
import { IonIcon, IonButton, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  imports: [IonIcon, IonButton, IonRow],
  standalone: true,
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() amount: number = 0;

  ngOnInit(): void {}

  // TODO : when amount is changed -> send request to backend to modify in bdd
  // but for each changing or after a few seconds to avoid too much request ?

  increment() {
    this.amount++;
  }

  decrement() {
    if (this.amount > 0) {
      this.amount--;
    }
  }
}
