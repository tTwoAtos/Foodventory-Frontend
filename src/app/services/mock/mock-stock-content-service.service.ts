import { Injectable } from "@angular/core"

@Injectable({
    providedIn: "root",
})
export class MockStockContentService {
    mocks = [
        {
            id: 1,
            name: "Réfrégirateur",
            productList: [
                {
                    name: "Biscuit",
                    nbScanned: 1,
                    nbAdded: 3,
                    thumbnail: "",
                    eancode: "3642901334925",
                },
                {
                    name: "Gnocchi",
                    nbScanned: 1,
                    nbAdded: 4,
                    thumbnail: "",
                    eancode: "6498555721652",
                },
                {
                    name: "Baguette mi-cuite",
                    nbScanned: 1,
                    nbAdded: 10,
                    thumbnail: "",
                    eancode: "6630758201322",
                },
                {
                    name: "Viande rouge",
                    nbScanned: 1,
                    nbAdded: 1,
                    thumbnail: "",
                    eancode: "7985662344012",
                },
                {
                    name: "Pommes verte",
                    nbScanned: 1,
                    nbAdded: 6,
                    thumbnail: "",
                    eancode: "7855421520300",
                },
            ],
        },
        {
            id: 2,
            name: "Congélateur",
            productList: [
                {
                    name: "Glaces",
                    nbScanned: 1,
                    nbAdded: 3,
                    thumbnail: "",
                    eancode: "7522013545569",
                },
                {
                    name: "Poissons",
                    nbScanned: 1,
                    nbAdded: 4,
                    thumbnail: "",
                    eancode: "8520023365214",
                },
                {
                    name: "Haricots verts - 500g",
                    nbScanned: 1,
                    nbAdded: 2,
                    thumbnail: "",
                    eancode: "0043168245824",
                },
                {
                    name: "Poelée paysanne",
                    nbScanned: 1,
                    nbAdded: 2,
                    thumbnail: "",
                    eancode: "0148672589562",
                },
            ],
        },
    ]

    constructor() {}
}
