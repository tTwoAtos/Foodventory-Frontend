import { RoleEntity } from "@app/apis/auth"

export interface Token {
    user_id?: number
    lastname?: string
    firstname?: string
    logged_in_community_id?: string
    role?: RoleEntity
}
