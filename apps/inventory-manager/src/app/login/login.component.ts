import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { TextConfirmDialogComponent } from '../error/text-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export class LoginErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm_usernameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  errorMatcher: LoginErrorStateMatcher = new LoginErrorStateMatcher();
  loginForm_passwordControl = new FormControl('', [Validators.required]);
  loginFromGroup: FormGroup = new FormGroup({
    username: this.loginForm_usernameControl,
    password: this.loginForm_passwordControl,
  });
  invalidCredentials: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) {}

  hide = true;
  submitBtn: boolean = false;
  submitBtnColor: any = '#7e7e7e';

  onSubmit(username: string, password: string) {
    this.loginForm_usernameControl.markAsTouched();
    this.loginForm_passwordControl.markAsTouched();
    let AuthService: AuthenticationService = new AuthenticationService();
    let Authorized: boolean = AuthService.login(username, password);
    if (Authorized) {
      this.router.navigate(['']);
    } else {
      this.invalidCredentials = true;
      this.submitBtn = false;
      this.submitBtnColor = '#7e7e7e';
      this.openDialog(
        'Login Failed',
        'Your username or password is incorrect.'
      );
    }
  }

  openDialog(title: string, message: string): void {
    this.dialog.open(TextConfirmDialogComponent, {
      width: '250px',
      data: { title, message },
    });
  }
}
