import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function maxAgeValidator(maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null
        }

        const today = new Date()
        const birthDate = new Date(control.value)
        const age = today.getFullYear() - birthDate.getFullYear()

        // Vérifier si l'utilisateur a moins de `maxAge` ans
        if (age > maxAge) {
            return { maxAge: { requiredAge: maxAge, actualAge: age } }
        }

        return null
    }
}
