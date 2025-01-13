import { I18NHtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExceptionCode } from '@capacitor/core';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';
import { StockContentService } from 'src/assets/stock-content.service';

@Component({
  selector: 'stock-content',
  templateUrl: './stock-content.page.html',
  styleUrls: ['./stock-content.page.scss'],
})
export class StockContentPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: StockContentService
  ) {
    addIcons({ ...icons });
  }

  productCards: {
    name: string;
    amount: number;
  }[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let stockID = params.get('stockId');

      if (stockID != null) {
        this.service.getStockContent().subscribe({
          next: (data) => {
            this.productCards = data[parseInt(stockID) - 1].productList;
          },
          error: (e) => console.error(e),
        });
      } else {
        throw new ReferenceError();
      }
    });
  }
}
