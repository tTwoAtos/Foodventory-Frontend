import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const confirmPassword: string = control.value
        const password: string = control.parent?.get("password")?.value

        return confirmPassword === password ? null : { PasswordDontMatch: true }
    }
}
