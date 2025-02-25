import { Stock } from "./stock"
import { User } from "./user"

export interface Community {
    id: number
    name: string
    nbMember: number
}

export interface CommunityDetails {
    id: number
    name: string
    memberList: User[]
    stockList: Stock[]
}