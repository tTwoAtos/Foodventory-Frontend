import { Component, Input, OnInit } from "@angular/core"
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
import { HeaderComponent } from "@app/molecule/header/header.component";
import { StockService } from "@app/services/stock-service/stock.service";
import { Stock } from "@app/types/stock";
import { CommunityControllerService } from "@app/apis/community";
import { EmplacementControllerService } from "@app/apis/emplacement";
import { UserToCommunityControllerService } from "@app/apis/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule, InfoCardComponent, FooterComponent, RouterLink]
})
export class HomePage implements OnInit {

  mockComs: Community[] = []
  mockStocks: Stock[] = [];

  headerTitle: string = "Foodventory"
  comsIcon = "people-outline"
  stockIcon = "chevron-forward-outline"



  constructor(private communityService: CommunityControllerService, private stockService: EmplacementControllerService, private usercommunityService: UserToCommunityControllerService) {
    addIcons({ ...icons })
  }

  async ngOnInit(): Promise<void> {

    await this.usercommunityService.getFavCommunityByUser().then(res) => {

    }

    await this.communityService.getFavCommunities().then((res) => {
      this.mockComs = res
    })
    await this.stockService.getFavStocks().then((res) => {
      this.mockStocks = res
    })
  }

}
