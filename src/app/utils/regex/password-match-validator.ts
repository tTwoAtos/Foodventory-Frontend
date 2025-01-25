import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const confirmPassword: string = control.value
        const newPassword: string =
            control.parent?.get("newPassword")?.value ??
            control.parent?.get("password")?.value

        return confirmPassword === newPassword
            ? null
            : { PasswordDontMatch: true }
    }
}
