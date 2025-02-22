import { CommonModule } from "@angular/common"
import { HttpClient } from "@angular/common/http"
import { Component, OnInit, Output } from "@angular/core"
import { RouterLink } from "@angular/router"
import { InfoCardComponent } from "@app/molecule/info-card/info-card.component"
import { StockService } from "@app/services/stock-service/stock.service"
import { Stock } from "@app/types/stock"
import { IonicModule } from "@ionic/angular"
import { addIcons } from "ionicons"
import * as icons from "ionicons/icons"
import { FooterComponent } from "../../molecule/footer/footer.component";
import { HeaderComponent } from "../../molecule/header/header.component";

@Component({
    selector: "app-stock",
    templateUrl: "./stock.page.html",
    styleUrls: ["./stock.page.scss"],
    providers: [HttpClient],
    standalone: true,
    imports: [IonicModule, CommonModule, InfoCardComponent, RouterLink, FooterComponent, HeaderComponent],
})
export class StockPage implements OnInit {
    mockStocks: Stock[] = []

    selectedCategories = [
        {
            name: "Viande",
            icon: "paw-outline"
        },
        {
            name: "Dessert",
            icon: "ice-cream-outline"
        },
        {
            name: "Poisson",
            icon: "fish-outline"
        },
        {
            name: "Fruits & Légumes",
            icon: "nutrition-outline"
        },
        {
            name: "Boisson",
            icon: "beer-outline"
        },
        {
            name: "Fast-food",
            icon: "fast-food-outline"
        },
        {
            name: "Surgelés",
            icon: "snow-outline"
        }
    ]

    constructor(private stockService: StockService) {
        addIcons({ ...icons })
    }



    async ngOnInit(): Promise<void> {
        await this.stockService.getStocks().then((res) => {
            this.mockStocks = res
        })
    }

    @Output() icon = "restaurant-outline"
    @Output() headerIcon = "caret-back-outline"
    @Output() headerTitle = "Les alternées"
}
