import { RoleEntity } from "@app/apis/auth"

export interface Token {
    user_id?: number
    lastname?: string
    firstname?: string
    loggedInCommunityId?: string
    role?: RoleEntity
}
