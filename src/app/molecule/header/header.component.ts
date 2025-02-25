import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class HeaderComponent {

  @Input() headerTitle: string = ""


  constructor() {
    addIcons({ ...icons })
  }

}
