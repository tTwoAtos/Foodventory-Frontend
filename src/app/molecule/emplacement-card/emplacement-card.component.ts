import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonIcon, IonButton, IonText } from "@ionic/angular/standalone";

@Component({
  selector: 'emplacement-card',
  standalone: true,
  imports: [IonText, IonButton, IonIcon, RouterLink],
  templateUrl: './emplacement-card.component.html',
  styleUrl: './emplacement-card.component.scss',
})
export class EmplacementCardComponent {
  @Input() name: string = "Test";
  @Input() productAmount: number = 0;
  @Input() contentPath: string = 'content'; // must redirect following content ID
}




