// export interface Product {}

export interface ProductCardType {
    productId?: string
    name: string
    amount: number
}

export interface ProductDetails {
    id: string
    name: string
    mark: string
    ingredients: string[]
    nutriscore: string
}
export interface ProductStoredType {
    productId?: string
    name: string
    qte: number
    communityId: number
    emplacementId: number
}
