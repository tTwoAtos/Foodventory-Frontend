import { CommunityDetails } from "@app/types/community"

export const mockComs: CommunityDetails[] = [
    {
        id: 1,
        name: "T2nic",
        memberList: [{ id: 1, name: "Michel" }],
        stockList: [{
            id: 1,
            name: "Réfrigérateur",
            productTotal: 25,
        },
        {
            id: 2,
            name: "Congélateur",
            productTotal: 10,
        },
        {
            id: 3,
            name: "Placard",
            productTotal: 16,
        },],
    },
    {
        id: 2,
        name: "Les Alternés",
        memberList: [
            { id: 1, name: "Michel" }],
        stockList: [{
            id: 1,
            name: "Réfrigérateur",
            productTotal: 25,
        },
        {
            id: 2,
            name: "Congélateur",
            productTotal: 10,
        },
        {
            id: 3,
            name: "Placard",
            productTotal: 16,
        },],
    },
    {
        id: 3,
        name: "La communauté de l'agneaux",
        memberList: [{ id: 1, name: "Michel" }],
        stockList: [{
            id: 1,
            name: "Réfrigérateur",
            productTotal: 25,
        },
        {
            id: 2,
            name: "Congélateur",
            productTotal: 10,
        },
        {
            id: 3,
            name: "Placard",
            productTotal: 16,
        },],
    },
]