import { PASSWORD_MIN_LENGTH } from "./const"

export const DefaultMessage = {
    Required: "Ce champ est requis",
    Email: "Le format de cet email n'est pas valide",
    Date: "Cette date n'est pas valide",
    PasswordRegex:
        "Le mot de passe doit contenir au moins une minuscule, une majuscule, un chiffre et un caractère spécial",
    PasswordMatch: "Les mots de passe ne correspondent pas",
    PasswordMinLength: `Le mot de passe doit faire au minimum ${PASSWORD_MIN_LENGTH} caractères`,
}
