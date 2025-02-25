import { Component, OnInit, Output } from "@angular/core"
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component";
import { CommunityService } from "@app/services/community-services/community.service"
import { Community } from "@app/types/community"
import { FooterComponent } from "../../molecule/footer/footer.component";
import { HeaderComponent } from "../../molecule/header/header.component";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, InfoCardComponent, FooterComponent, HeaderComponent, RouterLink]
})
export class HomePage implements OnInit {

  mockComs: Community[] = []

  headerIcon = "leaf-outline"
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
