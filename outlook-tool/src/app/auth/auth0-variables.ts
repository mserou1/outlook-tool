interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'R7GlazvaYq2Xcn3TWjoCfGz8IjWhrdI2',
  domain: 'marieclaireserou.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
