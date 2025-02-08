import { StockDetails } from "@app/types/stock"

export const mockStockDetails: StockDetails[] = [
    {
        id: 1,
        name: "Réfrégirateur",
        productList: [
            { id: "1", name: "Biscuit", amount: 3 },
            { id: "2", name: "Gnocchi", amount: 4 },
            { id: "3", name: "Baguette mi-cuite", amount: 10 },
            { id: "4", name: "Viande rouge", amount: 1 },
            { id: "5", name: "Pommes verte", amount: 6 },
        ],
    },
    {
        id: 2,
        name: "Congélateur",
        productList: [
            { id: "1", name: "Glaces", amount: 3 },
            { id: "2", name: "Poissons", amount: 4 },
            { id: "3", name: "Haricots verts - 500g", amount: 2 },
            { id: "4", name: "Poelée paysanne", amount: 2 },
        ],
    },
    {
        id: 3,
        name: "Placard",
        productList: [
            { id: "1", name: "Granolas - 500g", amount: 2 },
            { id: "2", name: "Pâtes spaghetti - 1kg", amount: 3 },
        ],
    },
]
