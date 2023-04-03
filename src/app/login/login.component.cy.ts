import { LoginComponent } from './login.component';
import { MatDialog } from '@angular/material/dialog';

describe('LoginComponent', () => {
  it('mounts', () => {
    cy.mount('<app-login></app-login>', {
      declarations: [LoginComponent],
    });
    cy.get('username').type('admin');
    cy.get('password').type('admin');
    cy.get('submit').click().intercept('');
  });
});
