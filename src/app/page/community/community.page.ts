import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { RouterLink } from "@angular/router"
import { CommunityDto, UserToCommunityControllerService } from "@app/apis/user"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component"
import { TokenService } from "@app/services/token-services/token.service"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { FooterComponent } from "../../molecule/footer/footer.component"
import { HeaderComponent } from "../../molecule/header/header.component"

@Component({
    selector: "app-community",
    templateUrl: "./community.page.html",
    styleUrls: ["./community.page.scss"],
    providers: [HttpClient],
    standalone: true,
    imports: [
        CommonModule,
        IonicModule,
        InfoCardComponent,
        FormsModule,
        RouterLink,
        FooterComponent,
        HeaderComponent,
    ],
})
export class CommunityPage implements OnInit {
    communities: CommunityDto[] = []
    headerIcon = "caret-back-outline"
    headerTitle = "Foodventory"
    icon = "people-outline"

    constructor(
        private communityService: UserToCommunityControllerService,
        private tokenService: TokenService
    ) {
        addIcons({ ...icons })
    }

    async ngOnInit(): Promise<void> {
        await this.communityService
            .getAllByUser(this.tokenService.getAuthUserId()!)
            .subscribe({
                next: (res) => {
                    this.communities = res
                },
                error: (err) => console.error(err),
            })
    }
}
