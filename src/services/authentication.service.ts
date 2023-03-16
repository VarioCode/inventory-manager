import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  login(username: string, password: string) {
    //TODO: Implement this with API
    if (username === 'admin' && password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
