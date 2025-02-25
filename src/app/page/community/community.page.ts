import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component"
import { CommunityService } from "@app/services/community-services/community.service"
import { Community } from "@app/types/community"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { FooterComponent } from "../../molecule/footer/footer.component";
import { HeaderComponent } from "../../molecule/header/header.component";

@Component({
  selector: 'app-community',
  templateUrl: './community.page.html',
  styleUrls: ['./community.page.scss'],
  providers: [HttpClient],
  standalone: true,
  imports: [CommonModule, IonicModule, InfoCardComponent, FormsModule, RouterLink, FooterComponent, HeaderComponent]
})
export class CommunityPage implements OnInit {

  mockComs: Community[] = []
  headerIcon = "caret-back-outline"
  headerTitle = "Foodventory"
  icon = "people-outline"

  constructor(private communityService: CommunityService) {
    addIcons({ ...icons })

  }

  async ngOnInit(): Promise<void> {
    await this.communityService.getCommunities().then((res) => {
      this.mockComs = res
    })
  }
}
