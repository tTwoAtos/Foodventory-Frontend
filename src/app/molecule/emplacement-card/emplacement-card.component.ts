import { Component, Input } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'emplacement-card',
  standalone: true,
  imports: [IonIcon],
  templateUrl: './emplacement-card.component.html',
  styleUrl: './emplacement-card.component.scss',
})
export class EmplacementCardComponent {

  @Input() name: string = "Test";
  @Input() productAmount: number = 0;
}




