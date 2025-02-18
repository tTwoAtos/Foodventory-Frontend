import { CommunityService } from '@app/services/community-services/community.service';
import { HttpClient } from "@angular/common/http"
import { Component, Output } from "@angular/core"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { InfoCardComponent } from '@app/molecule/info-card/info-card.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, InfoCardComponent, FormsModule]
})
export class CommunityPage {

  constructor(private communityService: CommunityService, protected router: Router) {
    addIcons({ ...icons })

  }

  @Output() datas = [
    {
      id: 1,
      name: "Les Alternés",
      productAmount: 153
    },
    {
      id: 2,
      name: "T2nic",
      productAmount: 2
    },
    {
      id: 3,
      name: "Atoz les opticiens",
      productAmount: 75
    },
    {
      id: 4,
      name: "Je sais pas",
      productAmount: 15
    }
  ]

  async redirectToStockContent(id: number) {
    this.communityService.getCommunities().subscribe({
      next: (data) => {
        console.log(data[id - 1])
      },
      error: (e) => console.error(e),
    })
  }

}
