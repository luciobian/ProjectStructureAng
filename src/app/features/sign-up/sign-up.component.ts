import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/validators/PasswordValidator';
import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, PasswordValidator.pattern]),
    confirmPassword: new FormControl('', [Validators.required],
    )
  },
    {
      validators: PasswordValidator.matchValidator
    })
  constructor(private authService: AuthenticationService, private router: Router) { }

  onSubmit(): void {
    const request = { email: this.signUpForm.value.email || '', name: this.signUpForm.value.name || '' }

    this.authService.signUp(request).subscribe((response) => {
      if (response) {
        this.router.navigate(['profile']);
      }
    })
  }
}
