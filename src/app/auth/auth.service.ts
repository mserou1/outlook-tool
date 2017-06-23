import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';


@Injectable()
export class AuthService {

  userProfile: any;
  requestedScopes: string = 'openid profile read:contacts read:calendars';

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: AUTH_CONFIG.callbackURL,
    scope: this.requestedScopes
  });

  constructor(public router: Router) {}

  public login(): void {
    console.log("login()");
    this.auth0.authorize();

  //  this.handleAuthentication();
  }

  public handleAuthentication(): any {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
        console.log(authResult);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
      }
      console.log(authResult);
      return authResult;

    });
  }

  private setSession(authResult): void {

    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    const scopes = authResult.scope || this.requestedScopes || '';

    localStorage.setItem('profile', JSON.stringify(authResult.idTokenPayload));
    console.log("immediately after being set:" + localStorage.getItem('profile'));
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }

  public logout(): void {

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');

    this.router.navigate(['/login/login.component']);
  }

  public isAuthenticated(): boolean {

    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if(!accessToken){
      throw new Error('Access token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) =>{
      if(profile){
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  //  return JSON.parse(localStorage.getItem('profile'));
  }

  public userHasScopes(scopes: Array<string>): boolean {
    const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
    return scopes.every(scope => grantedScopes.includes(scope));
  }

}
