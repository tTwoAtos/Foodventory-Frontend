import { Component, Output } from "@angular/core"
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component";
import { FooterComponent } from "../../molecule/footer/footer.component";
import { HeaderComponent } from "../../molecule/header/header.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, InfoCardComponent, FooterComponent, HeaderComponent]
})
export class HomePage {

  constructor(protected router: Router) {
    addIcons({ ...icons })
  }

  @Output() headerIcon = "leaf-outline"
  @Output() headerTitle = "FoodStock"

  @Output() icon = "people-outline"
  @Output() datas = [
    {
      id: 1,
      name: "Les Alternés",
      productAmount: 5
    },
    {
      id: 2,
      name: "T2nic",
      productAmount: 2
    },
    {
      id: 3,
      name: "Atoz les opticiens",
      productAmount: 7
    },
    {
      id: 4,
      name: "Je sais pas",
      productAmount: 3
    }
  ]



}
