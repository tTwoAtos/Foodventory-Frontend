import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function WithMessage(
    validator: ValidatorFn,
    errorMessage?: string
): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const result = validator(control)

        if (result) {
            return { ...result, message: errorMessage }
        }
        return null
    }
}
