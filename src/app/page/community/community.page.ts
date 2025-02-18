import { CommunityService } from '@app/services/community-services/community.service';
import { HttpClient } from "@angular/common/http"
import { Component, Output } from "@angular/core"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
})
export class CommunityPage {

  constructor(private communityService: CommunityService) {
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
