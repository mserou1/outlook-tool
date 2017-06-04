import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';


@Injectable()
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'R7GlazvaYq2Xcn3TWjoCfGz8IjWhrdI2',
    domain: 'marieclaireserou.auth0.com',
    responseType: 'token id_token',
    audience: 'https://marieclaireserou.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/callback',
        scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    console.log("login()");
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setSession(authResult): void {

    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');

    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

}