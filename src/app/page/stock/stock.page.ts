import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit } from "@angular/core"
import { RouterLink } from "@angular/router"
import {
    Emplacement,
    EmplacementControllerService,
} from "@app/apis/emplacement"
import { User, UserToCommunityControllerService } from "@app/apis/user"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component"
import { InvitationModalComponent } from "@app/molecule/modals/invitation-modal/invitation-modal.component"
import { UserInfoCardComponent } from "@app/molecule/user-info-card/user-info-card.component"
import { StockService } from "@app/services/stock-service/stock.service"
import { TokenService } from "@app/services/token-services/token.service"
import { Stock } from "@app/types/stock"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { AddStockModalComponent } from "../../molecule/add-stock-modal/add-stock-modal.component"
import { FooterComponent } from "../../molecule/footer/footer.component"
import { HeaderComponent } from "../../molecule/header/header.component"
import { RoundButtonComponent } from "../../molecule/round-button/round-button.component"

@Component({
    selector: "app-stock",
    templateUrl: "./stock.page.html",
    styleUrls: ["./stock.page.scss"],
    providers: [HttpClient],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule,
        InfoCardComponent,
        RouterLink,
        FooterComponent,
        HeaderComponent,
        RoundButtonComponent,
        AddStockModalComponent,
        UserInfoCardComponent,
        InvitationModalComponent,
    ],
})
export class StockPage implements OnInit {
    mockStocks: Stock[] = []
    users: User[] = []
    isModalInvitationOpen: boolean = false

    icon = "chevron-forward-outline"
    headerIcon = "caret-back-outline"
    headerAction = "../"
    headerTitle = "Les alternées"

    selectedCategories = [
        {
            name: "Viande",
            icon: "paw-outline",
        },
        {
            name: "Dessert",
            icon: "ice-cream-outline",
        },
        {
            name: "Poisson",
            icon: "fish-outline",
        },
        {
            name: "Fruits & Légumes",
            icon: "nutrition-outline",
        },
        {
            name: "Boisson",
            icon: "beer-outline",
        },
        {
            name: "Fast-food",
            icon: "fast-food-outline",
        },
        {
            name: "Surgelés",
            icon: "snow-outline",
        },
    ]

    stockModalIsOpen: boolean = false

    constructor(
        private stockService: StockService,
        private userToCommunityService: UserToCommunityControllerService,
        private tokenService: TokenService,
        private emplacementService: EmplacementControllerService
    ) {
        addIcons({ ...icons })
    }

    async ngOnInit(): Promise<void> {
        await this.stockService.getStocks().then((res) => {
            this.mockStocks = res
        })

        await this.userToCommunityService.getAllByCommunity("1").subscribe({
            next: (res: User[]) => {
                this.users = res
            },
            error: (err) => console.error(err),
        })
    }

    ionViewWillLeave() {
        this.openModal(false)
        console.log("Modal closed just before page changing")
    }

    openModal(value: boolean) {
        this.stockModalIsOpen = value
        console.log(this.stockModalIsOpen)
    }

    toggleInvitationModal() {
        this.isModalInvitationOpen = !this.isModalInvitationOpen
    }

    createNewStock($event: void) {
        const newEmplacement: Emplacement = {
            communityId: this.tokenService.getLoggedCommunityId(),
            name: $event!,
        }

        this.emplacementService.add(newEmplacement).subscribe(() => {
            console.log("Test add emplacement request....")
        })
    }
}
