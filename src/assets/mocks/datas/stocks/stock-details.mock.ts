import { StockDetails } from "@app/types/stock"

export const mockStockDetails: StockDetails[] = [
    {
        id: 1,
        name: "Réfrégirateur",
        productList: [
            { name: "Biscuit", amount: 3 },
            { name: "Gnocchi", amount: 4 },
            { name: "Baguette mi-cuite", amount: 10 },
            { name: "Viande rouge", amount: 1 },
            { name: "Pommes verte", amount: 6 },
        ],
    },
    {
        id: 2,
        name: "Congélateur",
        productList: [
            { name: "Glaces", amount: 3 },
            { name: "Poissons", amount: 4 },
            { name: "Haricots verts - 500g", amount: 2 },
            { name: "Poelée paysanne", amount: 2 },
        ],
    },
    {
        id: 3,
        name: "Placard",
        productList: [
            { name: "Granolas - 500g", amount: 2 },
            { name: "Pâtes spaghetti - 1kg", amount: 3 },
        ],
    },
]
