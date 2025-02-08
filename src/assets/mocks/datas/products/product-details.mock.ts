import { ProductDetails } from "src/app/types/product"

export const mockProductDetailsList: ProductDetails[] = [
    {
        id: "1",
        name: `Gnocchi`,
        mark: `Lustucru`,
        ingredients: [`Farine`, `Oeuf`, `Eau`, `Sel`],
        nutriscore: `C`,
    },
    {
        id: "2",
        name: `Glace menthe chocolat`,
        mark: `Adélie`,
        ingredients: [
            `Sucre`,
            `Lactose`,
            `Eau`,
            `Graisse végétale`,
            `E471`,
            `Pâte de cacao`,
            `Emulsifiants`,
            `Arôme naturel de menthe`,
        ],
        nutriscore: `D`,
    },
    {
        id: "3",
        name: `Baguette Rustique`,
        mark: `Carrefour`,
        ingredients: [`Céréales`, `Eau`, `Farine`, `Sel`, `Gluten`, `Blé`],
        nutriscore: `C`,
    },
    {
        id: "4",
        name: `Dairy Dessert 0,1% with Green Apple`,
        mark: `Elle & Vire`,
        ingredients: [
            `Lait`,
            `Eau`,
            `Agare`,
            `Pommes`,
            `Additifs:épaississant`,
        ],
        nutriscore: `A`,
    },

    {
        id: "5",
        name: `Haricots verts extra-fins`,
        mark: `L'oiseau`,
        ingredients: [`Haricots verts extra-fins`],
        nutriscore: `A`,
    },
    {
        id: "6",
        name: `Filet de merlan`,
        mark: `Loc marée`,
        ingredients: [`Filet de merlan`],
        nutriscore: `A`,
    },
    {
        id: "7",
        name: `Rillettes du Mans`,
        mark: `Tradilège`,
        ingredients: [`Porc`, `Sel`, `Poivre`],
        nutriscore: `D`,
    },
    {
        id: "8",
        name: `Poelée asiatique`,
        mark: `D'aucy`,
        ingredients: [
            `Courgettes`,
            `Carottes`,
            `Poivrons jaunes`,
            `Pousses de haricots mungo`,
            `champignons noirs`,
        ],
        nutriscore: `A`,
    },
]
