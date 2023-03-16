import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from '@angular/material/input';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router) { }

  hide = true;
  submitBtn: boolean = false;
  username: boolean = false;
  password: boolean = false;

  onInput(event: any) {
    if (event.target.name === 'username') {
      if (event.target.value.length < 3) {
        this.username = true;
        this.submitBtn = false;
      } else {
        this.username = false;
        this.submitBtn = true;
      }
    } else if (event.target.name === 'password') {
      if (event.target.value.length > 3) {
        this.password = true;
        this.submitBtn = false;
      } else {
        this.password = false;
        this.submitBtn = true;
      }
    }
  }

  onSubmit(event: any) {
    let AuthService: AuthenticationService = new AuthenticationService();
    let Authorized = AuthService.login(event.username, event.password);
    if (Authorized) {
      this.router.navigate(['/home']).then(r => console.log(r));
    }
  }


}
