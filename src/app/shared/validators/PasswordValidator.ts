import { AbstractControl } from "@angular/forms";

export class PasswordValidator {
    static pattern(control: AbstractControl): { [key: string]: boolean } | null {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
        if (control.value && !control.value.match(passwordRegex)) {
            return { 'invalidPassword': true };
        }
        return null;
    }

    static matchValidator(control: AbstractControl): { [key: string]: boolean } | null {
        const password = control.get('password');
        const confirmPassword = control.get('confirmPassword');

        return password?.value !== confirmPassword?.value
            ? { 'passwordMismatch': true }
            : null;
    };
}