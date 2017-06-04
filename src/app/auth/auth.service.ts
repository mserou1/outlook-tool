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

}
