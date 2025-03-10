import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { RouterLink } from "@angular/router"
import { FooterComponent } from "@app/molecule/footer/footer.component"
import { HeaderComponent } from "@app/molecule/header/header.component"
import { IonicModule } from "@ionic/angular"

@Component({
    selector: "app-product-content",
    templateUrl: "./product-content.page.html",
    styleUrls: ["./product-content.page.scss"],
    standalone: true,
    imports: [IonicModule, CommonModule, RouterLink, HeaderComponent, FooterComponent],
})
export class ProductContentPage {

    headerTitle = " Nom produit"

    constructor() { }
}
