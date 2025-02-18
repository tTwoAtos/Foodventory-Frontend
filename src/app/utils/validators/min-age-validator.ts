import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function minAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
            return null
        }

        const today = new Date()
        const birthDate = new Date(control.value)
        const age = today.getFullYear() - birthDate.getFullYear()

        // Vérifier si l'utilisateur a au moins `minAge` ans
        if (age < minAge) {
            return { minAge: { requiredAge: minAge, actualAge: age } }
        }

        return null
    }
}
