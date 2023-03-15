import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/validators/PasswordValidator';
import { AuthenticationService } from '../../core/authentication.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signInForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, PasswordValidator.pattern]),
  })
  constructor(private authService: AuthenticationService, private router: Router) {

  }

  onSubmit() {
    const request = { username: this.signInForm.value.username || '' }

    return this.authService.signIn(request).subscribe((response) => {

      if (response) {
        this.router.navigate(['profile'])
      }

    })
  }
}
